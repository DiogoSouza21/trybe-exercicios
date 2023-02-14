const descriptionValidation = (req, res, _next) => {
  try {
    const { description } = req.body;
    
    if(description === undefined) {
      return res.status(404).json({ message:'Chave "description" não encontrada' });
    }
    
    const { createdAt, rating, difficulty } = description;
    if((createdAt && rating && difficulty) === undefined) {
      return res.status(404)
      .json({ message: 'Chaves "createdAt", "rating" e/ou "difficulty" não encontrada'});
    }

    if(!rating && rating !== 0) return res.status(400).json({ message: "O campo rating é obrigatório" });

    if(!difficulty) return res.status(400).json({ message: "O campo difficulty é obrigatório" });

    if(!createdAt) return res.status(400).json({ message: "O campo createdAt é obrigatório" });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  // next();
}

module.exports = descriptionValidation;
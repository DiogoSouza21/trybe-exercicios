const priceValidation = (req, res, next) => {
  try {
    const { price } = req.body;
    
    if(price === undefined) return res.status(404).json({ message: 'Chave "price" não encontrada' });

    if(price < 0) return res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });

    if(!price && price !== 0) return res.status(400).json({ "message": "O campo price é obrigatório" });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  next();
};

module.exports = priceValidation;
const nameVerification = (req, res, next) => {
  const { name } = req.body;
  if(name === undefined) {
    return res.status(404).json({ message: 'Chave "name" não encontrada' });
  }
  
  if(!name.length) {
    return res.status(400).json({ message: 'O campo name é obrigatório' });
  }
  
  next();
};

module.exports = nameVerification;
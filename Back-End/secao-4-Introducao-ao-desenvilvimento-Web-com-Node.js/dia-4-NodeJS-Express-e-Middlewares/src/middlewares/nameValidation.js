const nameVerification = (req, res, _next) => {
  const { name } = req.body;
  if(name === undefined) return res.status(404).json({ message: 'Chave "name" não encontrada' });
  
  if(!name.length) return res.status(400).json({ message: 'O campo name é obrigatório' });

  if(name.length < 4) {
    return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" });
  }
  
  // next();
};

module.exports = nameVerification;
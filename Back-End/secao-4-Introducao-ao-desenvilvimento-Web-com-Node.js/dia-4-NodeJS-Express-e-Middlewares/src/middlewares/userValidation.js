const userValidations = (req, res, next) => {
  const { email, password, firstName, phone } = req.body;
  if( (email && password && firstName && phone) === undefined ) {
    return res.status(404)
      .json({ message: 'Chave "email", "password", "firstName" e/ou "phone" não encontrada' });
  }
  if( !email || !password || !firstName || !phone ){
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
  next();
}

module.exports = userValidations;
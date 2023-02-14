const priceValidation = (req, res, next) => {
  try {
    const { price } = req.body;
    // console.log(`1º caso: Chave price ñ existe ${price === undefined}`);
    // console.log(`2º caso: Price menor que 0 ${price < 0}`);
    // console.log(`3º caso: Campo price sem nada ${price}`);
    
    if(price === undefined) return res.status(404).json({ message: 'Chave "price" não encontrada' });

    if(price < 0) return res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });

    if(!price && price !== 0) return res.status(400).json({ "message": "O campo price é obrigatório" });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  next();
};

module.exports = priceValidation;
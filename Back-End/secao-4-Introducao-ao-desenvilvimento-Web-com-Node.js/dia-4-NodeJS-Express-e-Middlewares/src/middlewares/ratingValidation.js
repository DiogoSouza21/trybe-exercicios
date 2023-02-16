const ratingValidation = (req, res) => {
  const { description: { rating }} = req.body;
  if(rating < 1 || rating > 5) {
    return res.status(400)
    .json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
  }
}

module.exports = ratingValidation;
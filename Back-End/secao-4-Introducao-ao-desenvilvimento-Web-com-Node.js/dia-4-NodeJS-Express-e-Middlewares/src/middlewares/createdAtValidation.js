const createdAtValidation = (req, res) => {
  const { description: { createdAt }} = req.body;
  const dateRegex = /(\d{2})[\/](\d{2})[\/](\d{4})/;
  if(!dateRegex.test(createdAt)) {
    return res.status(400).json({ message: 'O campo "createdAt" deve ter o formato "dd/mm/aaaa"' });
  }
}

module.exports = createdAtValidation;
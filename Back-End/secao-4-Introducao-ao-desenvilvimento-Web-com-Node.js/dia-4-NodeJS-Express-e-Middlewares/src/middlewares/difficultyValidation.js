const difficultyValidation = (req, res, _next) => {
  try {
    const { description: { difficulty }} = req.body;
    const arrDifficulty = ['Fácil', 'Médio', 'Difícil'];
    if(!arrDifficulty.includes(difficulty)) {
      return res.status(400)
      .json({ "message": "O campo difficulty deve ser 'Fácil', 'Médio' ou 'Difícil'" })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  // next();
}

module.exports = difficultyValidation;
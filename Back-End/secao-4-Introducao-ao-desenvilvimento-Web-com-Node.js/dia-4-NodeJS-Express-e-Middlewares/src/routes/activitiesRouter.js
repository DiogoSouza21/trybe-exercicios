const express = require('express');

const allValidations = require('../middlewares/allValidations');

const router = express.Router();

router.post('/', allValidations, (_req, res) => {
  try {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
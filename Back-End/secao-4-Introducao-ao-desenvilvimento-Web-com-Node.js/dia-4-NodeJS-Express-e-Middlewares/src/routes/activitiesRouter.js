const express = require('express');

const nameVerification = require('../middlewares/nameVerification');

const router = express.Router();

router.post('/', nameVerification, function(req, res, next) {
  try {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
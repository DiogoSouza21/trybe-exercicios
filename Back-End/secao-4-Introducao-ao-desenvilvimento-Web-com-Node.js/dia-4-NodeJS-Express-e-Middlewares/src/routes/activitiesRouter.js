const express = require('express');

const nameValidation = require('../middlewares/nameValidation');
const priceValidation = require('../middlewares/priceValidation');
const descriptionValidation = require('../middlewares/descriptionValidation');
const createdAt = require('../middlewares/createdAtValidation');

const router = express.Router();

router.post('/',
  nameValidation,
  priceValidation,
  descriptionValidation,
  createdAt,
  function(_req, res, next) {
    try {
      res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

module.exports = router;
const nameValidation = require('./nameValidation');
const priceValidation = require('./priceValidation');
const descriptionValidation = require('./descriptionValidation');
const createdAtValidation = require('./createdAtValidation');
const ratingValidation = require('./ratingValidation');
const difficultyValidation = require('./difficultyValidation');

const allValidations = (req, res, next) => {
  nameValidation(req, res);
  priceValidation(req, res);
  descriptionValidation(req, res);
  createdAtValidation(req, res);
  ratingValidation(req, res);
  difficultyValidation(req, res);
  next();
}

module.exports = allValidations;
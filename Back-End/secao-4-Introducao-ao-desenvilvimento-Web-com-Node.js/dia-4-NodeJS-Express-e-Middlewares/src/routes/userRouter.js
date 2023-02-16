const express = require('express');
const userValidations = require('../middlewares/userValidation');
const generateToken = require('../helpers/generateToken');

const userRouter = express.Router();

userRouter.post('/', userValidations, (_req, res) => {
  try {
    token = generateToken();
    return res.status(200).json({ token: `| ${token} | gerado com sucesso!!`});
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = userRouter;
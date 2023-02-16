const express = require('express');

const userRouter = express.Router();

userRouter.post('/', (_req, res) => {
  try {
    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!!'});
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = userRouter;
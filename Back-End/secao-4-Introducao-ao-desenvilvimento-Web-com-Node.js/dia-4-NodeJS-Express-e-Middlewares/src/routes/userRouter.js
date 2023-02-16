const express = require('express');
const userValidations = require('../middlewares/userValidation');
const generateToken = require('../helpers/generateToken');
const fs = require('../helpers/fsHelper');

const path = '../database/userDb.json';

const userRouter = express.Router();

userRouter.post('/', userValidations, async (req, res) => {
  try {
    token = generateToken();
    const users = await fs.readData(path);
    const newUser = {
      id: users.length + 1,
      token,
      ...req.body,
    }
    users.push(newUser);
    await fs.writeData(path, users);
    return res.status(200).json({ token: `| ${token} | gerado com sucesso!!`});
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = userRouter;
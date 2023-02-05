const express = require('express');

const readFile = require('./helpers/fs/readFile');

const app = express();

app.use(express.json());

module.exports = app;
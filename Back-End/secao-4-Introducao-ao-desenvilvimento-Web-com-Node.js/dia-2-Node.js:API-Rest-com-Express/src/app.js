const express = require('express');
const readFile = require('./helpers/fs/readFile.js');
const movieRouter = require('./routes/moviesRoutes.js');

const app = express();

app.use(express.json());
app.use("/movies", movieRouter);

module.exports = app;
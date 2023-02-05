const express = require('express');
const movieRouter = express.Router();
const readFile = require('../helpers/fs/readFile.js');

movieRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const movieSearch = movies.find((movie) => movie.id === Number(id));
    if(!movieSearch) return res.status(404).json({ message: 'Movie not found'});
    return res.status(200).json(movieSearch);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = movieRouter;
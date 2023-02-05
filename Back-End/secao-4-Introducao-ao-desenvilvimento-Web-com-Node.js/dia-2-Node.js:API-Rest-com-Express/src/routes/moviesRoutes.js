const express = require('express');
const movieRouter = express.Router();
const readFile = require('../helpers/fs/readFile');
const writeFile = require('../helpers/fs/writeFile');
const verificationId = require('../middleware/verificationId');

movieRouter.get('/:id', verificationId, async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const movieSearch = movies.find((movie) => movie.id === Number(id));
    return res.status(200).json(movieSearch);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

movieRouter.get('/', async (req, res) => {
  try {
    const movies = await readFile();
    return res.status(200).json(movies);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

movieRouter.post('/', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await writeFile(allMovies);
    return res.status(200).json(allMovies);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

movieRouter.put('/:id', verificationId, async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile();
    const movieFilter = movies.filter((movie) => movie.id !== Number(id));
    const newMovie = {
      id: Number(id),
      movie,
      price
    };
    const allMovies = JSON.stringify([...movieFilter, newMovie]);
    await writeFile(allMovies);
    return res.status(200).json(allMovies);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

movieRouter.delete('/:id', verificationId, async (req, res) => {
  try {
    const movies = await readFile();
    const { id } = req.params;
    const newMovies = movies.filter((movie) => movie.id !== Number(id));
    await writeFile(JSON.stringify(newMovies));
    return res.status(200).json(newMovies);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = movieRouter;
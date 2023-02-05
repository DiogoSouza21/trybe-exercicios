const readFile = require('../helpers/fs/readFile');

const idVerification = async (req, res, next) => {
  const { id } = req.params;
  const movies = await readFile();
  const idVerification = movies.some((movie) => movie.id === Number(id));
  if(!idVerification) return res.status(404).json({ message: 'Movie not found' });
  next();
}

module.exports = idVerification;
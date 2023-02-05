const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve('src', 'db', 'movies.json');

const writeFile = async (movies) => {
  try {
    const data = await fs.writeFile(moviesPath, movies);
    return JSON.parse(data);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = writeFile;
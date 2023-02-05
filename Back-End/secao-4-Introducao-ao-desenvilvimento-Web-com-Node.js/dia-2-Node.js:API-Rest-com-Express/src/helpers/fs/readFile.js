const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve('src', 'db', 'movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = readFile;
const fs = require('fs').promises;
const { join } = require('path');

const readData = async (path) => {
  const response = await fs.readFile(join(__dirname, path), 'utf-8');
  return JSON.parse(response);
};

const writeData = async (path, data) => {
  await fs.writeFile(join(__dirname, path), JSON.stringify(data, null, 2));
};

module.exports = {
  readData,
  writeData,
};
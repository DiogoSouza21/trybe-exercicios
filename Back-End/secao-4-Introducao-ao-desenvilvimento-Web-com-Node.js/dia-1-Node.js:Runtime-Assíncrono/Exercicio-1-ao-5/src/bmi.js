const readline = require('readline-sync');

const weightI = () => readline.question('Insira o peso em kilograma: ');
const heightI = () => readline.question('Insira a altura em metros: ');

module.exports = { weightI, heightI };

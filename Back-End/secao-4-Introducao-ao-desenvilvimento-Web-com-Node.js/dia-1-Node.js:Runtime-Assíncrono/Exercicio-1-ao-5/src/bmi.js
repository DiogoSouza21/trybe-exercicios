const readline = require('readline-sync');

const pesoI = () => readline.question('Insira o peso em kilograma: ');
const alturaI = () => readline.question('Insira a altura em metros: ');

module.exports = { pesoI, alturaI };

const { pesoI, alturaI } = require('./bmi');

const peso = pesoI();
const altura = alturaI();

const imc = peso / (altura ** 2);
console.log(`IMC = ${imc.toFixed(1)}`);

if (imc < 18.5) {
  console.log('Abaixo do peso (magreza');
} else if (imc <= 24.9) {
  console.log('Peso normal');
} else if (imc <= 29.9) {
  console.log('Sobrepeso');
} else if (imc <= 34.9) {
  console.log('Obesidade grau I');
} else if (imc <= 39.9) {
  console.log('Obesidade grau II')
} else console.log('Obesidade graus III e IV')

const pesoAceitavel = 29.9 * (altura ** 2);
const pesoIdeal = 24.9 * (altura ** 2);
console.log(`Peso aceitável: ${pesoAceitavel.toFixed(2)}`)
console.log(`Peso ideal: ${pesoIdeal.toFixed(2)}`)

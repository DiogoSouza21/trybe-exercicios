const { pesoI, alturaI } = require('./bmi');

const peso = pesoI();
const altura = alturaI();

const imc = peso / (altura ** 2);
console.log(`IMC = ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log('Abaixo do peso');
} else if (imc < 25) {
  console.log('Peso normal');
} else if (imc < 30) {
  console.log('Sobrepeso');
} else {
  console.log('Obesidade');
}

const pesoAceitavel = 30 * (altura ** 2);
const pesoIdeal = 25 * (altura ** 2);
console.log(`Peso aceitável: ${pesoAceitavel.toFixed(2)}`)
console.log(`Peso ideal: ${pesoIdeal.toFixed(2)}`)

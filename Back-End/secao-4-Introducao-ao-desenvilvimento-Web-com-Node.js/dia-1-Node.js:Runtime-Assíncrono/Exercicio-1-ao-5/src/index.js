const { weightI, heightI } = require('./bmi');

const weight = weightI();
const height = heightI();

const BMI_MIN_AND_MAX = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100,
  },
};

handleBMI(weight, height);

function handleBMI(weight, height) {
  const bmi = weight / (height ** 2);
  bmiResult(bmi);
}

function bmiResult(bmi) {
  const statuses = Object.keys(BMI_MIN_AND_MAX);
  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MIN_AND_MAX[status]
    return bmi >= minBMI && bmi <= maxBMI;
  });
  console.log(resultFind);
  return resultFind; 
}

// const pesoAceitavel = 29.9 * (altura ** 2);
// const pesoIdeal = 24.9 * (altura ** 2);
// console.log(`Peso aceitável: ${pesoAceitavel.toFixed(2)}`)
// console.log(`Peso ideal: ${pesoIdeal.toFixed(2)}`)

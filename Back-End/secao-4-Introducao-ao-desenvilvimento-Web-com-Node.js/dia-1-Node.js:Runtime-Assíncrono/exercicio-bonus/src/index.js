const readLine = require('readline-sync');
const fibonacci = require('./fibonacci');

function main() {
  const numFibo = readLine.questionInt('Até qual nº de Fibonacci: ');
  if(numFibo >= 0){
    const arrFibo = fibonacci(numFibo);
    console.log(arrFibo);
  } else console.log("Número inválido!!!");
}

main();
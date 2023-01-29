const readLine = require('readline-sync');
const fibonacci = require('./fibonacci');
const promise = require('./promise'); 

// function fibo {
//   const numFibo = readLine.questionInt('Até qual nº de Fibonacci: ');
//   if(numFibo >= 0){
//     const arrFibo = fibonacci(numFibo);
//     console.log(arrFibo);
//   } else console.log("Número inválido!!!");
// }

function nPromise() {
  const num1 = readLine.questionInt('Primeiro número: ');
  const num2 = readLine.questionInt('Segundo número: ');
  const num3 = readLine.questionInt('Terceiro número: ');
  promise(num1, num2, num3);
}

function main() {
  // fibo();
  nPromise();
}

main();
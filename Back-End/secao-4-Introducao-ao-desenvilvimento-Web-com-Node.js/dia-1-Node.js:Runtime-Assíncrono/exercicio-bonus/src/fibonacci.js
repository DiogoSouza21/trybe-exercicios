function fibonacci(num){
  let arrFibo = [1, 1];
  for (let index = 2; index < num; index += 1) {
    arrFibo[index] = arrFibo[(index - 1)] + arrFibo[(index - 2)]; 
  }
  return arrFibo;
}

module.exports = fibonacci;
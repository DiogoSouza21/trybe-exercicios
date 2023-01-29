function promise(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    const result = (num1 + num2) * num3;
    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }
    console.log(result);
    resolve(result);
  })
}

module.exports = promise;
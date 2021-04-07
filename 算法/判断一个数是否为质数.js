function isPrime(number) {
  // 补全代码
  if (number === 1 || number === 2) {
    return false;
  }
  for(let i = 2; i <= Math.floor(number/2); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(3));
/**
 * 质数生成器
 */
var getNum = (function getPrime() {
  let num = 2;
  return () => {
    while (!isPrime(++num)) {}
    return num;
  }
})()

function isPrime(num) {
  for(let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var fn = getNum()
console.log(fn)
var fn = getNum()
console.log(fn)
var fn = getNum()
console.log(fn)
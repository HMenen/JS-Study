var arr = [1, 2, 3, 4, 5];

function randomRank(arr) {
  return arr.map(item => ({
    value: item,
    key: Math.random()
  })).sort((a, b) => a.key - b.key).map(item => item.value)
}

// console.log(randomRank(arr))

function randomRank1(arr) {
  for(let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let random_index = Math.floor(Math.random() * arr.length)
    arr[i] = arr[random_index];
    arr[random_index] = temp;
  }
  return arr;
}
// console.log(randomRank(arr))

function add() {
  let sum = 0;
  function getSum(...args) {
    sum = args.reduce((prev, cur) => prev + cur, sum);
    return getSum;
  }
  getSum.toString = function() {
    return sum;
  }
  return getSum(...arguments)
}

function add1() {
  let sum = 0;
  var fn = function (...args) {
    sum = args.reduce((pre, now) => pre + now, sum)
    return fn;
  }
  
  fn.toString = function() {
    return sum;
  }

  return fn(...arguments);
}

console.log(add1(1)(2)(3))


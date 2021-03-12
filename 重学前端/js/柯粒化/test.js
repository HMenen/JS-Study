function add() {
  var sum = 0;
  function getSum(...args) {
    sum = args.reduce((prev, cur) =>  prev + cur, sum);
    return getSum
  }

  getSum.toString = function() {
    return sum;
  }
  return getSum(...arguments);
}

var s1 = add(1)(2, 3)(100);
console.log('---------', s1, s1(1)(2) + 2)
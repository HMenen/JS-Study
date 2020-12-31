function add1() {
  let sum = 0;
  var fn = function (...args) {
    // for (let i = 0; i < args.length; i++) {
    //   sum += args[i];
    // }
    sum = args.reduce((pre, now) => pre + now, sum)
    return fn;
  }
  
  fn.toString = function() {
    return sum;
  }

  return fn(...arguments);
}

// var s1 = add(1)(2, 3)(100);
// console.log('---------', s1, s1(1) + 2)

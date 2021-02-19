/**
 * mySum可以无限调用，直到mySum遇到没有参数时才能停止输出最终的sum值，
 */
function mySum() {
  let sum = 0;
  let allArgs = [];
  var func = function (){
    if (arguments.length === 0) {
      for (let i = 0; i < allArgs.length; i++) {
        sum += +allArgs[i]
      }
      return sum
    } else {
      allArgs = [...allArgs, ...arguments]
      return func;
    }
  }
  return func(...arguments); 
}

function mySum2() {
  let args = [];
  var sumFun = function() {
    if (arguments.length === 0) {
      return args.reduce((pre, now) => pre + now, 0)
    } else {
      args = [...args, ...arguments];
      return sumFun
    }
  }
  return sumFun(...arguments);
}

function add() {
  let sum = 0;
  var sumFun = function(...args) {
    sum = args.reduce((pre, now) => pre + now, sum);
    return sumFun;
  }

  sumFun.toString = function() {
    return sum
  }

  return sumFun(...arguments);
}

console.log(mySum(1, 2)(1, 2, 3)(111)(1)(1)(2)(1)(22)());
console.log(mySum2(1, 2)(1, 2, 3)(111)(1)(1)(2)(1)(22)());
console.log(add(1, 2)(1, 2, 3)(111)(1)(1)(2)(1)(22) + 0);
// var s1 = add(1)(2, 3)(100);
// console.log('---------', s1, s1(1) + 2)
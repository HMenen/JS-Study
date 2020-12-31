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


console.log(mySum(1, 2)(1, 2, 3)(111)(1)(1)(2)(1)())
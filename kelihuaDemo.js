/**
 * 
 * @param {Function} fn 
 */
function curry(fn) {
  const args = [].slice.call(arguments, 1); //arguments[0]为fn
  return function() {
    const newArgs = args.concat(Array.from(arguments));
    return fn.apply(this, newArgs)
  }
}

function add(a, b) {
  return a + b;
}

// var addCurry = curry(add, 1, 2);
// console.log(addCurry()) //3

/**
 * 柯里化函数
 */
function curryEnhance() {
  const args = [].slice.call(arguments, 1);
  const fn = arguments[0];
  return function() {
    let newArgs = [].slice.call(arguments).concat(args);
    if(fn.length > newArgs.length) {
      return curryEnhance(fn, ...newArgs);
    } else {
      return fn.apply(this, newArgs);
    }
  }
}

let ret = curryEnhance(add)(2)(1);
console.log(ret)
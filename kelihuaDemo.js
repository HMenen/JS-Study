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

var addCurry = curry(add, 1, 2);
console.log(addCurry()) //3
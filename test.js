function deepClone(obj) {
  let ret = obj;
  if (obj && typeof obj === 'object') {
    Array.isArray(obj) ? ret = [] : ret = {};
    Object.keys(obj).forEach(key => {
      ret[key] = deepClone(obj[key]);
    })
  }
  return ret;
}

// let ha = {a: 1, a2: 'aasss',b:{c: 2, d:{e: 3, f: 4}}, ha: 'hahaha'}
// let obj = deepClone(ha);
// obj.a = 222;
// console.log(obj);
// console.log(ha);

function debounce(func, wait) {
  let timer;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    let context = this;
    let args = Array.from(arguments);
    timer = setTimeout(() => {
      func.apply(context, args)
    }, wait);
  }
}

Array.prototype.myReduce = function(cb) {
  const context = this;
  let initValue = undefined, valueIndex = 0,  curPresent = false;
  let accumulator = undefined;
  const len = context.length;
  if (arguments.length > 1) {
    initValel = arguments[1];
    accumulator = initValue;
  } else {
    accumulator = context[valueIndex];
    ++valueIndex;
  }

  while (valueIndex < len) {
    curPresent = context.hasOwnProperty(valueIndex);
    const curValue = context[valueIndex];
    accumulator = cb.apply(undefined, [accumulator, curValue, valueIndex, context]);
    ++valueIndex;
  }
  return accumulator;
}

var arr = [1, 2, 3, 4];
// var sum = arr.myReduce(function(prev, cur, index, arr) {
//     console.log(prev, cur, index);
//     return prev + cur;
// })
// console.log(arr, sum);

Array.myIsArray = function(o) {
  return Object.prototype.toString.call(Object(o)) === '[object Array]';
}

console.log(Array.myIsArray(arr))
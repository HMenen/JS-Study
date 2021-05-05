//1. new 实现一个new
function myNew(parent) {
  // let obj = {};
  // obj.__proto__ = parent.prototype;
  let obj = Object.create(parent.prototype);
  let ret = parent.apply(obj);
  if (typeof ret === 'object' || typeof ret === 'function') {
    return ret;
  } else {
    return obj;
  }
}


function throttle(fn, delay, isImmediate = false) {
  let timer;
  let isNow = true
  return (...args) => {
    if (timer) {
      return
    }
    if (isNow && isImmediate) {
      fn.apply(this, args);
      isNow = false;
      timer = setTimeout(() => {
        isNow = true
      }, delay)
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay)
    }
  }
}

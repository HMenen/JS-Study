/**
 * 简易版防抖
 * @param {Function} fn 
 * @param {number} delay 
 */
function debounce(fn, delay=1000) {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay)
  }
}


// function a(i) {
//   console.log('------1------', i)
// }

// const newA = debounce(a);
// newA(1);
// newA(11);
// newA(111);
// setTimeout(() => newA(2), 1001);
// setTimeout(() => newA(3), 2001);

/**
 * 简易版截流
 * @param {Function} fn 
 * @param {number} delay 
 */
function throttle(fn, delay=1000) {
  let flag = false;
  return (...args) => {
    if (flag) return;
    flag = true;
    setTimeout(() => {
      fn.apply(this, args);
      flag = false;
    }, delay)
  }
}

function a(i) {
  console.log('------1------', i)
}

const newA = throttle(a);
newA(1);
newA(11);
newA(111);
setTimeout(() => newA(2), 1001)
setTimeout(() => newA(3), 1300)
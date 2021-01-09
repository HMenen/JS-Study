/** https://my.oschina.net/u/4310671/blog/4658174
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

/**
 * 立即执行版本
 */
debounce11(func, sleep=1000, immediate) {
  let timer = null;
  let isNow = true;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate && isNow) {
      isNow = false;
      func.apply(this, args);
      timer = setTimeout(() => isNow = true, sleep);
    } else {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, sleep)
    }
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
throttle1 = (fn, sleep=1000) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, sleep)
  }
}

function throttle2(fn, delay=1000) {
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
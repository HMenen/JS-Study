/**
 * 防抖
 * @param {Function} fn 
 * @param {number} sleep 
 */
function debounce(fn, isImmudiate = false, sleep = 500) {
  let timer = null;
  let __this = this;
  let flag = isImmudiate;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    if (isImmudiate && flag) {
      fn.apply(__this, [...arguments]);
      flag = false;
      timer = setTimeout(() => flag = true, sleep)
    } else {
      timer = setTimeout(() => {
        fn.apply(__this, [...arguments])
      }, sleep)
    }
  }
}

// var a = debounce((time) => {
//   setTimeout(() => {
//     console.log('------', time)
//   }, 300);
// }, true)

// a(1);
// a(2);
// a(3);
// a(4);

// setTimeout(() => a(5), 510)
// setTimeout(() => a(6), 100)
// setTimeout(() => a(7), 510)
// setTimeout(() => a(8), 1310)


function throttle(fn, sleep = 500) {
  let timer = null;
  let __this = this;
  return function() {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(__this, [...arguments]);
      timer = null;
    }, sleep)
  }
}

var a = throttle((time) => {
  setTimeout(() => {
    console.log('------', time)
  }, 300);
})

a(1);
a(2);
a(3);
a(4);

setTimeout(() => a(5), 510)
setTimeout(() => a(6), 100)
setTimeout(() => a(7), 510)
setTimeout(() => a(8), 1310)
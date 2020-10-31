function debounce(func, await = 1000) {
  let timer;
  return function(...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(context, args)
    }, await);
  }
}

const task = () => { console.log('run task') }
const a = () => {
  // setTimeout(() => task(), 300)
  task()
}

// const aa = () => {
//   for (var i = 0; i < 5; i++) {
//     console.log(i)
//     debounce(task, 1000)
//   }
// }
debounce(task, 1000)
debounce(task, 1000)

// const debounceTask = debounce(task, 1000)


function debounce(fn, wait) {
  let timer;
  return function(...arg) {
    const context = this;
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, arg)
    }, wait);
  }
}


function debounce(fn, delay) {
  var timer;
  return function () { // 闭包
    var ctx = this; // this上下文
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(ctx, args); // this上下文调用
    }, delay);
  }
}

//防抖
function debounce(fn, wait) {
  let timeout = null;
  return function() {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
}
//函数节流
function throttle(fn, wait) {
  let  pre = new Date();
  return function() {
    let context = this;
    let args = arguments;
    let now = new  Date();
    if (now - pre >= wait) {
      fn.apply(context, args);
      pre = now;
    }
  }
}

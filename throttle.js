/**
 * 防抖
 * 将多次转为最后一次执行
 * @param {Function} func 
 * @param {Number} wait 
 */
function debounce(func, wait) {
  let timer;
  return function() {
    clearTimeout(timer);
    let args = arguments;
    let context = this;
    timer = setTimeout(() => {
      func.call(context, args);
      timer = null;
    }, wait);
  }
}

/**
 * 时间版节流
 * 每个一段时间执行
 * @param {Function} func 
 * @param {Number} wait 
 */
function throttle_time(func, wait) {
  let preTime = Date.now();;
  return function() {
    let nowTime = Date.now();
    if ((nowTime - preTime) > wait) {
      let args = arguments;
      let context = this;
      func.call(context, args);
      preTime = nowTime;
    }
  }
}

/**
 * 定时器版节流
 * @param {Function} func 
 * @param {Number} wait 
 */
// function throttle_timer1(func, wait) {
//   let timer;
//   return function() {
//     let context = this;
//     let args = arguments;
//     if (!timer) {
//       timer = setTimeout(() => {
//         timer = null;
//         func.call(context, args);
//       }, wait);
//     }
//   }
// }

/**
 * 
 * @param {Function} fn 
 * @param {Number} wait 
 */
function throttle_timer(fn, wait) {
  console.log('-------%s', wait)
  let startTime = 0;
  let nowTime;
  let timeOut;
  let threshhold = wait || 160;
  return function() {
    clearTimeout(timeOut);
    nowTime = Date.now();
    let context = this;
    let args = arguments;
    if (nowTime - startTime > threshhold) {
      console.log('----222----')
      fn.call(context, args);
      startTime = nowTime;
    } else {
      setTimeout(() => {
        console.log('----333----')
        fn.call(context, args);
      }, threshhold)
    }     
  }
}

const fn = throttle_timer(() => {console.log(1)}, 1000);

while(true) fn();

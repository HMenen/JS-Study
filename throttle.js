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
function throttle_timer(func, wait) {
  let timer;
  return function() {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        timeout = null;
        func.call(context, args);
      }, wait);
    }
  }
}
function throttle(func, await = 1000) {
  let time = 0;
  return (...args) => {
    let nowTime = new Date().getTime();
    if (nowTime - time > await) {
      func.apply(this, args);
      time = nowTime;
    }
  }
}

function throttle(func, await = 1000) {
  let timer = null;
  return (...args) => {
    if (timer) return
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = null;
    }, await);
  }
}

var task = (a) => { console.log('1111run task----', a) }
var throttleTask = throttle(() => task(121212121), 1000)
window.addEventListener('scroll', throttleTask)


//节流中用时间戳或定时器都是可以的。更精确地，可以用时间戳+定时器，当第一次触发事件时马上执行事件处理函数，最后一次触发事件后也还会执行一次事件处理函数。
//节流throttle代码（时间戳+定时器）：

// 节流throttle代码（时间戳+定时器）：
var throttle = function(func, delay) {     
    var timer = null;     
    var startTime = Date.now();     
    return function() {             
        var curTime = Date.now();             
        var remaining = delay - (curTime - startTime);             
        var context = this;             
        var args = arguments;             
        clearTimeout(timer);              
        if (remaining <= 0) {                    
            func.apply(context, args);                    
            startTime = Date.now();              
        } else {                    
            timer = setTimeout(func, remaining);              
        }      
    }
}
function handle() {      
    console.log(Math.random());
} 
window.addEventListener('scroll', throttle(handle, 1000));
//setTimout 实现 setInterval
function myInterval(fn, time) {
  let context = this;
  setTimeout(() => {
    fn.call(context);
    myInterval(fn, time);
  }, time)
}


myInterval(() => {console.log('====')}, 1000)
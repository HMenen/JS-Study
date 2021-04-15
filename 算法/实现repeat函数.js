//每隔2s输出一次"helloworld"，共输出4次
function repeat(print, count, time, str) {
  var fn = function(str) {
    setTimeout(() => {
      print(str);
      if (--count > 0) {
        fn(str);
      }
    }, time)
  }
  return fn;
}

const repeatFunc11 = repeat11(console.log, 4, 2000);
repeatFunc11("helloworld11");
function repeat11(fn, n, time) {
  return function (args) {
    for (let i = 1; i <= n; i++) {
      setTimeout(fn, i * time, args)
    }
  }
}

const repeatFunc = repeat(console.log, 4, 2000);
repeatFunc("helloworld");

function repeat1(print, count, time, str) {
  setTimeout(() => {
    print(str);
    if (--count > 0) {
      repeat1(print, count, time, str);
    }
  }, time)
}
repeat1(console.log, 4, 2000, "helloworld2")

z
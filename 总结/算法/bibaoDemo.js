function demo1 (fn) {
  let times = 1;
  return () => {
    if (times++ <= 3) {
      fn()
    }
  }
}

const a = () => console.log('=====');

const fnA = demo1(a);
fnA();
fnA();
fnA();
fnA();

// function sayHi() {
//   console.log('hi')
// }

// function threeTimes(fn) {
//   let times = 0
//   return () => {
//       if (times++ < 3) {
//           fn()
//       }
//   }
// }

// const newFn = threeTimes(sayHi)
// newFn()
// newFn()
// newFn()
// newFn()
// newFn() // 后面两次执行都无任何反应
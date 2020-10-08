function debounce(func, await = 1000) {
  let timer;
  console.log('---0--timer')
  return function(...args) {
    console.log('-----timer')
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args)
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
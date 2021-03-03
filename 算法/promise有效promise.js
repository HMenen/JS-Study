//lastPromise实现
//业务需求中，经常有 只需要最后一次请求的结果（比如搜索）编写一个高阶函数，传递旧请求方法（执行后返回 promise），返回一个新方法。
//连续触发时，若上一次 promise 执行未结束则直接废弃，只有最后一次 promise 会触发then/reject。
let count = 1
function promiseFunction(sleep=1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(count++);
    }, sleep)
  })
}
/**
 * 只有最后一次promise会then与reject
 * @param {function} promiseFunction
 * promiseFunction 示例： () => fetch('data')
 */
function lastPromise(promise) {
  let processCount = 0;
  return () => {
    let count = ++processCount;
    return new Promise((resolve, reject) => {
      promise().then(res => {
        count < processCount ? reject('isCancle'): resolve(res);
      })
    }).catch(error => console.log('error', error))
  }
}


let lastFn = lastPromise((promiseFunction))
lastFn().then(console.log) // 无输出
lastFn().then(console.log) // 无输出
lastFn().then(console.log) // 3
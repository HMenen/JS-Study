/**
 * 请实现以下的函数，可以批量请求数据，所有的URL地址在urls参数中，
 * 同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，
 * 需要执行 callback 回调函数。发请求的函数可以直接使用 fetch 即可
 * function sendRequest(urls: sring[],max:number,callback:()=>void){
 *   TODO
 * }
**/
function request(url, sleep) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('-------url:', url, sleep);
      resolve(url);
    }, sleep)
  });
}
const sleeps = [1000, 200, 3000, 100, 1000];  //b a d e c
function sendRequest(urls, max, callback){
  let processTasks = [];
  let list = [...urls];
  let count = 0

  function handler() {
    while(processTasks.length < max && list.length > 0) {
      const url = list.shift();
      const task = request(url, sleeps[count++]);
      task.then(() => {
        processTasks = processTasks.filter(item => item !== task);
        handler();
      });
      processTasks.push(task);
    }
    if (processTasks.length === 0 && list.length === 0) {
      callback();
    }
  }

  handler();
}

let urls = ['a', 'b', 'c', 'd', 'e'];

sendRequest(urls, 2, () => console.log('------end--------'));
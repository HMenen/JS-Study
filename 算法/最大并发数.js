/**
 * 请实现以下的函数，可以批量请求数据，所有的URL地址在urls参数中，
 * 同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，
 * 需要执行 callback 回调函数。发请求的函数可以直接使用 fetch 即可
 * function sendRequest(urls: sring[],max:number,callback:()=>void){
 *   TODO
 * }
**/

// 构造的假的请求
function sleep(url, time) {
  return new Promise(resolve => {
    console.log('外部逻辑 ');
    setTimeout(_ => {
      resolve(`任务 ${url} 完成`);
    }, time)
  })
}

const timers = [1000, 100, 200, 1000, 2000, 100, 100]; //测试数据
function sendRequest(urls, max, callback){
  let urlList = [...urls];
  let processTasks = [];
  let count = 0; //测试数据

  function handle() {
    while(urlList.length > 0 && processTasks.length < max) {
      let promise = sleep(urlList.shift(), timers[count++]);
      promise.then(res => {
        console.log('----res----', res, processTasks.length);
        processTasks = processTasks.filter(task => task !== promise);
        handle();
      });
      processTasks.push(promise);
    }
    if (urlList.length === 0 && processTasks.length === 0) {
      callback();
    }
  }

  handle();
}


sendRequest(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3, () => console.log('-----end-----'));

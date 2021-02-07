/**
 * 保证同时运行到任务最多有两个
 */
class Scheduler{
  constructor() {
    this.tasks = [];
    this.processTasks = [];
  }
  
  add(promiseCreator) {
    return new Promise(resolve => {
      this.tasks.push({
        promiseCreator,
        resolve
      });
      this.handle();
    })
  }

  handle() {
    while(this.processTasks.length < 2 && this.tasks.length > 0) {
      const taskInfo = this.tasks.shift();
      this.processTasks.push(taskInfo.promiseCreator);
      taskInfo.promiseCreator().then(res => {
        taskInfo.resolve(res);
        this.removeTask(taskInfo.promiseCreator);
        this.handle();
      })
    }
  }

  removeTask(task) {
    this.processTasks = this.processTasks.filter(item => item !== task);
  }
}

const timeout = (time) => new Promise((resolve, reject) => {
  setTimeout(() => resolve(time), time)
});

const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

// addTask(1000, '1');
// addTask(500, '2');
// addTask(300, '3');
// addTask(400, '4');


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
    setTimeout(() => {
      resolve(url);
    }, time)
  })
}

var requestFn = (url, dur=1) => {
  return new Promise(resolve => {
    console.log('外部逻辑 ');
    setTimeout(_ => {
      resolve(`任务 ${url} 完成`);
    }, 1000*dur++)
  })
  // .then(res => {
  //   console.log('外部逻辑 ', res);
  // })
}
const p1 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved('sucess111');
  }, 100)
})

const p2 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved('sucess222');
  }, 1000)
})

const p3 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved('sucess333');
  }, 1000)
})

function sendRequest(urls, max, callback) {
  const MAX = max;
  const urlList = [...urls];
  let processTask = [];

  function handle() {
    if (urlList.length === 0 && processTask.length === 0) {
      callback();
    }
    while(urlList.length > 0 && processTask.length < MAX) {
      const request = requestFn(urlList.shift());
      const task = request;
      task.then(res => {
        console.log('----res----', res, processTask.length)
        processTask = processTask.filter(item => task !== item);
        handle();
      });
      processTask.push(task);
    }
  }

  handle();
}

sendRequest(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3, () => console.log('-----end-----'));

// const task = new Promise(resolve => resolve(111));
// task.then(res => console.log(res))

// const task = new Promise(resolve => {
//   resolve('aaa')
// }).then(res => {
//   console.log('-----aasasas--', res)
// });
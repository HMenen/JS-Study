function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}
/**
 * retry功能
 * @param {*} promise 
 * @param {*} sleep 
 * @param {*} retryTime 
 * @returns 
 */
function retry(promise, sleep, retryTime) {
  let count = retryTime;
  return new Promise((resolve, reject) => {
    const fn = function() {
      promise().then(() => {
        resolve();
        console.log('成功了');
      }).catch(err => {
        if(count >=0) {
          console.log(`还剩${ count }次`, err);
          count--;
          setTimeout(fn, sleep)
        } else {
          reject(count)
        }
      })
    }
    fn();
  })
}

// // 测试
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     const rad = Math.random()
//     if (rad > 0.5) {
//       resolve(rad)
//     } else {
//       reject(rad)
//     }
//   })
// }

// retry(fetchData, 2000, 5) // 如果出错每隔3秒请求一次，一共请求五次


/**
 * 请实现以下的函数，可以批量请求数据，所有的URL地址在urls参数中，
 * 同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，
 * 需要执行 callback 回调函数。发请求的函数可以直接使用 fetch 即可
 * function sendRequest(urls: sring[],max:number,callback:()=>void){
 *   TODO
 * }
**/
function request(url, sleep = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('-------url:', url, sleep);
      resolve(url);
    }, sleep)
  });
}

function maxPromise(urls, max, callback) {
  let urlSource = [...urls];
  let processTask = [];

  function handle() {
    while(urlSource.length && processTask.length < max) {
      let url = urlSource.shift();
      const task = request(url, 1000);
      task.then(() => {
        processTask = processTask.filter(item => item !== task);
        handle()
      })
      processTask.push(task);
    }
    if (urlSource.length === 0 && processTask.length === 0) {
      callback();
    }
  }
  handle();
}
// let urls = ['a', 'b', 'c', 'd', 'e'];
// maxPromise(urls, 2, () => console.log('------end--------'));


/**
 * 选择速度最快的npm源
 * 后端返回地址如下： 
 * ['http:demo1', 'http:demo2]
 * @param {Array} arr 
 */
function request(url, sleep = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, sleep)
  });
}
function npmRequest(url) {
  new Promise((resolve, reject) => {
    request(url).then(() => resolve(url))
  })
}
const times = [500, 1000];
function getMaxNpm(list) {
  const promises = list.map((url, index) => request(url, times[index]))
  Promise.race(promises).then(res => console.log(res))
}
// getMaxNpm(['http:demo1', 'http:demo2'])


/**
 * 红绿灯
 */
function changeColor(color, duration) {
  return new Promise((resolve, reject) => {
    console.log('-----', color);
    setTimeout(resolve, duration);
  })
}

async function light() {
  while(true) {
    await changeColor('red', 1000);
    await changeColor('blue', 2000);
    await changeColor('green', 1000);
  }
}
// light()

function handleSeqPromise(list) {
  list.reduce((pre, cur) => {
    return pre.then(() => cur.then(res => console.log('---res---', res)))
  }, Promise.resolve())
}

async function handleSeqPromise1(list) {
  for(let i = 0; i < list.length; i++) {
    let ret = await list[i];
    console.log(ret)
  }
}

let a1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 2000)
});
let a2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 1200)
});
let a3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 3000)
});

handleSeqPromise1([a1, a2, a3]);


// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan("Hank")输出:
// Hi! This is Hank!
//  
// LazyMan("Hank").sleep(10).eat("dinner")输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
//  
// LazyMan("Hank").eat("dinner").eat("supper")输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
//  
// LazyMan("Hank").sleepFirst(5).eat("supper")输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
//  
// 以此类推。
// 链接：https://www.jianshu.com/p/f1b7cb456d37

class LazyMan{
  constructor(name) {
    this.tasks = [];
    this.init = () => {
      console.log(`Hi This is ${name}`);
      this.next();
      // return this;
    }
    this.tasks.push(this.init);
    this.next = () => {
      // console.log('----this.tasks---', this.tasks)
      let task = this.tasks.shift();
      task && task();
    }
    setTimeout(this.next, 0);   //异步任务，事件循环机制
  }

  eat(food) { 
    let task = () => {
      console.log(`Eat ${food}~`);
      this.next();
    }
    this.tasks.push(task);
    return this;
  }

  sleep(delay) {
    let task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${delay}`);
          this.next();
      }, delay);
    }
    this.tasks.push(task);
    return this;
  }

  sleepFirst(delay) {
    let task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${delay}`);
          this.next();
        }, delay);
    };
    this.tasks.unshift(task);
    return this;
  }
}

function test(name) {
  return new LazyMan(name);
}

// test("Hank")
// test("Hank").eat("dinner").eat("supper");
// test("Hank").sleep(1000).eat("dinner");
test("Hank").sleepFirst(1000).eat("supper").eat("dinner");

var list = [];
Promise.all(list.map(item => item.then(res => resolve(res)).catch(error => console.log(err)))).then()



Promise.all(
  [
    Promise.reject({ code: 500, msg: "服务异常" }),
    Promise.resolve({ code: 200, list: [] }),
    Promise.resolve({ code: 200, list: [] })
  ].map(p => p.catch(e => e))
)
  // .then(res => {
  //   console.log("res=>", res);
  // })

Promise.all([
  Promise.reject({ code: 500, msg: "服务异常" }),
  Promise.resolve({ code: 200, list: [] }),
  Promise.resolve({ code: 200, list: [] })
].map(p => p.catch(e => e)))

// Promise.reject(1).then(() => {console.log(1)}, () => {console.log(2)}).catch(() => {console.log(3)}).finally(() => {console.log(333)})
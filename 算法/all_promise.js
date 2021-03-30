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
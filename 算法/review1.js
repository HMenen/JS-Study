//promise all 出错也不停止
function handlePromiseAll(arr) {
  return Promise.all(arr.map(item => item.catch(e => e)))
}

// let p1 = Promise.resolve(1);
// let p2 = Promise.reject('--hahaha---');
// let p3 = Promise.resolve(2);

// handlePromiseAll([p1, p2, p3]).then(res => console.log(res));

//promise 串行执行
async function handlePromise1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let res = await arr[i];
    console.log('-----', res);
  }
}

function handlePromise2(arr) {
  arr.reduce((prev, cur) => prev.then(() => cur.then(res => console.log('-----', res))), Promise.resolve())
}


let a1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1500)
});

let a2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 100)
});

let a3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 3000)
});

// handlePromise2([a1, a2, a3])

//catch返回的是一个promise  catch()方法返回的还是一个 Promise 对象
// var p = new Promise((resolve, reject) => {
//   reject(1)
// }).catch(e => console.log('---e--', e))
//   .then(res => console.log(2))
//   .catch(e => console.log(3))
//   .then(res => console.log(111))

// ---e-- 1
// 2
// 111h


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
  let count = 0;
  return function() {
    count++;
    let curCount = count;
    return new Promise((resolve, reject) => {
      promise().then(res => {
        curCount < count? reject('isCancle') : resolve(res);
      })
    }).catch(error => console.log('error', error))
  }
}

// let lastFn = lastPromise(promiseFunction)
// lastFn().then(console.log) // 无输出
// lastFn().then(console.log) // 无输出
// lastFn().then(console.log) // 3


//已有请求函数getData，其功能为异步请求数据返回promise对象，如getData(params).then(…).catch(…)。
//实现一个myGetData,返回promise对象，要求加入失败重试功能，该函数内部依然使用getData实现，
//在getData失败一次后间隔一秒钟再重试一次，直到重试到第五次、如果全都失败了，myGetData所返回的promise为reject，
//只要有任意一次成功，则停止重试，直到resolve结果。

async function retry(fn, sleep, times) {
  return new Promise((resolve, reject) => {
    var handle = () => {
      fn()
        .then(res => {
          resolve(res);
          console.log('--调用成功--', res);
        })
        .catch(err => {
          console.log(`还剩${ times }次`, err);
          if (times === 0) {
            reject(err);
          } else {
            times--;
            setTimeout(handle, sleep)
          }
        })
    }

    handle();
  })
}

// 测试
const fetchData = () => {
  return new Promise((resolve, reject) => {
    const rad = Math.random()
    if (rad > 0.8) {
      resolve(rad)
    } else {
      reject(rad)
    }
  })
}
// retry(fetchData, 2000, 5) // 如果出错每隔3秒请求一次，一共请求五次

/**
 * 整数反转
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * @param {Number} x 
 */
function reverse(x) {
  let res = 0;
  let temp = x;
  if (x < 0) {
    temp = Math.abs(temp);
  }
  while(temp) {
    res = res * 10 + temp % 10;
    temp = Math.floor(temp / 10)
  }
  return x > 0? res: -res;
}
// console.log('-----reverse:', reverse(123456))

/**
 * 全排列
 * @param {Number} nums 
 */
function permuteUnique(nums) {
  const ret = [], used = [], track = [];
  tracks(nums.sort(), ret, used, track);
  // tracks(nums.sort((a, b) => (typeof a === 'number'? a: a.charCodeAt(0)) - (typeof b === 'number'? b : b.charCodeAt(0))), ret, used, track);
  // console.log(nums)
  return ret;
}

function tracks(arr, ret, used, track) {
  if (track.length === arr.length) {
    ret.push([...track]);
    return;
  }
  for(let i = 0; i < arr.length; i++) {
    if (used[i] || (i > 0 && arr[i - 1] === arr[i] && used[i - 1] === false)) {
      continue;
    }
    track.push(arr[i]);
    used[i] = true;
    tracks(arr, ret, used, track);
    track.pop();
    used[i] = false;
  }
}

// console.log(permuteUnique(['A', 'B', 'C', 'A']))
// console.log(permuteUnique([1, -1, -2]))

// 48题目：字符串
// 描述：计算字符串中，出现不重复的连续子串的最大长度
// 输入：'adfafwefffdasdcx'

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let map = {};
    let maxLen = 0;
    let left = 0;
    for(let i = 0; i < s.length; i++) {
      let c = s[i];
      map[c] ? map[c]++ : map[c] = 1;
      while(map[c] > 1) {
        map[s[left]]--;
        left++;
      }
      maxLen = Math.max(maxLen, i - left + 1);
    }
    return maxLen
 }
//  console.log(lengthOfLongestSubstring('tmmzuxtwq111'))


//  * [70] 爬楼梯
function climbStairs (n) {
  const arr = new Array(n + 1).fill(0);
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 2;
  for(let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}

// console.log('------', climbStairs(3), climbStairs(5))

// 二叉树中序遍历
function inorderTraversal(root) {
  let node = root;
  let path = [];
  let result = [];
  while(node || path.length) {
    while(node) {
      path.push(node.left);
      node = node.left;
    }
    if (path.length) {
      let p = path.pop();
      result.push(node.val);
      p = p.right;
    }
  }
  return result;
}

// 二叉树前序遍历
function preOrderTraversal(root) {
  let node = root;
  let path = [];
  let result = [];
  while(node || path.length) {
    while(node) {
      result.push(node.val);
      path.push(node.left);
      node = node.left;
    }
    if (path.length) {
      let p = path.pop();
      node = p.right;
    }
  }
  return result;
}
/**
 * then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。
 * 因此可以采用链式写法，即then方法后面再调用另一个then方法。第一个回调函数完成以后，会将返回结果作为参数，春如第二个回调函数。
 */
// new Promise((resolved, rejected) => {
//   resolved(123)
// }).then(res => console.log('--111--------', res)).then(res => console.log('--222--------', res))

// --111-------- 123
// --222-------- undefined


// new Promise((resolved, rejected) => {
//   resolved(123)
// })
//   .then(11111).then().then(111112).then(res => console.log('--222--------', res))
//   .then(res => console.log('--333--------', res))
//   .then(() => ({1: 111})).then(res => console.log('--444--------', res))
  // .then(() => new Promise((resolve) => resolve(1111))).then(res => console.log('--444--------', res))

//--222-------- 123
//--333-------- undefined


// new Promise((resolved, rejected) => {
//   // rejected(123)
//   throw Error('dasdasd')
// }).then().then().then()
// .then(res => console.log('--222--------', res), err => console.log('--err--------', err))
// .catch(err => console.log('--catch--------', err))

//--err-------- Error: dasdasd

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve({ test: 1 })
//   }, 1000)
// }).then((data) => {
//   console.log('result1', data)
//   //dosomething
//   return test()
// }).then((data) => {
//   console.log('result2', data)
// })

// function test(id) {
//   return new Promise(((resolve, reject) => {
//       setTimeout(() => {
//       resolve({ test: 2 })
//       }, 2000)
//   })).then(res => {
//     console.log('--111111--------', res);
//     return 'hahhaha'
//   })
// }

// result1 { test: 1 }
// --111111-------- { test: 2 }
// result2 hahhaha


function myPromise(executor) {
  let state = 'pending';
  let value = null;
  const callbacks = [];

  executor(resolve, null)

  function handleCb() {
    while(callbacks.length) {
      let cb = callbacks.shift();
      handle(cb);
    }
  }

  function handle(callback) {
    if (state === 'pending') {
      callbacks.push(callback);
      return
    }
    const cb = state === 'fulfilled' ? callback.onFulfilled: callback.onRejected;
    const next = state === 'fulfilled' ? callback.resolve: callback.reject;
    if (!cb) {
      next(value)
      return
    }
    try {
      const ret = cb(value);
      next(ret);
    } catch (error) {
      callback.reject(error);
    }
  }

  function resolve(newValue) {
    const fn = () => {
      if (state !== 'pending') return;
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function') && typeof newValue.then === 'function') {
        const { then } = newValue;
        if (typeof then === 'function') {
          then.call(newValue, resolve, reject);
          return
        }
      } else {
        value = newValue;
        state = 'fulfilled';
        handleCb();
      }
    }
    setTimeout(fn, 0);
  }

  function reject(error) {
    function fn() {
      if (state !== 'pending') return;
      if (error && (typeof error === 'object' || typeof error === 'function') && typeof error.then === 'function') {
        const { then } = error;
        then.call(error, resolve, reject);
        return;
      } else {
        value = error;
        state = 'rejected';
        handleCb();
      }
    }
    setTimeout(fn, 0)
  }

  this.then = (onFulfilled, onRejected) => {
    return new myPromise((resolve, reject) => {
      handle({
        onFulfilled,
        onRejected,
        resolve,
        reject
      })
    })
  }

  this.resolve = (value) => {
    return new myPromise((resolve, reject) => {
      if (value && (typeof value === 'object' || typeof value === 'function')) {
        const { then } = value;
        if (typeof then === 'function') {
          then.call(value, resolve, reject);
        }
      } else if (value) {
        resolve(value);
      } else {
        resolve();
      }
    })
  }

  this.reject = (value) => {
    return new myPromise((resolve, reject) => {
      reject(value);
    })
  }
}

myPromise.all = function(arr) {
  let len = arr.length;
  const result = [];
  return new myPromise((resolve, reject) => {
    function getRes(i, value) {
      try {
        if (value && typeof value === 'object' || value === 'function') {
          const { then } = value;
          if (typeof then === 'function') {
            then.call(value, value => {
              getRes(i, value);
            }, reject);
            return
          }
        }
        result[i] = value;
        if (--len === 0) {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    }
    for (let i = 0; i < arr.length; i++) {
      getRes(i, arr[i]);
    }
  })
}

myPromise.race = function(arr) {
  return new myPromise((resolve, rejected) => {
    for(let i = 0; i < arr.length; i++) {
      arr[i].then(resolve, rejected);
    }
  });
}

// new myPromise((resolve) => {
//   setTimeout(() => {
//     resolve(1);
//     // console.log('--111--------')
//   }, 1000)
// }).then(res => console.log('--myPromise--------', res))

const a1 = new myPromise((resolve, rejected) => {
  setTimeout(() => {
    resolve('end1')
  }, 3000)
})

const a2 = new myPromise((resolve, rejected) => {
  setTimeout(() => {
    // console.log('---myPromise2----');
    resolve('myPromise2 end')
  }, 1000)
});

// myPromise.all([]).then(res => console.log('==all===', res))

// myPromise.race([a1, a2]).then(res => console.log('==race===', res))

// async function async1() {
//   await async2()
//   console.log('async1 end')
//   }
//   async function async2() {
//   console.log('async2 end')
//   }
//   async1()
  
//   setTimeout(function() {
//   console.log('setTimeout')
//   }, 0)
  
//   new Promise(resolve => {
//   console.log('Promise')
//   resolve()
//   })
//   .then(function() {
//   console.log('promise1')
//   })
//   .then(function() {
//   console.log('promise2')
//   })
  
//   console.log('script end')


// new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve({ test: 1 })
//       resolve({ test: 2 })
//       reject({ test: 2 })
//   }, 1000)
// }).then((data) => {
//   console.log('result1', data)
// },(data1)=>{
//   console.log('result2',data1)
// }).then((data) => {
//   console.log('result3', data)
// })


new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve({ test: 1 })
  }, 1000)
}).then((data) => {
  console.log('result1', data)
  //dosomething
  return test()
}).then((data) => {
  console.log('result2', data)
})

function test(id) {
  return new myPromise(((resolve) => {
    setTimeout(() => {
      resolve({ test: 2 })
    }, 5000)
  }))
}

//async函数返回一个 Promise 对象。
async function f() {
  return 'hello world';
}

f().then(v => console.log(v))
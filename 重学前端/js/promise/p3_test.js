/**
 * 最新版
 * @param {Function} executor 
 */
function MyPromise(executor) {
  let state = 'pending';
  let value = null;
  let callbacks = [];

  function handle(cb) {
    if (state === 'pending') {
      callbacks.push(cb);
      return;
    }
    const next = state === 'fullfield'? cb.resolve: cb.reject;
    const callback = state === 'fullfield'? cb.onResolve: cb.onReject;
    if (!callback) {
      next(value);
      return;
    }
    try {
      const ret = callback(value);
      next(ret);
    } catch (error) {
      cb.reject(error);
    }
  }
  
  function handleCallBacks() {
    while(callbacks.length) {
      let cb = callbacks.shift();
      handle(cb);
    }
  }
  
  function resolve(newValue) {
    function fn() {
      if (state !== 'pending') return;
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function') 
        && typeof newValue.then === 'function') {
          const { then } = newValue;
          then.call(newValue, resolve, reject);
          return;
      } else {
        state = 'fullfield';
        value = newValue;
        handleCallBacks();
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
      }
      state = 'rejected';
      value = error;
      handleCallBacks();
    }
    setTimeout(fn, 0);
  }

  this.then = function(onResolve, onReject) {
    return new MyPromise((resolve, reject) => {
      handle({
        resolve,
        reject,
        onResolve,
        onReject
      })
    });
  }

  executor(resolve, reject);
}

MyPromise.all = function(arr) {
  return new MyPromise((resolve, reject) => {
    let len = arr.length;
    let result = [];
    function getRet(i, promise) {
      try {
        if (promise && typeof promise.then === 'function') {
          const { then } = promise;
          then.call(promise, res => {
            getRet(i, res);
          }, reject);
          return;
        }
        result[i] = promise;
        if (--len === 0) {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    }
    
    if (arr.length === 0) {
      resolve([]);
    } else {
      for(let i = 0; i < arr.length; i++) {
        getRet(i, arr[i]);
      }
    }
  })
}

MyPromise.race = function(arr) {
  return new MyPromise((resolve, reject) => {
    for(let i = 0; i < arr.length; i++) {
      arr[i].then(resolve, reject);
    }
  })
}

// var p1 = new MyPromise((resolve) => {
//   setTimeout(() => {
//     resolve([111, 'adasd'])
//   }, 1000)
// }).then(res => console.log('---000---', res))

// p1.then(res => console.log('---111---', res))


// const a1 = new MyPromise((resolve, rejected) => {
//   setTimeout(() => {
//     resolve('end1')
//   }, 3000)
// })
// const a2 = new MyPromise((resolve, rejected) => {
//   setTimeout(() => {
//     resolve('myPromise2 end')
//   }, 1000)
// });

// MyPromise.all([a1, a2]).then(res => {
//   console.log('--all---', res)
// })

// MyPromise.race([a1, a2]).then(res => {
//   console.log('--race---', res)
// })

// MyPromise.all([]).then(res => {
//   console.log('-----', res)
// })


const a1 = new Promise((resolve, rejected) => {
  setTimeout(() => {
    console.log('---1end1---')
    resolve('end1')
  }, 3000)
})
const a2 = new Promise((resolve, rejected) => {
  setTimeout(() => {
    console.log('---1end2---')
    rejected('myPromise2 end')
  }, 1000)
});

const a3 = new Promise((resolve, rejected) => {
  setTimeout(() => {
    console.log('---1end3---')
    resolve('myPromise3 end')
  }, 2000)
});

Promise.all([a1, a2, a3]).then(res => {
  console.log('--all---', res)
})
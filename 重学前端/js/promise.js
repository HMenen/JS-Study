function myPromise(fn) {
  let value = null;
  let status = 'pending';
  let callbacks = [];

  function handle(callback) {
    if (status === 'pending') {
      callbacks.push(callback);
      return;
    }
    const cb = status === 'fullfield' ? callback.handleResolve : callback.handleRejcte;
    const next = status === 'fullfield' ? callback.resolved : callback.rejected;
    if (!cb) {
      next(value);
      return;
    }
    try {
      let res = cb(value);
      next(res);
    } catch (error) {
      callback.rejected(error);
    }
  }

  function resolve(newValue) {
    const fn = () => {
      if (status !== 'pending') return;
      if (newValue) {
        if (typeof newValue === 'object' || typeof newValue === 'function') {
          const { then } = newValue;
          if (typeof then === 'function') {
            then.call(newValue, resolve, rejected);
            return;
          }
        }
      }
      status = 'fullfield';
      value = newValue;
      handleCallbacks();
    }
    setTimeout(fn, 0)
  }

  function rejecte(error) {
    const fn = () => {
      if (status !== 'pending') return;
      if (error) {
        if (typeof error === 'object' || typeof error === 'function') {
          const { then } = error;
          if (typeof then === 'function') {
            then.call(error, resolve, rejecte);
            return;
          }
        }
      }
      status = 'rejected';
      console.log('===rejected=2', status)
      value = error;
      handleCallbacks();
    }
    setTimeout(fn, 0)
  }

  function handleCallbacks() {
    while(callbacks.length) {
      const cb = callbacks.shift();
      handle(cb);
    }
  }

  this.then = function(handleResolve, handleRejcte) {
    return new myPromise((resolved, rejected) => {
      handle({
        handleResolve,
        handleRejcte,
        resolved,
        rejected
      })
    })
  }

  this.catch = function(onError) {
    this.then(null, onError);
  }

  this.finally = function(onHandle) {
    this.then(onHandle)
  }

  this.reject = function(error) {
    return new myPromise((resolved, rejected) => rejected(error))
  }

  this.resolve = function(value) {
    if (value) {
      if (value instanceof myPromise) {
        return value
      }else if (typeof value === 'object' || typeof value === 'function') {
        const { then } = value;
        return new myPromise((resolve, reject) => {
          then(resolve)
        })
      } else {
        return new myPromise((resolve, reject) => resolve(value))
      }
    } else {
      return new Promise(resolve => resolve())
    }
  }

  fn(resolve, rejecte);

  this.all = function(arr) {
    return new myPromise((resolved, rejected) => {
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        getRet(val, i);
      }
      function getRet(val, i) {
        if (val && (typeof val === 'function' || typeof val === 'object')) {
          const { then } = val;
          if (typeof then === 'function') {
            then.call(val, function(val) {
              getRet(val, i)
            }, rejected);
            return
          }
        }
        result[i] = val;
        if (result.length === arr.length) {
          resolved(result);
        }
      }
    })
  }
}

myPromise.all = function(arr) {
  return new myPromise((resolved, rejected) => {
    let remaining = arr.length;
    if(arr.length === 0) return resolve([]);
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];
      getRet(val, i);
    }
    function getRet(val, i) {
      try {
        if (val && (typeof val === 'function' || typeof val === 'object')) {
          const { then } = val;
          if (typeof then === 'function') {
            then.call(val, function(val) {
              getRet(val, i)
            }, rejected);
            return
          }
        }
        result[i] = val;
        if(--remaining === 0) {
          resolved(result);
        }
      } catch (error) {
        rejected(error);
      }
    }
  })
}

myPromise.race = function(arr) {
  return new myPromise((resolved, rejected) => {
    for (let i = 0; i < arr.length; i++) {
      try {
        arr[i].then(resolved, rejected);
      } catch (error) {
        rejected(error)
      }
    }
  });
}

myPromise.all = function (arr){
  var args = Array.prototype.slice.call(arr);
  return new Promise(function(resolve, reject) {
      if(args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
          try {
              if(val && (typeof val === 'object' || typeof val === 'function')) {
                  var then = val.then;
                  if(typeof then === 'function') {
                      then.call(val, function(val) {
                          res(i, val);
                      }, reject);
                      return;
                  }
              }
              args[i] = val;
              if(--remaining === 0) {
                resolve(args);
              }
          } catch(ex) {
              reject(ex);
          }
      }
      for(var i = 0; i < args.length; i++) {
          res(i, args[i]);
      }
  });
}

 
const a1 = new myPromise((resolve, rejected) => {
  setTimeout(() => {
    resolve('end1')
  }, 3000)
})

const a2 = new myPromise((resolve, rejected) => {
  setTimeout(() => {
    // console.log('---myPromise2----');
    rejected('myPromise2 end')
  }, 1000)
});

// new myPromise(() => {}).all([a1, a2]).then(res => console.log(res))
// myPromise.all([a1, a2]).then(res => console.log('all---', res));
myPromise.race([a1, a2]).then(res => console.log('==race===', res))
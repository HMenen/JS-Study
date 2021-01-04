function P2(exector) {
  let state = 'pending';
  let value = null;
  let callbacks = [];

  function handle(cb) {
    if (state === 'pending') {
      callbacks.push(cb);
      return;
    }
    const next = state === 'fullfield'? cb.resolve: cb.reject;
    const callback = state === 'fullfield'? cb.onFulfilled: cb.onRejected;
    if (!callback) {
      next();
      return;
    } 
    try {
      let ret = callback(value);
      next(ret);
    } catch (error) {
      cb.reject(error);
    }
  }

  function handleCallBacks() {
    while(callbacks.length) {
      const cb = callbacks.shift();
      handle(cb);
    }
  }

  function resolve(newValue) {
    var fn = function() {
      if(state !== 'pending') return;
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
    setTimeout(fn, 0)
  }

  function reject(error) {
    var fn = function() {
      if (state !== 'pending') return;
      if (error && (typeof error === 'object' || typeof error === 'function')
            && typeof error.then === 'function') {
        const { then } = error;
        then.call(error, resolve, reject)
      } else {
        state = 'resolved';
        value = error;
        handleCallBacks();
      }
    }
    setTimeout(fn, 0)
  }

  this.then = function(onFulfilled, onRejected) {
    return new P2((resolve, reject) => {
      handle({
        onFulfilled,
        onRejected,
        resolve,
        reject
      })
    })
  }

  exector(resolve, reject);
}

const a1 = new P2((resolve, rejected) => {
  setTimeout(() => {
    resolve('end1')
  }, 3000)
})

const a2 = new P2((resolve, rejected) => {
  setTimeout(() => {
    // console.log('---myPromise2----');
    resolve('myPromise2 end')
  }, 1000)
});
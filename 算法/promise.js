function Promise1(executor) {
  let value;
  let state = 'pending';
  let callbacks = [];
  
  function handleCallbacks() {
    while(callbacks.length) {
      let cb = callbacks.shift();
      handle(cb);
    }
  }

  function handle(task) {
    if (state === 'pending') {
      callbacks.push(task);
    } else {
      const callback = state === 'fullfield'? task.onResolve: task.onReject;
      const next = state === 'fullfield'? task.resolve: task.reject;
      if (callback) {
        let ret = callback(value);
        next(ret);
        return;
      } else {
        next(value);
      }
    }
  }

  function resolve(newValue) {
    const fn = function() {
      if (state !== 'pending') return;
      if (newValue && newValue.then && typeof newValue.then === 'function') {
        const { then } = newValue;
        then.call(newValue, resolve, reject);
        return;
      } else {
        state = 'fullfield';
        value = newValue;
        handleCallbacks();
      }
    }
    setTimeout(fn, 0);
  }

  function reject() {

  }

  this.then = function(onResolve, onReject) {
    return new Promise1((resolve, reject) => {
      handle({
        onResolve,
        onReject,
        resolve,
        reject
      })
    })
  }
  
  executor(resolve, reject);
}

Promise1.all = function(arr) {
  return new Promise((resolve, reject) => {
    let result = [];
    let len = arr.length;
    var getRes = function(value, index) {
      if (value && value.then) {
        const { then } = value;
        then.call(value, res => getRes(res, index), reject);
        return;
      } else {
        len--;
        result[index] = value;
        if (len === 0) {
          resolve(result);
        }
      }
    }
    for(let i = 0; i < arr.length; i++) {
      getRes(arr[i], i);
    }
  })
}
  
const a1 = new Promise1((resolve, rejected) => {
  setTimeout(() => {
    console.log('---1end1---')
    resolve('end1')
  }, 3000)
})

const a11 = new Promise1((resolve, rejected) => {
  setTimeout(() => {
    console.log('---11end11---')
    resolve('end11')
  }, 1000)
})


Promise1.all([a1, a11]).then(res => {
  console.log('--all---', res)
})
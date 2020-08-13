const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function myPromise(fn) {
  let that = this;
  that.status = PENDING;
  that.value = null;
  that.fulfilledCallbacks = [];
  that.rejectedCallbacks = [];

  function resolve(value) {
    if (that.status === PENDING) {
      that.status = FULFILLED;
      that.value = value;
      that.fulfilledCallbacks.forEach(cb => cb(that.value));
    }
  }

  function rejected(value) {
    if (that.status === PENDING) {
      that.status = REJECTED;
      that.value = value;
      that.rejectedCallbacks.forEach(cb => cb(that.value))
    }
  }

  this.then = function(fulfilledCallback, rejectedCallback) {
    fulfilledCallback = typeof fulfilledCallback === 'function'? fulfilledCallback: value => value;
    rejectedCallback = typeof rejectedCallback === 'function'? rejectedCallback: error => { throw error }
    
    if (this.status === FULFILLED) {
      return myPromise.resolve(this.value)
    }
    if (this.status === REJECTED) {
      return myPromise.rejected(this.value)
    }
    if (this.status === PENDING) {
      return new myPromise((resolve, rejected) => {
        this.fulfilledCallbacks.push(() => {
          const result = fulfilledCallback && fulfilledCallback(this.value) || null;
          if (result instanceof myPromise) {
            result.then(resolve)
          } else {
            resolve(result)
          }
        })
      })
    }
  }

  try {
    fn(resolve, rejected)
  } catch (error) {
    reject(error);
  }
}


myPromise.all = function(arr) {
  return new Promise((resolve, rejected) => {
    let values = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      let promise = arr[i];
      if (typeof promise.then === 'function') {
        promise.then(res => {
          // values.push(res);
          console.log(res)
          values[i] = res;
          if (values.length === len) {
            resolve(values);
          }
        })
      } else {
        // values.push(arr[i]);
        values[i] = arr[i];
        if (values.length === len) {
          resolve(values);
        }
      }
    }
  })
}

myPromise.race = function(arr) {
  return new Promise((resolve, rejected) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      let promise = arr[i];
      if (typeof promise.then === 'function') {
        promise.then(res => {
          resolve(res)
        })
      } else {
        resolve(arr[i])
      }
    }
  })
}

//
// let p1 = new myPromise((resolve, rejected) => {
//   resolve('promise1234567890-=');
// });

// console.log(p1.then(res => console.log(res)));

//制造异步场景
// new myPromise((resolved,rejected)=>{
//   setTimeout(()=>{
//       resolved(1)
//   },0)
// })
// .then(value=>{
//   console.log(value); // 1
// })

let a0 = (
  function() {
    return 'a0'
  }
)()

let a1 = new myPromise((resolved,rejected)=>{
  setTimeout(()=>{
      resolved(1)
  },3000)
});
// a1.then(res => console.log('---a----', res));
let a2 = new myPromise((resolved,rejected)=>{
  setTimeout(()=>{
      resolved(2)
  },2)
});
let a3 = new myPromise((resolved,rejected)=>{
  setTimeout(()=>{
      resolved(3)
  },3)
});
// Promise.all([a1, a2, a3]).then(res => {
//   console.log(res)
// })

// myPromise.all([a1, a2, a3]).then(res => {
//   console.log(res, 'myPromise')
// })

// myPromise.race([a1, a2, a3, a0]).then(res => {
//   console.log(res, 'myPromise')
// })


// Promise.all([a1, a2, a3, a0]).then(res => {
//   console.log(res)
// })

// Promise.race([a1, a2, a3, a0]).then(res => {
//   console.log(res)
// })


function Promise1(fn) {
  var state = 'pending';
  var value;
  var deferred;

  function resolve(newValue) {
    value = newValue;
    state = 'resolved';

    if(deferred) {
      handle(deferred);
    }
  }

  function handle(onResolved) {
    if(state === 'pending') {
      deferred = onResolved;
      return;
    }

    onResolved(value);
  }

  this.then = function(onResolved) {
    handle(onResolved);
  };

  fn(resolve);
}

let aa = new Promise1((resolved,rejected)=>{
  setTimeout(()=>{
      resolved(1)
  },3000)
});
// aa.then(res => console.log('---a----', res));


Promise1.all = function(arr) {
  return new Promise1((resolve, rejected) => {
    let values = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      let promise = arr[i];
      if (typeof promise.then === 'function') {
        promise.then(res => {
          values[i] = res;
          if (values.length === len) {
            resolve(values);
          }
        })
      } else {
        values[i] = arr[i];
        if (values.length === len) {
          resolve(values);
        }
      }
    }
  })
}

Promise1.all([a1, a2, a3]).then(res => {
  // console.log(res, 'Promise1--------')
  console.log('=====')
})


Promise1.all([a1, a2, a3, a0]).then(res => {
  console.log(res)
})



let a = new Promise((resove, rejected) => {
  resove(1)
}).then((r, j) => {
  console.log(r);
  return 111
}).then(r => console.log(r))

console.log(a)
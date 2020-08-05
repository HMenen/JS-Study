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
      that.fulfilledCallbacks.forEach(cb => cb(that.valuealue));
    }
  }

  function rejected(value) {
    if (that.status === PENDING) {
      that.status = REJECTED;
      that.value = value;
      that.rejectedCallbacks.forEach(cb => cb(that.valuealue))
    }
  }

  try {
    fn(resolve, rejected)
  } catch (error) {
    reject(error);
  }

  this.then = function(onResolve, onRejected) {
    if (that.status === PENDING) {
      that.fulfilledCallbacks.push(() => onResolve(that.value));
      that.rejectedCallbacks.push(() => onRejected(that.value))
    }
    if (that.status === FULFILLED) {
      onResolve(that.value)
    }
    if (that.status === REJECTED) {
      onRejected(that.value)
    }
  }

  this.all = function(arr) {

  }

}

//
let p1 = new myPromise((resolve, rejected) => {
  resolve('promise1234567890-=');
});

console.log(p1.then(res => console.log(res)));

//制造异步场景
new myPromise((resolved,rejected)=>{
  setTimeout(()=>{
      resolved(1)
  },0)
}).then(value=>{
  console.log(value); // 1
  
})


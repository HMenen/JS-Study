const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


function myPromise(fn) {
  let self = this;
  self.state = PENDING;
  self.value = undefined;
  self.onResolvedCallback = [];
  self.onRejectedCallback = [];

  function resolved (value) {
    if (self.state === PENDING) {
      self.state = FULFILLED;
      self.value = value;
      // console.log('-resolved-222-----', self.value, self.state, self.onResolvedCallback)
      self.onResolvedCallback.forEach(cb => cb(self.value))
    }
  }

  function rejected (value) {
    if (self.state === PENDING) {
      self.state = REJECTED;
      self.value = value;
      self.onRejectedCallback.forEach(cb => cb(self.value))
    }
  }

  fn(resolved, rejected);
}

myPromise.prototype.then = function(onResolved, onRejected) {
  var self = this;
  // var promise2;
  
  // 根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理
  onResolved = typeof onResolved === 'function' ? onResolved : function(value) { return value }
  onRejected = typeof onRejected === 'function' ? onRejected : function(reason) { return reason }

  if (self.state === FULFILLED) {
    return new myPromise((resolved, rejected) => {
      try {
        let x = onResolved(self.value);
        if (x instanceof myPromise) {
          x.then(resolved, rejected)
        }
        resolved(x);
      } catch (error) {
        rejected(error);
      }
    })
  }

  if (self.state === REJECTED) {
    return new myPromise((resolved, rejected) => {
      try {
        let x = onRejected(self.data)
        if (x instanceof myPromise) {
          x.then(resolved, rejected)
        }
      } catch (error) {
        rejected(error);
      }
    })
  }

  if (self.state === PENDING) {
    return new myPromise((resolved, rejected) => {
      self.onResolvedCallback.push((value) => {
        try {
          let x = onResolved(value)
          if (x instanceof myPromise) {
            x.then(resolved, rejected);
          }
        } catch (error) {
          rejected(error);
        }
      });
      self.onRejectedCallback.push((reson) => {
        try {
          let x = onRejected(reson);
          if (x instanceof myPromise) {
            x.then(resolved, rejected);
          }
        } catch (error) {
          rejected(error);
        }
      });

    })
  }
  // return promise2;
}

myPromise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected)
}

myPromise.all1 = arr => {
  let aResult = [];    //用于存放每次执行后返回结果
  return new myPromise(function (resolve, reject) {
    let i = 0;
    next();    // 开始逐次执行数组中的函数(重要)
    function next() {
      arr[i].then(function (res) {
        aResult.push(res);    // 存储每次得到的结果
        i++;
        if (i == arr.length) {    // 如果函数数组中的函数都执行完，便resolve
          resolve(aResult);
        } else {
          next();
        }
      })
    }
  })
};

myPromise.all = function(arr) {
  let values = [];
  return new myPromise((resolved, rejected) => {
    let i = 0;
    next();
    function next() {
      let promise = arr[i];
      if (typeof promise.then === 'function') {
        promise.then(res => {
          values[i] = res;
          i++;
          if (i === arr.length) {
            resolved(values);
          } else{
            next();
          }
        })
      } else {
        values[i] = promise;
        i++;
        if (i === arr.length) {
          resolved(i);
        } else {
          next();
        }
      }
    }
  })
}

myPromise.race = function(arr) {
  return new myPromise((resolved, rejected) => {
    for (let i = 0; i < arr.length; i++) {
      let promise = arr[i];
      if (typeof promise.then === 'function') {
        promise.then(res => {
          resolved(res);
          return;
        })
      } else {
        resolved(promise);
        return;
      }
    }
  })
}

var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

// export default firstName;
var sex="boy";

module.exports = { sex } 

// let a1 = new myPromise((resolved,rejected)=>{
// //   setTimeout(()=>{
// //       resolved(111);
// //   },3000)
// // });

// // a1.then(res => console.log('----', res));

// // new myPromise(resolve => resolve(8))
// //   .then()
// //   .then()
// //   .then(value => {
// //     console.log('====', value)
// //   })

// let a1 = new myPromise((resolved,rejected)=>{
//   setTimeout(()=>{
//       resolved(1)
//   },300)
// });
// // a1.then(res => console.log('---a----', res));
// let a2 = new myPromise((resolved,rejected)=>{
//   setTimeout(()=>{
//       resolved(2)
//   },20)
// });
// let a3 = new myPromise((resolved,rejected)=>{
//   setTimeout(()=>{
//       resolved(3)
//   },0)
// });
// let a4 = new myPromise((resolved,rejected)=>{
//   setTimeout(()=>{
//       resolved(4)
//   },30)
// });
// let a5 = new myPromise(resolve => resolve(8))
//   .then()
//   .then()
  
// myPromise.all([a1, a2, a3, a4, a5]).then(res => {
//   console.log(res);
// })

// myPromise.race([a1, a2, a3, a4, a5]).then(res => {
//   console.log(res);
// })








let Image = undefined;
if (typeof Image === 'undefined') {
  Image = function(width = 0, height = 0) {
    const image = document.createElement('img');
    image.width = width;
    image.height = height;
    return image;
  }
}
Image = Image;
console.log(Image)
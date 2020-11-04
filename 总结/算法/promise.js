/**
 * 简易版promise，没有catch异常
 */
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function myPromise(fn) {
  const self = this;
  self.value = undefined;
  self.state = PENDING;
  self.onReselveCallback = [];
  self.onRejectedCallback = [];

  function resolved(value) {
    if (self.state === PENDING) {
      self.state = FULFILLED;
      self.value = value;
      self.onReselveCallback.forEach(cb => cb(self.value));
    }
  }

  function rejected(value) {
    if (self.state === PENDING) {
      self.state = REJECTED;
      self.value = value;
      self.onRejectedCallback.forEach(cb => cb(self.value))
      // console.log('==rejected==', self.state, value)
    }
  }

  fn(resolved, rejected);
}

myPromise.prototype.then = function (onResolved, onRejected) {
  var self = this;
  onResolved = typeof onResolved === 'function' ? onResolved: function(value) {return value};
  onRejected = typeof onRejected === 'function' ? onRejected: function(value) {return value};

  if (self.state === FULFILLED) {
    return new myPromise((resolve, rejected) => {
      const ret = onResolved(self.value);
      if (ret instanceof myPromise) {
        return ret.then(resolve, rejected)
      }
    })
  }

  if (self.state === REJECTED) {
    return myPromise((resolved, rejected) => {
      const ret = onRejected(self.value);
      if (ret instanceof myPromise) {
        ret.then(resolved, rejected)
      }
    })
  }

  if (self.state === PENDING) {
    return myPromise((resolved, rejected) => {
      self.onReselveCallback.push((value) => {
        const ret = onResolved(value);
        if (ret instanceof myPromise) {
          ret.then(resolved, rejected)
        }
      })
      self.onRejectedCallback.push((value) => {
        const ret = onRejected(value);
        if (ret instanceof myPromise) {
          ret.then(resolved, rejected);
        }
      })
    })
  }
}


myPromise.prototype.then = function(onResolved, onRejected) {
  var self = this;
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
    console.log('====')
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
      self.onReselveCallback.push((value) => {
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
}



myPromise.all = function(arr) {
  return new myPromise((resolved, rejected) => {
    let values = [];
    let index = 0;
    next();
    function next() {
      let promise = arr[index];
      if (typeof promise.then === 'function') {
        promise.then(res => {
          values[index] = res;
          index++;
          if (values.length === arr.length) {
            resolved(values);
          } else {
            next();
          }
        });
      } else {
        values[index] = promise;
        index++;
        if (values.length === arr.length) {
          resolved(values);
        } else {
          next()
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
        promise.then(res => { resolved(res); return res}, err=> {console.log('--1--', err); rejected(err); return err})
      } else {
        try {
          resolved(promise);
        } catch (error) {
          rejected(error)
        }
      }
    }
  })
}

const p1 = new myPromise((resolved, rejected) => {
  setTimeout(() => {
    resolved('sucess111');
  }, 100)
})

const p2 = new myPromise((resolved, rejected) => {
  setTimeout(() => {
    resolved('sucess222');
  }, 1000)
})

const p3 = new myPromise((resolved, rejected) => {
  setTimeout(() => {
    resolved('sucess333');
  }, 1000)
})

const p4 = function() {
  // console.log('hahhaha')
  // throw Error('sdsa')
};

const p5 = 111;

myPromise.all([p1, p2, p3, p4, p5]).then(res => {
  console.log(res)
})

myPromise.race([p1, p2, p3]).then(res => console.log('--ret-----', res))
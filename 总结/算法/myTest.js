Function.prototype.myCall = function(context, ...args){
  context.fn = this;
  let ret =  context.fn(...args);
  delete context.fn;
  return ret;
}

Function.prototype.myApply = function(context, args) {
  context.fn = this;
  let ret;
  if (arg) {
    ret = context.fn(args);
  } else {
    ret = context.fn();
  }
  delete context.fn;
  return ret;
}

Function.prototype.myBind = function(context, ...args) {
  let func = this;
  let arg1 = args;
  return (...rest) => func.apply(context, [...arg1, ...rest]);
}


let obj = {
  name: 'jack'
}
function test(arg1, arg2, arg3) {
  console.log(this.name)   // jack
  console.log(arg1, arg2, arg3);  // 1 2 3
}
// test.myCall(obj, 1, 2, 3);
// test.myApply(obj, 1, 2, 3);

const obj1 = { name: '12121' };
function test(a, b) {
  // console.log('=====', this.name, a, b)
}

// test.myBind(obj, 'hahah')('去啊转');

function myInstanceOf(left, right) {
  let instance = left.__proto__;
  while(instance) {
    if(right.prototype === instance) return true;
    instance = instance.__proto__;
  }
  return false;
}

// console.log({} instanceof Array);

function myNew(fun, ...args) {
  let obj = {};
  obj.__proto__ = fun.prototype;
  fun.apply(obj, args)
  return obj;
}
function Animal(name) {
  this.name = name;
}
let animal = myNew(Animal, 'dog');
// console.log(animal.name)  // dog

function mySetInterval(fn, time) {
  let self = this;
  setTimeout(() => {
    fn.apply(self);
    mySetInterval(fn, time)
  }, time)
}

function deepClone(obj) {
  let ret = obj;
  if (typeof obj === 'object') {
    Array.isArray(obj) ? ret = []: ret = {};
    Object.keys(obj).forEach(key => {
      if (obj.hasOwnProperty(key)) {
        ret[key] = deepClone(obj[key]);
      }
    })
  }
  return ret;
}

function myFlat(arr) {
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ret = [...ret, ...myFlat(arr[i])]
    } else {
      ret.push(arr[i])
    }
  }
  return ret;
}

let aa1 = [1, [1, 2, [3, 4]], 2]
console.log(myFlat(aa1))

function debounce(fn, wait) {
  let timer;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    const self = this;
    timer = setTimeout(() => {
      fn.apply(self, args)
    }, wait)
  }
}

function throttle(func, await = 1000) {
  let timer = null;
  return (...args) => {
    if (timer) return;
    const self = this;
    timer = setTimeout(() => {
      func.apply(self, args);
      timer = null;
    }, wait);
  }
}

function throttle(func, await = 1000) {
  let timer = null;
  return (...args) => {
    if (timer) return
    const context = this;
    timer = setTimeout(() => {
      func.apply(context, args);
      timer = null;
    }, await);
  }
}



function throttle(fn, wait) {
  let time = 0;
  return function(...args) {
    let self = this;
    let currentTime = new Date().getTime();
    if (currentTime - time >= wait) {
      fn.apply(self, args);
      time = currentTime;
    }
  }
}

function binarySearch(arr, low, high, targetValue) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === targetValue) {
    return mid;
  } else if (arr[mid] > targetValue) {
    return binarySearch(arr, low, mid - 1, targetValue)
  } else if (arr[mid] < targetValue) {
    return binarySearch(arr, mid + 1, high, targetValue);
  }
}

let aaa = [1, 4, 6, 10, 22, 23];
// console.log(binarySearch2(aaa, 0, aaa.length - 1, 11))

function binarySearch2(arr, low, high, targetValue) {
  let left = low;
  let right = high;
  while(left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === targetValue) {
      return mid;
    } else if(arr[mid] > targetValue) {
      right = mid - 1;
    } else if (arr[mid] < targetValue) {
      left = mid + 1;
    }
  }
  return -1;
}


//实现 EventEmitter 订阅监听模式
function EventEmitter(){
  const self = this;
  self.events = {};

  function on(eventName, callback) {
    if(!self.events[eventName]) {
      self.events[eventName] = [callback];
    } else {
      self.events[eventName].push(callback);
    }
  }

  function emit(eventName, ...args) {
    self.events[eventName].forEach(fn => fn.apply(self, args))
  }
}

/**
 * 利用快拍实现寻找第k大的数
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 */
function findK(arr, k, start, end) {
  let index = getIndex(arr, start, end);
  if (index === end - k + 1) return arr[index];
  else if (index > end - k + 1) {
    return findK(arr, index - (end - k + 1), start, index - 1)
  } else {
    return findK(arr, k, index + 1, end)
  }
}

function getIndex(arr, start, end) {
  if (start > end) return;
  let left = start;
  let right = end;
  const temp = arr[start];
  while(left < right) {
    while(arr[right] > temp && left < right) {
      right--;
    }
    arr[left] =arr[right];
    while(arr[left] <= temp && left < right) {
      left++;
    }
    arr[right] =arr[left];
  }
  arr[left] = temp;
  return left;
}

let aaaa = [6, 1, 23, 3, 7, 8, 1, 12];
// console.log('findK----', findK(aaaa, 7, 0, aaaa.length - 1))

/**
 * leetcode-最大子序和(四种)
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 示例:输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * @param {Array} arr 
 */
function getMaxSum(arr) {
  let sum = arr[0];
  let last = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (last > 0) {
      last += arr[i];
    } else {
      last = arr[i];
    }
    if (sum < last) {
      sum = last;
    }
  }
  return sum;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, 13, -10, -5, 4];
console.log('getMaxSum: ', getMaxSum(arr));


function a(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  while(low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) return key;
    else if (arr[mid] < key) {
      low = mid + 1;
    } 
    else if (arr[mid] > key) {
      high = low - 1;
    }
  }
  return -1;
}
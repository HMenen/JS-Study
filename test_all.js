/**
 * 深拷贝
 * @param {Object} obj 
 */
function deepClone(obj) {
  if (obj && typeof obj === 'object') {
    let newValue = {};
    if (Array.isArray(obj)) {
      newValue = [];
    }
    Object.keys(obj).forEach(key => {
      newValue[key] = deepClone(obj[key]);
    })
    return newValue;
  } else {
    return obj;
  }
}

let a = {a: 1, b: 2, c: {d: 12, e: [1, 2, 3]}};
let a1 = deepClone(a);
a1.c.e = 311;
// console.log('--a1--', a1);
// console.log('--a--', a);


/**
 * 反转数组
 * input: I am a student
 * output: student a am I
 * 输入是数组 输出也是数组
 * 不允许用 split splice reverse
 * @param {Array} arr 
 */
function reverseArry(arr) {
  let ret = [];
  const len = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    ret[len - i] = arr[i];
  }
  return ret;
}
let arr = reverseArry(['I', 'am', 'a', 'student'])
console.log(arr)

/**
 * vue双向绑定
 * @param {Object} obj 
 */
function observable (obj) {
  if (!obj || typeof obj !== 'object') {
    return;
  }
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key]);
  })
  return obj;
}

function defineReactive(obj, key, value) {
  Object.defineProperty(obj, key, {
    get() {
      console.log('----读取----');
      return value;
    },
    set(newValue) {
      console.log('----修改----');
      return newValue;
    }
  })
}

let car = observable({
  'brand':'BMW',
  'price':3000
})

// car.price;
// car.price = 3000000;

Object.prototype.myApply = function(context) {
  context.fn = this;
  console.log('----111---', context)
  context = context || window;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn;
  return result;
}

var b1 = {name: '111'}
function getName() {
  console.log(this.name)
  console.log(arguments)
}
// console.log(getName.myApply(b1, [12]))

/**
 * qie ke na
 * 递归版
 */
function fac(n) {
  if (n <= 0) return;
  if (n === 1|| n===2) {
    return 1;
  } else {
    return fac(n - 1) + fac(n - 2);
  }
}
// console.log(fac(6))

function fac1(n) {
  if (n <= 0) return;
  if (n === 1 || n === 2) {
    return 1;
  }
  let sum = 0;
  let left = 1;
  let right = 1;
  while(n > 2) {
    sum = left + right;
    left = right;
    right = sum;
    n--;
  }
  return sum;
}
// console.log(fac1(6))

/**
 * 阶乘
 * @param {Number} n 
 */
function fac2(n) {
  if (n === 1) return 1;
  return n * fac2(n - 1);
}
// console.log(fac2(5));

/**
 * 继承
 * @param {Class} subClass 
 * @param {Class} superClass 
 */
function inherits(subClass, superClass) {
  const brige = function() {};
  brige.prototype = superClass.prototype;
  const newPrototype = new brige();
  const oldPrototype = subClass.prototype;
  newPrototype.constructor = subClass;
  subClass.prototype = Object.assign(oldPrototype, newPrototype);
}

console.log({}.toString())
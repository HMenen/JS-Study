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
console.log(getName.myApply(b1, [12]))
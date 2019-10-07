/**
 * apply的实现，this为函数
 * 使用方法 函数.myApply(a1, [12])
 * 输出：函数执行
 */
Object.prototype.myApply = function (context) {
  context = context || window;
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result
}

var b1 = {name: '111'}
function getName() {
  console.log(this.name)
  console.log(arguments)
}
// getName.myApply(b1, [12]);


/**
 * call的实现
 */
Object.prototype.myCall = function (context) {
  context = context || window;
  context.fn = this;
  let result;
  // let args = Array.from(arguments).slice(1); //效果和下面一行一样meimei
  let args = [...arguments].slice(1);
  if (args) {
    result = context.fn(...args);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}

var b2 = {name: '测试call', age: 18}
function getName() {
  console.log(this.name)
  console.log(arguments)
}
// getName.myCall(b2, 12, 13);


/**
 * bind的实现
 * 返回的是一个函数
 */
Object.prototype.myBind = function () {
  let fn = this;
  let _this = arguments[0];
  let args = [...arguments].slice(1);
  return (...rest) => {
    fn.apply(_this, args.concat(rest))
  }
}

var myFn = getName.myBind(b2, 'hahah');
// console.log(myFn)
myFn(12, '111')

/**
 * 深度复制
 * @param {Object} obj 
 */
function deepClone(obj) {
  let ret = obj;
  if (obj && typeof obj === 'object') {
    Array.isArray(obj) ? ret = []: ret = {};
    Object.keys(obj).forEach(key => {
      ret[key] = deepClone(obj[key]);
    })
  }
  return ret
}

var d1 = {name: 'tina', age: 18, a: {b: {c: 123}, d: 456}}
var d2 = deepClone(d1);
d2.name = "tomnnnnn";
console.log(d1);
console.log(d2);
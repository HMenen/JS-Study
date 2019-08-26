/**
 * js 类型判断
 * Object.prototype.toString的使用
 */

 /**
  * 构造类型对象，
  * {
  * '[Object Boolean]': 'boolean',
    '[Object Number]': 'number',
    '[Object String]': 'string',
    '[Object Function]': 'function',
    '[Object Array]': 'array',
    '[Object Object]': 'object',
    '[Object Date]': 'date',
    '[Object RegExp]': 'regexp' 
  * }
  */
function getClassType() {
  let classType = {};
  const types = "Boolean Number String Function Array Object Date RegExp";
  types.split(" ").map((type, index) => classType['[object ' + type + ']'] = type.toLowerCase());
  return classType;
 }
//  console.log(getClassType())

/**
 * 输入要类型判断的对象；返回类型（String）
 * @param {object} obj 
 */
function type(obj) {
  const types = getClassType();
  if (obj === null) {
    return obj + "";
  }
  if (typeof obj === "object" || typeof obj === "function" ) {
    const type = Object.prototype.toString.call(obj);
    return types[type]
  } else {
    return typeof obj;
  }
}
const a = function a(){}
console.log(type(a))

/**
 * isElement 判断是不是 DOM 元素。
 */
isElement = function(obj) {
  return !!(obj && obj.nodeType === 1);
};

/**
 * Window 对象作为客户端 JavaScript 的全局对象，它有一个 window 属性指向自身
 * @param {object} obj 
 */
function isWindow( obj ) {
  return obj != null && obj === obj.window;
}
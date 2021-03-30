function deepClone1(obj) {
  let ret = obj;
  if (obj && typeof obj === 'object') {
    Array.isArray(obj) ? ret = []: ret = {};
    Object.keys(obj).forEach(key => {
      ret[key] = deepClone1(obj[key]);
    })
  }
  return ret;
}


function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

function cloneRegExp(data) {
  const pattern = data.valueOf();
  let flag = '';
  flag += pattern.global? 'g': '';
  flag += pattern.ignoreCase? 'i': '';
  flag += pattern.multiline? 'm': '';
  return new RegExp(pattern.source, flag);
}
/**
 * deepClone增强版
 * @param {Any}} obj 
 */
function deepClone2(obj) {
  let ret = obj;
  if (obj === null || typeof obj !== 'object'){
    return obj;
  }
  const objType = getType(obj)
  switch(objType) {
    case 'Function':
      return obj;
    case 'Date':
      return new Date(obj.getTime());
    case 'RegExp':
      ret = cloneRegExp(obj);
      break;
    case 'Array':
      ret = [];
      break;
    default:
      // if (obj) {
      //   ret = Object.create(Object.getPrototypeOf(obj));
      // }
      ret = {};
      break;
  }

  Object.keys(obj).forEach(key => {
    ret[key] = deepClone2(obj[key]);
  })
  return ret;
}

// 测试==================================
var o1 = {
  a: 111,
  b: [1, 2, 3],
  c: new Date(),
  d: function a() {console.log('----')},
  e: null,
  f: {a: 1},
  g: /^1/mi
}
var d1 = deepClone2(o1);
d1.a = 121;
// console.log('---o1--', o1)
// console.log('---d1--', d1)


function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

function cloneRegExp1(data) {
  let partten = data.valueOf();
  let flag = '';
  flag += partten.global? 'g': '';
  flag += partten.ignoreCase? 'i': '';
  flag += partten.multiline? 'm': '';
  return new RegExp(partten.source, flag);
}


function deepClone2(obj) {
  switch(objType) {
    case 'Function':
      return obj;
    case 'Date':
      return new Date(obj.getTime());
    case 'RegExp':
      ret = cloneRegExp(obj);
      break;
    case 'Array':
      ret = [];
      break;
    default:
      // if (obj) {
      //   ret = Object.create(Object.getPrototypeOf(obj));
      // }
      ret = {};
      break;
  }

  Object.keys(obj).forEach(key => {
    ret[key] = deepClone2(obj[key]);
  })
  return ret;
}
/**
 * 简易版
 * @param {Any} obj 
 */
function deepCloneSimple(obj) {
  let ret = obj;
  if (typeof obj === 'object') {
    Array.isArray(obj) ? ret = []: ret = {};
    Object.keys(obj).forEach(key => {
      ret[key] = deepClone(obj[key]);
    })
  }
  return ret;
}



function copyRegExp(data) {
  const partten = data.valueOf();
  let flag = '';
  flag += partten.global ?  'g': '';
  flag += partten.ignoreCase ? 'i': '';
  flag += partten.multiline ? 'm': '';
  return new RegExp(partten, flag);
}

function getObjType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

/**
 * 复杂版deepClone
 * @param {Object} obj 
 */
function deepClone(obj) {
  let ret = obj;
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  let type = getObjType(obj);
  switch(type) {
    case 'Array':
      ret = []
      break;
    case 'Date':
      return new Date(obj.getTime());
    case 'RegExp':
      return copyRegExp(obj);
    default:
      ret = {}
      break;
  }

  Object.keys(obj).forEach(key => {
    ret[key] = deepClone(obj[key]);
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
var d1 = deepClone(o1);
d1.a = 121;
console.log('---o1--', o1)
console.log('---d1--', d1)

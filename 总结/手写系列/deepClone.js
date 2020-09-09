/**
 * 普通版
 * @param {Object} obj 
 */
function deepClone(obj) {
  let res = obj;
  if (typeof obj === 'object' && obj) {
    Array.isArray(obj) ? res = [] : res = {};
    Object.keys(obj).forEach(key => {
      typeof obj[key] === 'object' 
        ? res[key] = deepClone(obj[key])
        : res[key] = obj[key];
    });
  }
  return res;
}

let ha = {a: new Date(), a2: 'aasss',b:{c: 2, d:{e: true, f: 4}}, ha: 'hahaha', c1: Boolean(true)}
let obj = deepClone(ha);
// obj.a = 222222;
// console.log(obj, '----new');
// console.log(ha, '----old');


function getDataType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

function cloneRegExp(data) {
  const pattern = data.valueOf();
  let flags = '';
  flags += pattern.global ? 'g' : '';
  flags += pattern.ignoreCase ? 'i' : '';
  flags += pattern.multiline ? 'm' : '';
  return new RegExp(pattern.source, flags)
}

/**
 * 增强版
 * @param {Object} obj 
 */
function deepCloneEnhance(obj) {
  let ret = {};
  if (obj === null || typeof obj !== 'object') return obj;
  const type = getDataType(obj);
  switch(type) {
    case 'Function': 
      return obj;
    case 'Date':
      return new Date(obj.getTime());
    case 'Array':
      ret = [];
      break;
    case 'RegExp':
      ret = cloneRegExp(obj)
      break;
    default:
      // ret = {};
      ret = Object.create(Object.getPrototypeOf(obj))
      break;
  }
  Object.keys(obj).forEach(key => {
    typeof obj[key] === 'object' ? ret[key] = deepCloneEnhance(obj[key]) : ret[key] = obj[key];
  });
  return ret
}

// console.log(deepCloneEnhance(/234/igm))
// console.log(getDataType([1, 2]))

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let obj1 = {
  a: new Date(),
  b: undefined,
  c: /234/igm,
  d: {},
  h: true,
  i: 234,
  k: 'sdfsd',
  m: [1, 2, 3],
  n: {f: 3, g: [3, new Date(), /ewrew/ig, 45, 8, {d: 33}]},
  o: /sdf/i,
  w: function () {
    console.log(44)
  },
  r: null,
  v: arr,
  s: arr,
};
let t1 = {a: 1, a2: 'aasss',b:{b1: new Date(), b2:{e: true, f: 4}, b3: 2}, d: function a() {}, e: Boolean(true)}
// let t11 = deepCloneEnhance(t1);
let t11 = deepCloneEnhance(obj1);
console.log(t11)

// console.log(Object.create(Object.getPrototypeOf(new Boolean(true))))
// let a = new Boolean(true);
// console.log(deepCloneEnhance(a))
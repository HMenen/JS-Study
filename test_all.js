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
console.log('--a1--', a1);
console.log('--a--', a);

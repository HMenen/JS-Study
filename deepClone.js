/**
 * 深度遍历的实现
 * @param {object} obj 
 */
function deepClone (obj) {
    let ret = obj;
    if (typeof obj === 'object' && obj) {
        obj = {};
        if (Array.isArray(obj)) obj = [];
        Object.keys(obj).forEach((o) => {
            console.log('================' + o);
            obj = deepClone(obj[o]);
            ret[o] = obj;    
        });
        // Object.keys(obj).forEach();
    }
    return ret;
}
function deepClone1 (obj) {
    let ret = obj;
    if (typeof obj === 'object' && obj) {
      ret = {};
      if (Array.isArray(obj)) ret = [];
      Object.keys(obj).forEach(key => {
        ret[key] = deepClone(obj[key]);
      });
    }
    // console.log(ret)
    return ret;
  }


function deepClone2(obj) {
    let result = obj;
    if (obj && typeof obj === 'object') {
        result = {};
        if (Array.isArray(obj)) result = [];
        Object.keys(obj).forEach(function(key) {
            result[key] = deepClone2(obj[key]);
        })
        return result;
    }
    return result;
}
  
let ha = {a: 1, a2: 'aasss',b:{c: 2, d:{e: 3, f: 4}}, ha: 'hahaha'}
let obj = deepClone1(ha);
obj.a = 222;
console.log(obj);
console.log(ha);
















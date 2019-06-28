/**
 * 深度遍历的实现
 * @param {object} obj 
 */
function deepClone (obj) {
    let ret = obj;
    if (typeof obj === 'onject' && obj) {
        obj = {};
        if (Array.isArray(obj)) obj = [];
        Object.keys(obj).forEach((o) => {
            obj = deepClone(o);
            ret[o] = obj;    
        });
    }
    return ret;
}

let ha = {a: 1, a2: 'aasss',b:{c: 2, d:{e: 3, f: 4}}, ha: 'hahaha'}
let obj = deepClone(ha);
console.log(obj);

















function deepClone(obj, hash=new WeakMap()) {
  let ret = obj;
  if (obj === null || typeof obj === 'object') {
    return ret;
  }
  if (hash.has(obj)) return hash.get(obj);
  Object.keys(obj).forEach(key => {
    ret[key] = deepClone(obj[key], hash);
  });
  hash.set(obj, ret);
  return ret;
}

let a = {b: {
  b1: 1,
}}
a.b.b2 = a

console.log(deepClone(a))
//setTimout 实现 setInterval
function myInterval(fn, time) {
  let context = this;
  setTimeout(() => {
    fn.call(context);
    myInterval(fn, time);
  }, time)
}


// myInterval(() => {console.log('====')}, 1000)


function getObjectType(obj) {
  const type = Object.prototype.toString.call(obj).slice(8, -1);
  return type;
}



//随便写的练习，和本节无关
function cloneRegExp(obj) {
  const pattern = obj.valueOf();
  let flags = '';
  flags += pattern.global ? 'g': '';
  flags += pattern.ignoreCase ? 'i': '';
  flags += pattern.multiline ? 'm': '';
  return new RegExp(pattern.source, flags)
}

function myDeepClone(obj) {
  let ret = obj;
  if (obj === null || typeof obj !== 'object') return obj;
  const type = getObjectType(obj);
  switch(type) {
    case 'Date':
      return new Date(obj.getTime());
    case 'Function':
      return obj;
    case 'RegExp':
      return cloneRegExp(obj);
    default:
      ret = Object.create(Object.getPrototypeOf(obj))
      break
  }
  if (typeof obj === 'object') {
    Array.isArray(obj)? ret = []: ret = {};
    Object.keys(obj).forEach(key => {
      ret[key] = myDeepClone(obj[key])
    })
  }
  return ret;
}

let ha = {a: new Date(), a2: 'aasss',b:{c: 2, d:{e: true, f: 4}}, ha: 'hahaha', c1: Boolean(true)}
let obj = myDeepClone(ha);
obj.a = 'test';
// console.log(obj, '===', ha);


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
  s: [],
};

let obj11 = myDeepClone(obj1);
console.log('=', obj11)
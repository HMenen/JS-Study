//Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
function objectCreate(proto, args) {
  function F() {}
  F.prototype = proto;
  let obj = new F();
  // Object.keys(args).forEach(key => {
  //   obj[key] = args[key].value;
  // })
  Object.defineProperties(obj, args)
  return obj;
}


// 测试==============================================数据属性：configurable
const a = {a: 111, b: 222}
const b = objectCreate(a, {p: { value: 42, writable: true,  configurable: false}})
// console.log('---b:', b, '------proto', b.__proto__, b.p)

// var b1 = Object.create(a, { p: { value: 42, writable: true } })
// console.log('---b:', b1, '------proto', b1.__proto__, b1.p)

b.p = 1
// b1.p = 1
// console.log('---b:', b.p, '------b1', b1.p)
console.log('-0--b:', b.p)
Object.defineProperties(b, {p: { value: 12, writable: true }})
console.log('-1--b:', b.p)
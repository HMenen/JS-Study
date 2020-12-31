/**
 * 
由此得出 小结4：
如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。
结合这些小结，整理在一起就是：
1. 创建了一个全新的对象。
2. 这个对象会被执行[[Prototype]]（也就是__proto__）链接。
3. 生成的新对象会绑定到函数调用的this。
4. 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。
 */
function myNew() {
  let obj = new Object();
  const constructor = [].shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  const ret = constructor.apply(obj, [...arguments]);
  return typeof ret === 'object' ? ret: obj;
}

function Student(name) {
  this.name = name;
}

const a = myNew(Student, 'tom');
console.log(a)
console.log(a.__proto__ === Student.prototype)

function new2() {
  const constructor = arguments[0];
  const args = [].slice.call(arguments, 1);
  const obj = new Object();
  obj.__proto__ = constructor.prototype;
  const ret = constructor.apply(obj, [...args]);
  if (ret && (typeof ret === 'object' || typeof ret === 'function')) {
    return ret;
  }
  return obj;
}

function new1(Parent, ...args) {
  let obj = new Object();
  obj.__proto__ = Parent.prototype;
  let ret = Parent.apply(obj, args);
  if (ret && (typeof ret === 'object' || typeof ret === 'function')) {
    return ret;
  }
  return obj;
}

const a1 = new1(Student, 'tom');
console.log(a1)
console.log(a1.__proto__ === Student.prototype)
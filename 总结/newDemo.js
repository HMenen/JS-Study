/**
 * js 实现new
 * 参数输入：要new的源构造函数，参数（可多个）
 * 输出：一个新的对象
 * 其中source是arguments的第一个参数，是源对象
 * 利用原型链，令对象的__proto__属性 = 构造函数.prototype
 * 利用apply使source中的this指向obj
 */
function objectFactory() {
  const source = [].shift.call(arguments);
  let obj = new Object();
  obj.__proto__ = source.prototype;
  let ret = source.apply(obj, arguments);
  return typeof ret === 'object' ? ret: obj;
}

//测试
function Otaku (name, age) {
  this.name = name;
  this.age = age;

  this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
  console.log('I am ' + this.name);
}

let person = objectFactory(Otaku, 'hahaha', 18) 
console.log(person.name);
person.sayYourName();
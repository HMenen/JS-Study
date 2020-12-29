//https://zhuanlan.zhihu.com/p/57336944
/**
 * 
 * ES6 extends 继承，主要就是：
 * 把子类构造函数(Child)的原型(__proto__)指向了父类构造函数(Parent)，
 * 把子类实例child的原型对象(Child.prototype) 的原型(__proto__)指向了父类parent的原型对象(Parent.prototype)。
 * 这两点也就是图中用不同颜色标记的两条线。
 * 子类构造函数Child继承了父类构造函数Preant的里的属性。使用super调用的(ES5则用call或者apply调用传参)。
 * 也就是图中用不同颜色标记的两条线。
 * 
 * 
 * 回顾寄生组合式继承。主要就是三点：
 * 子类构造函数的__proto__指向父类构造器，继承父类的静态方法
 * 子类构造函数的prototype的__proto__指向父类构造器的prototype，继承父类的方法。
 * @param {*} name 
 */
// ES5 实现ES6 extends的例子
function Parent(name){
  this.name = name;
}
Parent.sayHello = function(){
  console.log('hello');
}
Parent.prototype.sayName = function(){
  console.log('my name is ' + this.name);
  return this.name;
}

function Child(name, age){
  // 相当于super
  Parent.call(this, name);
  this.age = age;
}
// new
function object(){
  function F() {}
  F.prototype = proto;
  return new F();
}
function _inherits(Child, Parent){
  // Object.create
  Child.prototype = Object.create(Parent.prototype);
  // __proto__
  // Child.prototype.__proto__ = Parent.prototype;
  Child.prototype.constructor = Child;
  // ES6
  // Object.setPrototypeOf(Child, Parent);
  // __proto__
  Child.__proto__ = Parent;
}
_inherits(Child,  Parent);
Child.prototype.sayAge = function(){
  console.log('my age is ' + this.age);
  return this.age;
}
var parent = new Parent('Parent');
var child = new Child('Child', 18);
console.log('parent: ', parent); // parent:  Parent {name: "Parent"}
Parent.sayHello(); // hello
parent.sayName(); // my name is Parent
console.log('child: ', child); // child:  Child {name: "Child", age: 18}
Child.sayHello(); // hello
child.sayName(); // my name is Child
child.sayAge(); // my age is 18
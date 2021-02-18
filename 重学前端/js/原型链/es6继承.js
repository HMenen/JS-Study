//https://zhuanlan.zhihu.com/p/57336944
/**
 * 子类构造函数的__proto__指向父类构造器，继承父类的静态方法。  Child.__proto__ === Parent   // true
 * 子类构造函数的prototype的__proto__指向父类构造器的prototype，继承父类的方法。 Child.prototype.__proto__ === Parent.prototype   // true
 * 子类构造器里调用父类构造器，继承父类的属性。   super()

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
 * 
 * // 1、构造器原型链
 * Child.__proto__ === Parent; // true
 * Parent.__proto__ === Function.prototype; // true
 * Function.prototype.__proto__ === Object.prototype; // true
 * Object.prototype.__proto__ === null; // true
 * 
 * // 2、实例原型链
 * child.__proto__ === Child.prototype; // true
 * Child.prototype.__proto__ === Parent.prototype; // true
 * Parent.prototype.__proto__ === Object.prototype; // true
 * Object.prototype.__proto__ === null; // true
 * 
 * @param {*} name 
 */
// ES5 实现ES6 extends的例子

// 组合继承
// 组合继承（combination inheritance），有时候也叫做伪经典继承。是将原型链和借用构造函数的技术组合到一块，从而发挥二者之长的一种继承模式。

// 基本思想
// 思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数复用，又能够保证每个实例都有它自己的属性。
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
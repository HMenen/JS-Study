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
 * 
 * 继承：
 * https://github.com/LuckyWinty/blog/blob/master/markdown/JavaScript/%E4%B8%80%E6%96%87%E5%AE%8C%E5%85%A8%E5%90%83%E9%80%8F%20JavaScript%20%E7%BB%A7%E6%89%BF.md
 * 基本思想
 * 借用构造函数的基本思想就是利用call或者apply把父类中通过this指定的属性和方法复制（借用）到子类创建的实例中。因为this对象是在运行时基于函数的执行环境绑定的。
 * 也就是说，在全局中，this等于window，而当函数被作为某个对象的方法调用时，this等于那个对象。
 * call 、apply方法可以用来代替另一个对象调用一个方法。call、apply 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。 　　
 * 所以，这个借用构造函数就是，new对象的时候(注意，new操作符与直接调用是不同的，以函数的方式直接调用的时候，this指向window，new创建的时候，this指向创建的这个实例)，
 * 创建了一个新的实例对象，并且执行SubType里面的代码，而SubType里面用call调用了SuperTyep，也就是说把this指向改成了指向新的实例，所以就会把SuperType里面的this相关属性和方法赋值到新的实例上，而不是赋值到SupType上面。所有实例中就拥有了父类定义的这些this的属性和方法。
 * 
 * 优势
 * 相对于原型链而言，借用构造函数有一个很大的优势，即可以在子类型构造函数中向超类型构造函数传递参数。因为属性是绑定到this上面的，所以调用的时候才赋到相应的实例中，
 * 各个实例的值就不会互相影响了。

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
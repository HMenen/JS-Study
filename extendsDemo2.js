//1.原型链继承  引用类型的属性被所有实例共享
function Parent () {
  this.names = ['a', 'b', 'c']
}

function Child () {

}
Child.prototype = new Parent();
let child1 = new Child();
child1.names.push('d');

var child2 = new Child();
// console.log(child2.names)

//2.借用构造函数(经典继承)
//缺点：方法都在构造函数中定义，每次创建实例都会创建一遍方法。
function Parent2() {
  this.names = ['a', 'b', 'c'];
}

function Child2() {
  Parent.call(this);
}
let child11 = new Child2();
child11.names.push('d');
// console.log(child11.names)
var child22 = new Child2();
// console.log(child22.names)

//3.组合继承 
//优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。
function Parent3(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
Parent3.prototype.getName = function() {console.log(this.name)}

function Child3(name, age) {
  Parent3.call(this, name)
  this.age = age;
}
Child3.prototype = new Parent3();
Child3.prototype.constructor = Child;

// let child111 = new Child3('aaa');
// console.log(child111.colors)
// console.log(child111.age)
// var child222 = new Child3('a', 16);
// console.log(child222.name)
// console.log(child222.age)

//4.原型式继承
//缺点：包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。
function createObj(obj) {
  function F() {};
  F.prototype = obj;
  return new F();
}

var person = {
  name: 'kevin',
  friends: ['daisy', 'kelly']
}

var p1 = createObj(person);
var p2 = createObj(person);

// p1.name = 'person1';
console.log(p1.friends);
console.log(p2.name); // kevin
p1.friends.push('taylor');
console.log(p2.friends); // ["daisy", "kelly", "taylor"]

//5. 寄生式继承
//缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。
function createObj2(obj) {
  let clone = Object.create(obj)
  clone.sayName = function () {
    console.log('hi');
  }
  return clone;
}

//6.寄生组合式继承
function prototype(child, parent) {
  function F() {};
  F.prototype = parent.prototype;
  let proto = new F();
  proto.constructor = child;
  child.prototype = proto;
}


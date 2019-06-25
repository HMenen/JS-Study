function getParent(child, parent) {
    function F() {};
    F.prototype = parent;
    child.prototype = new F();
    child.prototype.constructor = child;
}

function Animal () {
    let ha = 'animal111';
}
Animal.prototype.ha = 'qqqq';

function Dog () {}

getParent(Dog, Animal);
var dog = new Dog();
// console.log(dog.ha);

//继承: 方式一：借助构造函数
function Parent1 () {
    this.name = 'parent属性';
}

function Child1 () {
    Parent1.call(this);
    this.type = 'Child1';
}
// console.log(new Child1);

//方法二：通过原型链实现继承
function Child2 () {
    this.type = 'Child2';
}
Child2.prototype = new Parent1();
console.log(new Child2);

//方式三：组合的方式：构造函数 + 原型链
function Parent3 () {
    this.name = 'Parent3';
    this.arr = [1, 2, 3];
}
function Child3 () {
    Parent3.call(this);
    this.type = 'Child3';
}
Child3.prototype = new Parent3();
var child3 = new Child3();
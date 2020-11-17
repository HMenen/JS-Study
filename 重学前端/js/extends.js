//基本模式
function superA() {
  this.nums = [1, 2];
  // this.name = 'q';
}
superA.prototype.name = 'aaa'

function subA() {
  superA.call(this)
}

let a1 = new subA();
let a2 = new subA();
// a1.nums.push(3);
// console.log(a1, '===', a2);
// a1.name = 'a1';
// console.log(a1.name, '===', a2.name);
// let aa = new superA()
// console.log(aa.name)

//优势
// 相对于原型链而言，借用构造函数有一个很大的优势，即可以在子类型构造函数中向超类型构造函数传递参数。
// 因为属性是绑定到this上面的，所以调用的时候才赋到相应的实例中，各个实例的值就不会互相影响了。

//劣势
//如果仅仅是借用构造函数，那么也将无法避免构造函数模式存在的问题——方法都在构造函数中定义，因此函数复用就无从谈起了。
//而且，在超类型的原型中定义的方法，对子类型而言也是不可见的，结果所有类型都只能使用构造函数模式。考虑到这些问题，借用构造函数的技术也是很少单独使用的。

//组合继承
//既通过在原型上定义方法实现了函数复用，又能够保证每个实例都有它自己的属性。
function superB(name) {
  this.name = name;
  this.nums = [1, 2];
}
superB.prototype.getAge = function () {
  console.log('--age:', this.age)
};

function subB(name, age) {
  superB.call(this, name)
  this.age = age;
}

subB.prototype = new superB();
superB.prototype.constructor = subB;

let b1 = new subB('subB-b1', 20);
let b2 = new subB('subB-b2', 18);
// console.log('b1-name:',b1.name);
// console.log('b2-name:', b2.name);
b1.nums.push(3);
// console.log('b1-nums:', b1.nums);
// console.log('b2-nums:', b2.nums);
// console.log(b1.getAge());
// console.log(b2.getAge());
//优势
//组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点，成为JavaScript 中最常用的继承模式。
//劣势
//组合继承最大的问题就是无论什么情况下，都会调用两次超类型构造函数：一次是在创建子类型原型的时候，
//另一次是在子类型构造函数内部。虽然子类型最终会包含超类型对象的全部实例属性，但我们不得不在调用子类型构造函数时重写这些属性。


//https://www.cnblogs.com/jiafifteen/p/12201355.html
//执行的是父类的constructor函数绑定的是子类的this，还可以访问到挂在原型链上的this

function myCreateOnject(superClass) {
  const F = function() {};
  F.prototype = superClass;
  return new F();
}

// 在低版本的浏览器可能不支持create 可以用下方法扩展
Object.create = Object.create || function (obj) {
  var F = function () {};
  F.prototype = obj;
  return new F();
};

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

var B = /*#__PURE__*/ (function(_A) {
  _inherits(B, _A);
  

  var _super = _createSuper(B);

  function B() {
    _classCallCheck(this, B);

    return _super.apply(this, arguments);  //父类.prototype.constructor().apply(this.arguments) 使继承的实例拥有自己的属性
  }

  return B;
})(A);

class Animal {
  constructor(kind) {
    this.name = 'Animal111';
    this.kind = kind;
  }
  getKind() {
    // console.log('-aaaaa---', this.kind);
    return this.kind;
  }
}
Animal.prototype.color = 'black'

class Cat extends Animal {
  constructor() {
    super('cat');
    this.name1 = 'Cat111';
  }
  getCatInfo() {
    // super在普通方法中表示的是Animal.prototype:
    // super.color相当于Animal.prototype.color
    console.log('-super.color---', super.color); // black
    // super.getKind()相当于Animal.prototype.getKind()
    console.log(this.name + '：' + super.getKind())
    //super表示的是父类的原型，因此在父类实例上的属性和方法都无法通过super调用
    console.log('-super.kind---', super.kind); //kind是Animal的实例属性，因此无法通过super访问
  }
}

let c = new Cat();
console.log(c.getCatInfo())

//这里的super():super虽然代表父类的构造函数，但是返回的是子类的实例。super() => Animal.prototype.constructor.call('Cat类的this')

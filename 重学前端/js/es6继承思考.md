####
```
Object.getPrototypeOf()
Object.getPrototypeOf方法可以用来从子类上获取父类。

Object.getPrototypeOf(ColorPoint) === Point // true
```

class 的继承精华：
```
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
```


js中实现继承的方法很多，常提起的有原型链继承，构造函数继承，实例继承（原型式继承），组合继承，寄生式继承，寄生组合继承等。 在es6出现了class继承，class继承等出现一方面完美解决了继承既可以保证每个实例对象具有自身属性，又可以保证共享原型中的方法。如下示例所示。

```
class Animal {
  constructor(kind) {
    this.name = 'Animal';
    this.kind = kind;
  }
  getKind() {
    return this.kind;
  }
}
Animal.prototype.color = 'white';


class Cat extends Animal {
  constructor() {
    super('cat');
    this.name = 'Tom';
  }
  getCatInfo() {
    console.log('-super.color---', super.color);
    console.log(this.name + 'is a ' + super.getKind())
    console.log('-super.kind---', super.kind);
  }
}

let c = new Cat();
c.getCatInfo()
结果如下：
-super.color---white
Tom is a cat
-super.kind---undefined
```
##### 在类继承中，我们常使用等super有2层含义:
1. super在构造方法中使用时，super = 父类的构造函数。
当super在构造方法中使用时：super()返回的实际是子类的实例。     
super() = 父类.prototype.constructor.call(子类的this);   
2. super在普通方法中使用时，super = 父类.propertype   
现在来看一下示例中打印的结果：
```
console.log('-super.color---', super.color) 
打印：-super.color---white
```
`原因：super.color = Animal.prototype.color，
而 Animal.prototype.color = 'white'，所以 super.color = 'white'`

```
console.log(this.name + 'is a ' + super.getKind())
打印：Tom is a cat
```
`
其中 this.name中的this指向Cat，在构造函数中 this.name = 'Tom'。
如果更改Cat的构造函数如下，打印结果：Animal is a cat，原因很简单Cat中找不到name属性，由于构造函数中super() = Animal.prototype.constructor(Cat的this)，所以去Animal中找他的name属性，发现 this.name = 'Animal'。
`
```
class Cat extends Animal {
  constructor() {
    super('cat');
  }
  getCatInfo() {
    console.log('-super.color---', super.color);
    console.log(this.name + 'is a ' + super.getKind())
    console.log('-super.kind---', super.kind);
  }
}
```

```
console.log('-super.kind---', super.kind);
打印：-super.kind---undefined
```
`
super.kind = Animal.prototype.kind，Animal.prototype中并没有定义kind，自然打印的是undefined
`

最后需要注意的是在Animal中，getKind方法是在Animal.protopype下的，Animal.protopype显示如下：
```
color: "white"
constructor: class Animal
getKind: ƒ getKind()
__proto__: Object
```

Object.prototype.isPrototypeOf()方法用于判断对象是否在某个对象的原型链上。

###### 判断类型的方法：https://www.cnblogs.com/yadiblogs/p/10750775.html
######  https://blog.csdn.net/zjy_android_blog/article/details/81023177
1. Object.prototype.toString.call()
2. constructor
constructor是原型prototype的一个属性，当函数被定义时候，js引擎会为函数添加原型prototype，并且这个prototype中constructor属性指向函数引用， 因此重写prototype会丢失原来的constructor。

console.log((2).constructor === Number);


不过这种方法有问题：
1：null 和 undefined 无constructor，这种方法判断不了。
2：还有，如果自定义对象，开发者重写prototype之后，原有的constructor会丢失，因此，为了规范开发，在重写对象原型时一般都需要重新给 constructor 赋值，以保证对象实例的类型不被篡改。


```
Array.__proto__  === Function.__proto__
Array.__proto__.__proto__ === Object.prototype

```

##### https://zhuanlan.zhihu.com/p/57336944

```

function F(){}
var f = new F();
// 构造器
F.prototype.constructor === F; // true
F.__proto__ === Function.prototype; // true
Function.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__ === null; // true

// 实例
f.__proto__ === F.prototype; // true
F.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__ === null; // true
f.__proto__.__proto__ === Object.prototype

```
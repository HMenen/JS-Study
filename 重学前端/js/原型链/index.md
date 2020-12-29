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

```
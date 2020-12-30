/**
 * 
 * 1、bind是Function原型链中的Function.prototype的一个属性，它是一个函数，修改this指向，合并参数传递给原函数，返回值是一个新的函数。
 * 2、bind返回的函数可以通过new调用，这时提供的this的参数被忽略，指向了new生成的全新对象。内部模拟实现了new操作符。
 * 3、es5-shim源码模拟实现bind时用Function实现了length。
 * 事实上，平时其实很少需要使用自己实现的投入到生成环境中。但面试官通过这个面试题能考察很多知识。比如this指向，原型链，闭包，函数等知识，可以扩展很多。
 */
Function.prototype.myBind = function() {
    const self = [].shift.call(arguments);
    let args = [...arguments];
    let fun = this;
    return function() {
      fun.apply(self, [...args, ...arguments])
    }
}


Function.prototype.myBind3 = function() {
  const func = this;
  const self = arguments[0]
  const oriArgs = [].slice.call(arguments, 1);
  const bound = function() {
    // console.log('---------this:', this, this instanceof bound)
    if (this instanceof bound) {
      //有可能是箭头函数， 箭头函数没有prototype
      if (func.prototype) {
        this.__proto__ = func.prototype;
      }
      const ret = func.apply(this, [...oriArgs, ...arguments]);
      if (ret && (typeof ret === 'object' || typeof ret === 'function')) {
        return ret;
      }
      return this;
    } else {
      return func.apply(self, [...oriArgs, ...arguments])
    }
  }
  return bound;
}

//=================测试
//1. new测试， original不发回值
var obj = {
  name: 'hmm',
};
function original(a, b){
  console.log('this', this); // original {}
  console.log('typeof this', typeof this); // object
  this.name = b;
  console.log('name', this.name); // 2
  console.log('this', this);  // original {name: 2}
  console.log([a, b]); // 1, 2
}

// var bFun = original.myBind3(obj, 1);
// var b = new bFun(2);
// console.log('---11111----', b.__proto__ === original.prototype);


//2. 
var obj2 = {
  name: 'hmm',
};
function original2(a, b){
  console.log('this', this); // original {}
  console.log('typeof this', typeof this); // object
  this.name = b;
  console.log('name', this.name); // 2
  console.log('this', this);  // original {name: 2}
  console.log([a, b]); // 1, 2
  return {name: 'hahahha', age: 18}
}

var func1 = original2.myBind3(obj2, 1);
var b2 = new func1(2);
console.log('-------b--', b2)
console.log('---11111----', b2.__proto__ === original2.prototype); //false

//3. 一般函数调用测试
function demo(age, a1) {
  console.log(this.name, '-----', age, a1)
}
var a = {
  name: 'hahaha'
}
// const d = demo.myBind3(a);
// d(18, 'lll');




Function.prototype.myBind2 = function() {
  const func = this;
  const self = arguments[0];
  const oriArgs = [].slice.call(arguments, 1);
  const bound = function() {
    if (this instanceof bound) {
      //有可能是箭头函数， 箭头函数没有prototype
      if (func.prototype) {
        this.__proto__ = func.prototype;
      }
      const ret = func.apply(this, [...oriArgs, ...arguments]);
      if (ret && (typeof ret === 'object' || typeof ret === 'object')) {
        return ret;
      }
    } else {
      return func.apply(self, [...oriArgs, ...arguments])
    }
  }
  return bound;
}


// function demo(age, a1) {
//   console.log(this.name, '-----', age, a1)
// }

// var a = {
//   name: 'hahaha'
// }
// const d = demo.myBind(a);
// // d(18, 'lll');


// var obj = {
//   name: '若川',
// };
// function original(a, b){
//   console.log('this', this); // original {}
//   console.log('typeof this', typeof this); // object
//   this.name = b;
//   console.log('name', this.name); // 2
//   console.log('this', this);  // original {name: 2}
//   console.log([a, b]); // 1, 2
// }
// var bound = original.myBind2(obj, 1);
// // var bound = original.bind(obj, 1);
// var newBoundResult = new bound(2);
// // console.log(newBoundResult, 'newBoundResult'); // original {name: 2}
// console.log('=========-------------', newBoundResult.__proto__ === original.prototype)  //true
// console.log('=========-------------', bound.prototype)
// console.log('=========-------------', newBoundResult.prototype)



/**
 * https://juejin.cn/post/6844903718089916429
 * 1、bind是Function原型链中的Function.prototype的一个属性，它是一个函数，修改this指向，合并参数传递给原函数，返回值是一个新的函数。
 * 2、bind返回的函数可以通过new调用，这时提供的this的参数被忽略，指向了new生成的全新对象。内部模拟实现了new操作符。
 * 3、es5-shim源码模拟实现bind时用Function实现了length。
 * 事实上，平时其实很少需要使用自己实现的投入到生成环境中。但面试官通过这个面试题能考察很多知识。比如this指向，原型链，闭包，函数等知识，可以扩展很多。
 * 
 * 
 * 实现bind要做什么
 * 返回一个函数，绑定this，传递预置参数
 * bind返回的函数可以作为构造函数使用。故作为构造函数时应使得this失效，但是传入的参数依然有效
 * 
 */

// 最终版 删除注释 详细注释版请看上文
Function.prototype.bind = Function.prototype.bind || function bind(thisArg){
  if(typeof this !== 'function'){
      throw new TypeError(this + ' must be a function');
  }
  var self = this;
  var args = [].slice.call(arguments, 1);
  var bound = function(){
      var boundArgs = [].slice.call(arguments);
      var finalArgs = args.concat(boundArgs);
      if(this instanceof bound){
          if(self.prototype){
              function Empty(){}
              Empty.prototype = self.prototype;
              bound.prototype = new Empty();
          }
          var result = self.apply(this, finalArgs);
          var isObject = typeof result === 'object' && result !== null;
          var isFunction = typeof result === 'function';
          if(isObject || isFunction){
              return result;
          }
          return this;
      }
      else{
          return self.apply(thisArg, finalArgs);
      }
  };
  return bound;
}

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
// var obj = {
//   name: 'hmm',
// };
// function original(a, b){
//   console.log('this', this); // original {}
//   console.log('typeof this', typeof this); // object
//   this.name = b;
//   console.log('name', this.name); // 2
//   console.log('this', this);  // original {name: 2}
//   console.log([a, b]); // 1, 2
// }

// var bFun = original.myBind3(obj, 1);
// var b = new bFun(2);
// console.log('---11111----', b.__proto__ === original.prototype);


//2. 
// var obj2 = {
//   name: 'hmm',
// };
// function original2(a, b){
//   console.log('this', this); // original {}
//   console.log('typeof this', typeof this); // object
//   this.name = b;
//   console.log('name', this.name); // 2
//   console.log('this', this);  // original {name: 2}
//   console.log([a, b]); // 1, 2
//   return {name: 'hahahha', age: 18}
// }

// var func1 = original2.myBind3(obj2, 1);
// var b2 = new func1(2);
// console.log('-------b--', b2)
// console.log('---11111----', b2.__proto__ === original2.prototype); //false

// //3. 一般函数调用测试
// function demo(age, a1) {
//   console.log(this.name, '-----', age, a1)
// }
// var a = {
//   name: 'hahaha'
// }
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


Function.prototype.bindTest = function(thisArg) {
  const self = this;
  let args = [].slice.call(arguments, 1);
  function bound() {
    let boundArgs = [].slice.call(arguments);
    const finalArgs = [...args, ...boundArgs];
    console.log('---111----', this)
    if (this instanceof bound) {
      if (self.prototype) {
        function Empty() {};
        Empty.prototype = self.prototype;
        bound.prototype = new Empty();
      }
      const ret = self.apply(this, finalArgs);
      return typeof ret === ('function' || 'object') ?  ret: this;
    } else {
      return self.apply(thisArg, finalArgs)
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
//   // console.log('this', this); // original {}
//   // console.log('typeof this', typeof this); // object
//   this.name = b;
//   // console.log('name', this.name); // 2
//   console.log('this', this);  // original {name: 2}
//   console.log([a, b]); // 1, 2
// }
// var bound = original.bindTest(obj, 1);
// // var bound = original.bind(obj, 1);
// var newBoundResult = new bound(2);
// console.log(newBoundResult, 'newBoundResult'); // original {name: 2}
// console.log('=========-------------', newBoundResult.__proto__ === original.prototype)  //true
// console.log('=========-------------', bound.prototype)
// console.log('=========-------------', newBoundResult.prototype)



// var obj = {
//   name: '若川',
// };

// function demo(age, a1) {
//   console.log(this.name, '-----', this, age, a1)
// }

// var a = demo.bind(obj, 1);


// Function.prototype.bindTest = function(thisArg) {
//   const self = this;
//   let args = [].slice.call(arguments, 1);
//   function bound() {
//     let boundArgs = [].slice.call(arguments);
//     const finalArgs = [...args, ...boundArgs];
//     console.log('---111----', this)
//     if (this instanceof bound) {
//       if (self.prototype) {
//         function Empty() {};
//         Empty.prototype = self.prototype;
//         bound.prototype = new Empty();
//       }
//       const ret = self.apply(this, finalArgs);
//       return typeof ret === ('function' || 'object') ?  ret: this;
//     } else {
//       return self.apply(thisArg, finalArgs)
//     }
//   }
//   return bound;
// }

Function.prototype.bindAAA = function() {
  const func = this;
  const _this = arguments[0];
  let originArgs = [].slice.call(arguments, 1);
  const bound = function() {
    let args = [].slice.call(arguments);
    const finalArgs = [...originArgs, ...args];
    // console.log('-thisthisthis111------', this instanceof bound, func.prototype)
    if (this instanceof bound) {
      if (func.prototype) {
        function F() {};
        F.prototype = func.prototype;
        bound.prototype = new F();
        // this.__proto__ = func.prototype;
      }
      const ret = func.apply(this, finalArgs);
      if (typeof ret === 'function' || (typeof ret === 'object' && ret !== null)) {
        return ret;
      } else {
        console.log('-thisthisthis222------', this instanceof bound, func.prototype)
        return this;
      }
    } else {
      return func.apply(_this, finalArgs);
    }
  }
  return bound;
}

var obj = {
  name: '1若川',
};
function original(a, b){
  console.log('this', this); // original {}
  console.log('typeof this', typeof this); // object
  this.name = b;
  console.log('name', this.name); // 2
  console.log('this', this);  // original {name: 2}
  console.log([a, b]); // 1, 2
}
var bound = original.bindAAA(obj, 1);
// bound(111);
// var bound = original.bind(obj, 1);
var newBoundResult = new bound(2);
// console.log(newBoundResult, 'newBoundResult'); // original {name: 2}
// console.log('=========-------------', newBoundResult.__proto__, newBoundResult.__proto__ === original.prototype)  //true
console.log('=========-------------', bound.prototype)
// console.log('=========-------------', newBoundResult.prototype)
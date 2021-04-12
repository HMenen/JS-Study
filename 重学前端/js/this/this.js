// 箭头函数中没有this绑定，必须通过查找作用域链来决定其值。 
//如果箭头函数被非箭头函数包含，则this绑定的是最近一层非箭头函数的this，
//否则this的值则被设置为全局对象。 

//优先级是new 调用 > call、apply、bind 调用 > 对象上的函数调用 > 普通函数调用
/**
如果要判断一个运行中函数的 this 绑定， 就需要找到这个函数的直接调用位置。 找到之后 就可以顺序应用下面这四条规则来判断 this 的绑定对象。
new 调用：绑定到新创建的对象，注意：显示return函数或对象，返回值不是新创建的对象，而是显式返回的函数或对象。
call 或者 apply（ 或者 bind） 调用：严格模式下，绑定到指定的第一个参数。非严格模式下，null和undefined，指向全局对象（浏览器中是window），其余值指向被new Object()包装的对象。
对象上的函数调用：绑定到那个对象。
普通函数调用： 在严格模式下绑定到 undefined，否则绑定到全局对象。
ES6 中的箭头函数：不会使用上文的四条标准的绑定规则， 而是根据当前的词法作用域来决定this，
具体来说，箭头函数会继承外层函数，调用的 this 绑定（ 无论 this 绑定到什么），没有外层函数，则是绑定到全局对象（浏览器中是window）。 这其实和 ES6 之前代码中的 self = this 机制一样。
DOM事件函数：一般指向绑定事件的DOM元素，但有些情况绑定到全局对象（比如IE6~IE8的attachEvent）。
一定要注意，有些调用可能在无意中使用普通函数绑定规则。 如果想“ 更安全” 地忽略 this 绑 定， 你可以使用一个对象， 比如ø = Object.create(null)， 以保护全局对象。
 */


// var name = 'window';
// var student = {
//   name: '若川',
//   doSth: function(){
//       var arrowDoSth = () => {
//         console.log(this.name);
//       }
//       arrowDoSth();
//   },
//   arrowDoSth2: () => {
//       console.log(this.name);
//   }
// }
// student.doSth(); // '若川'
// student.arrowDoSth2(); // 'window'


var name = 'window';
var person = {
    name: 'person',
}
var doSth = function(){
    console.log(this.name);
    return function(){
        console.log('return:', this.name);
    }
}
var Student = {
    name: '若川',
    doSth: doSth,
}
// 普通函数调用
// doSth(); // window
// 对象上的函数调用
// Student.doSth(); // '若川'
// call、apply 调用
// Student.doSth.call(person); // 'person'
// new Student.doSth.call(person);

// function A() {
//   getName = function() {
//     console.log('--------111-------')
//   };
// }

function Foo() {
  print = function(){
    console.log('--print---');
  }
  this.a = 111;
  var b = 222;
  return this;
}
// Foo()
// console.log(Foo().print());
// console.log(p)

// function Foo() {
//   getName = function () { alert (1); };
//   return this;
// }
// https://www.cnblogs.com/xxcanghai/p/5189353.html
"use strict"
function Foo() {
    getName = function () { console.log(1); };
    return this || global;
}
Foo.getName = function () { console.log(2);};
Foo.prototype.getName = function () { console.log(3);};
var getName = function () { console.log(4);};
function getName() { console.log(5);}

global.getName = () => console.log('-=-=-')
//请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
// 2 4 1 1 2 3 3

//严格模式 Foo().getName(); 下会报错， 因为 Foo 函数中返回的 this 为undefined，所以 Foo().getName() 报错
// function Foo() {
//     getName = function () { console.log(1); };
//     return this || global;
// }
// console.log(Foo().getName())

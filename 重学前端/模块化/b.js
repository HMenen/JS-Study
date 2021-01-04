// console.log('1---', new Date().getTime())
// var moduleA = require('./a.js');
// console.log('2---', new Date().getTime())
// console.log(moduleA);     // 打印出hello world
// console.log('3---', new Date().getTime())
// // moduleA = {aa: 111};
// // moduleA.a = 'hahaha'
// console.log(moduleA); 
// var moduleA1 = require('./a.js');
// console.log(moduleA1); 

var moduleA = require('./a');

console.log(moduleA.counter1);
console.log(moduleA.inCounter());
console.log(moduleA.counter1);


var moduleB = require('./a');
console.log('moduleB', moduleB.counter);
console.log(moduleB.inCounter());

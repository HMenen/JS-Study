function myExtends(child, parent) {
  function F() {}
  F.prototype = parent.prototype;
  let f = new F();
  f.constructor = child;
  child.prototype = f;
}

function Super(name){
  this.name = name;
}
Super.prototype.sayHi=function(){
  console.log('====', this.name)//ccdida
}
function Sub(name){
  this.name = name
}

myExtends(Sub, Super)
var c = new Sub('aaa')
console.log(c.sayHi())


// Sub.prototype.sayHi1=function(){
//   console.log('==111==', this.name)//ccdida
// }
// var p = new Super('111aaa')
// console.log(p.sayHi1())



// var instance1=new Sub('ccdida')
// // instance1.sayHi()
// console.log(instance1.__proto__)
// console.log(instance1.__proto__.__proto__)


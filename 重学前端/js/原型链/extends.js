function myExtends(Child, Parent) {
  function F() {}
  F.prototype = Parent.prototype;
  let f = new F();
  f.constructor = Child;
  Child.prototype = f;
}

function Super(name){
  this.name = name;
}
Super.prototype.sayHi = function(){
  console.log('====', this.name)//ccdida
}
function Sub(name){
  this.name = name
}

myExtends(Sub, Super)
var c = new Sub('aaa')
console.log(c.sayHi())
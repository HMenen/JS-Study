function createPerson(name, age){
  var o = new Object();      // 创建一个对象
  o.name = name;
  o.age = age;
  o.sayName = function(){
        console.log(this.name)
  }
  return o;      // 返回这个对象
}
var person1 = createPerson('ccc', 18)
var person2 = createPerson('www', 18)
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.test = function() {
    console.log('---test---', this.name)
  }
  const a = () => {
    console.log('------asd------')
  }
}
Person.prototype.print = function() {
  console.log('-----name-----', this.name)
}

function Teacher(name, age) {
  Person.call(this, name, age)
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;


var t = new Teacher('aaa', 1);
// console.log(t.name)
// t.print();
Teacher.prototype.hahah = function () {
  console.log('------hahaha------');
}
// t.test();
// console.log('----111------', Teacher.__proto__ === Person)
// console.log('----Teacher.prototype------', Teacher.prototype)
// console.log('----Person.prototype------', Person.prototype)
// ----Teacher.prototype------ Person { hahah: [Function] }
// ----Person.prototype------ Person { print: [Function] }
// t.a();


class Parent{
  constructor(name){
      this.name = name;
  }
  static sayHello(){
      console.log('hello');
  }
  // sayName(){
  //     console.log('my name is ' + this.name);
  //     return this.name;
  // }
  demo(){
    console.log('-demo----', this.name)
  }
}

class Child extends Parent{
  constructor(name, age){
      super(name);
      // this.name = name;
      this.age = age;
  }
  // sayAge(){
  //     console.log('my age is ' + this.age);
  //     return this.age;
  // }
}

let parent = new Parent('Parent');
let child = new Child('Child', 18);
// console.log('====child=====', child.sayName())
// console.log('====parent=====', parent.sayName())
// console.log('----111------', Child.__proto__ === Parent)
child.demo();
parent.demo();
Child.sayHello();

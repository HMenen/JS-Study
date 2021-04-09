var a = 1;
function test() {
  console.log(a); //1
  let a = 3;
  console.log(a); //3
}

console.log(window.a) //1


var a = 1;
function test() {
  console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
  let a = 3;
  console.log(a); //3
}

console.log(window.a) //1
test()


var a = 10;
function test() {
  a = 20;
  console.log(a); //20
}
test()
console.log(window.a) //20


var a = 10
function test() {
  console.log(a); //undefined
  var a = 20;
  console.log(a); //20
}
test()
console.log(window.a) //10

//黄金守则第二条：变量的查找是就近原则，去寻找var定义的变量，当就近没有找到的时候就去查找外层。
var a = 10
function test() {
  console.log(a); //undefined
  var a = 20;
  console.log(a); //20
}
test()
console.log(window.a) //10


//黄金守则第三条：当参数跟局部变量重名时，优先级是等同的。
var a = 10
function test(a) {
  console.log(a); //10
  var a = 20;
  console.log(a); //20
}
test(a)
console.log(window.a) //10


var a = 10
function test(a) {
  a += 3;
  console.log(a); //13
}
test(a)
console.log(window.a) //10


var a = [1, 2, 3]
function test(a) {
  a = [1, 2, 3, 4]
  console.log(a); //[1, 2, 3, 4]
}
test(a)
console.log(window.a) //[1, 2, 3]


var a = [1, 2, 3]
function test(a) {
  a.push(4)
  console.log(a); //[1, 2, 3, 4]
}
test(a)
console.log(window.a) //[1, 2, 3, 4]


var arr = [];
arr[0] = 0;
arr[1] = 1;
arr.foo = 'c'
console.log(arr.length) // 2
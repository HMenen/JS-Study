/**
 * https://juejin.cn/post/6844903728147857415
 * myCall, myApply
 */
Function.prototype.myCall = function() {
  const thisArg = arguments[0];
  const args = [].slice.call(arguments, 1);
  let __fn = '__' + new Date().getTime();
  let originFn = thisArg[args];
  const isHasOriginFun = thisArg.hasOwnProperty(__fn);
  thisArg[__fn] = this;
  const ret = thisArg[__fn](...args);
  delete thisArg[__fn];
  if (isHasOriginFun) {
    thisArg[__fn] = originFn;
  }
  return ret;
}

Function.prototype.myApply = function() {
  const thisArg = arguments[0];
  let args = arguments[1];
  let __fn = '__' + new Date().getTime();
  const originFn = thisArg[__fn];
  const isHasOriginFun = thisArg.hasOwnProperty(__fn);
  thisArg[__fn] = this;
  const ret = thisArg[__fn](...args);
  delete thisArg[__fn];
  if (isHasOriginFun) {
    thisArg[__fn] = originFn;
  }
  return ret;
}


var doSth = function (name, age){
  var type = Object.prototype.toString.call(this);
  console.log(typeof doSth);
  console.log(this === firstArg);
  console.log('type:', type);
  console.log('this:', this.name);
  console.log('args:', [name, age], arguments);
  return 'this--';
};

var name = 'window';

var student = {
  name: '若川',
  age: 18,
  doSth: 'doSth',
  __fn: 'doSth',
};
var firstArg = student;
var result = doSth.myApply(firstArg, [1, {name: 'Rowboat'}]);
// var result2 = doSth.myCall(firstArg, 1, {name: 'Rowboat'});
console.log('result:', result);
console.log('student.doSth:', student.doSth);
// console.log('result2:', result2);
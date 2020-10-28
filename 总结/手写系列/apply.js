/**
 * 
 * @param {*} context 
 * @param {*} args 
 */
Function.prototype.myApply = function (context, args) {
  let res; 
  context.func = this;
  if (args) {
    res = context.func(...args);
  } else {
    res = context.func();
  }
  delete context.func;
  return res;
}


let obj = {
  name: 'jack'
}
function test(arg1, arg2, arg3) {
  console.log(this.name)   // jack
  console.log(arg1, arg2, arg3);  // 1 2 3
}
test.myApply(obj, [1,2,3]);

function test2(arg1, arg2, arg3) {
  console.log('=====hahah=====')   // jack
}
test2.myApply(obj);
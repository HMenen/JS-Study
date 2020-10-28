/**
 * 注意：function(context, ...args) 中是 ...args
 * @param {*} context 
 * @param {*} args 
 */
Function.prototype.myCall = function(context, ...args) {
  context.func = this;
  let ret;
  ret = context.func(...args);
  delete context.func;
  return ret;
}



let obj = {
  name: 'jack'
}
function test(arg1, arg2, arg3) {
  console.log(this.name)   // jack
  console.log(arg1, arg2, arg3);  // 1 2 3
}
test.myCall(obj, 1, 2, 3);

function test2() {
  console.log('=====hahah=====')   // jack
}
test2.myCall(obj);
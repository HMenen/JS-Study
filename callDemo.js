/**
 * call方法的实现
 * 原理：为context添加一个属性fn，该属性为bar方法，这样bar即为context的一个属性；
 * 然后执行context.bar()的时候，bar函数中的this即为context的；最后删除context的fn
 */
Function.prototype.mycall = function(context) {
  let myContext = context || window;  //context为null时则myContext取window
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  myContext.fn = this;
  // myContext.fn();
  let result = eval('myContext.fn(' + args + ')')
  delete myContext.fn;
  return result;
}

const obj = {
  value: 1
}
function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
  return name;
}

const name = bar.mycall(obj, 'hahaha', 18);
console.log(name)
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
  console.log('name:' + name);
  console.log(age);
  return name;
}

// const name = bar.mycall(obj, 'hahaha', 18);
// console.log(name)

/**
 * apply的实现
 */
Function.prototype.myapply = function(context) {
  const myContext = context || window;
  let args = [];
  let result;
  myContext.fn = this;
  args = arguments[1];
  if (!Array.isArray(args)) {
    result = myContext.fn();
  } else {
    result = myContext.fn(...args);
  }
  delete myContext.fn;
  return result;
}

// const name = bar.myapply(obj, ['hahaha', 18]);
// console.log(name)

Function.prototype.mybind = function(contextThis) {
  const myContext = this;
  const args = [].slice.call(arguments, 1);
  // return function() {
  //   myContext.apply(contextThis, args.concat([].slice.call(arguments)))
  // }
  return (...rest) => {
    console.log(rest)
    myContext.apply(contextThis, args.concat([].slice.call(rest)))
  }
}

const b = bar.mybind(obj)
b('hahaha', 18);
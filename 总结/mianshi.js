function myBind (argFun, argThis) {
  const args = [].slice.call(arguments, 2); 
  return () => {
    argFun.apply(argThis, args.concat([].slice.call(arguments)))
  }
}

Function.prototype.myBind =  function (argThis) {
  const args = [].slice.call(arguments, 1);
  const argFun = this;
  return () => argFun.apply(argThis, args.concat(arguments))
}

// function A () {
//   console.log(this.name);
// } 
// const b = {name: 'hahaha'};
// const c = {name: 'xcxcxc'};

// // const test1 = myBind(A, b);
// // const test2 = myBind(test1, c);
// // test2();

// const B1 = A.myBind(c)
// B1()

function A() {
  console.log(this.age);
}

const B = A.myBind({ age: 1 });
B()
const C = B.myBind({ age: 2 });
const D = C.myBind({ age: 3}).bind({ age: 4 });
D();

/** 
 * bing 绑定仅第一次绑定的this有效
 * 
function A() {
  console.log(this.age);
}

const B = A.bind({ age: 1 });
const C = B.bind({ age: 2 });
const D = C.bind({ age: 3}).bind({ age: 4 });
D();
*/


CSS: 绘制一个 田


实现一个红路灯

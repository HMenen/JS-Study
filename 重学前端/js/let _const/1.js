//https://es6.ruanyifeng.com/#docs/let
// 如果使用let，声明的变量仅在块级作用域内有效，最后输出的是 6。

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
// a[6](); // 6
// 上面代码中，变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。

// 另外，for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。

for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc

for (let i = 0; i < 3; i++) {
  const i = 'abc';
  console.log(i);
}
// abc
// ES6中定义的时候绑定this的具体含义，应该继承的是父执行上下文里面的this，切忌是父执行上下文！！！
// 这样就很多箭头函数中的指向不明确就迎刃而解了。
// 注意：简单对象（非函数）是没有执行上下文的！
// https://zhuanlan.zhihu.com/p/26475137
var a1 = {
  a: 123,
  b: () => console.log('=======', this.a),
  c: function() {console.log('=======', this.a)}
 }

 a1.b();
 a1.c();
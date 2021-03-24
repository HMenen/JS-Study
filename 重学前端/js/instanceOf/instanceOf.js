//instanceof运算符用来判断一个构造函数的prototype属性所指向的对象是否存在另外一个要检测对象的原型链上
//https://juejin.cn/post/6844903613584654344
function myInstanceOf(left, right) {
  let leftProto = left.__proto__;
  while(leftProto) {
    if (leftProto === right.prototype) {
      return true;
    }
    leftProto = leftProto.__proto__;
  }
  return false;
}


var a = []
var f = function() {}
console.log('----', a instanceof f)
console.log('----', myInstanceOf(a, f), myInstanceOf(a, Array), myInstanceOf(a, Object))
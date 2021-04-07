/**
 * 标题：JS运算
 * 描述信息
   实现一个函数，输入是两个二进制数的字符串，输出两个数相加后的十进值结果。 eg. add('01', '10') = 3
   参考答案
   方案一：对parseInt比较熟的话 function add(num1, num2) { return parseInt(num1, 2) + parseInt(num2, 2) } 
   方案二：实现一个函数，将二进制数转化为十进制，再相加 function add(num1,num2){return Number('0b'+num1).toString(10)+Number('0b'+num2).toString(10)1} 
   方案三：直接二进制裸加
 */

function add1(num1, num2) {
  return +Number('0b' + num1).toString(10) + +Number('0b' + num2).toString(10)
}

function add2(num1, num2) {
  return parseInt(num1, 2) + parseInt(num2, 2);
}

console.log(add2('01', '10'))



function add(num1, num2) {
  return convert(num1) + convert(num2);
}
// 二进制转10进制
function convert(num) {
  var result = 0;
  for (var i = 0, len = num.length; i < len; i++) {
      result += num[i] * Math.pow(2, len - i -1)
  }
  return result;
}
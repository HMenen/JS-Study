/**
 * 标题：JavaScript 连续赋值操作
 * 描述信息
 * 本题目考察 JavaScript 在进行连续赋值操作时： 1. 从左至右计算引用； 2. 从右至左进行赋值
*/
var a = { k1: 'v1' }; var b = a;

a.k3 = a = { k2: 'v2' };

console.log(a); console.log(b);

// 参考答案
// a => {k2: "v2"} b => {k1: "v1", k3: {k2: "v2"}}


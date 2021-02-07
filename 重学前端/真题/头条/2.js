//不借助变量，交换两个数

/**
 * 不借助变量，交换两个数
 */

function swap1(a, b) {
  a = a + b;
  b = a - b;  // b = a + b - b = a
  a = a - b;  // a = a - (a - b) = b
  console.log('a：', a, 'b：', b)
}

/**
 * ^ 按位异或 若参加运算的两个二进制位值相同则为0，否则为1
 * 此算法能够实现是由异或运算的特点决定的，通过异或运算能够使数据中的某些位翻转，其他位不变。
 * 这就意味着任意一个数与任意一个给定的值连续异或两次，值不变.
 * @param {*} a 
 * @param {*} b 
 */
function swap2(a, b) {
  a =  a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log('a：', a, 'b：', b)
}


//ES6的解构
function swap3(a, b) {
  [a, b] = [b , a]
  console.log('a：', a, 'b：', b)
}

console.log(swap3(2, 6))
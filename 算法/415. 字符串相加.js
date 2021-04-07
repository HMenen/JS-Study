/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 提示：
  num1 和num2 的长度都小于 5100
  num1 和num2 都只包含数字 0-9
  num1 和num2 都不包含任何前导零
  你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let result = [];
  let carry = 0;
  while(i >= 0 || j >= 0 || carry !== 0) {
    let n1 = num1[i] || 0;
    let n2 = num2[j] || 0;
    let sum = +n1 + +n2 + +carry;
    result.unshift(sum % 10)
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  return result.join('');
};
console.log('-------', addStrings("1", "9"))
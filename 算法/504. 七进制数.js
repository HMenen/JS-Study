// 给定一个整数，将其转化为7进制，并以字符串形式输出。
// 示例 1:
// 输入: 100
// 输出: "202"
// 示例 2:
// 输入: -7
// 输出: "-10"
// 注意: 输入范围是 [-1e7, 1e7] 。

/**
 * @param {number} num
 * @return {string}
 */
 var convertToBase7 = function(num) {
  let result = [];
  let numSource = num;
  let isMinus = false;
  if (num === 0) return '0';
  if (num < 0) {
    numSource = Math.abs(num);
    isMinus = true;
  }
  while(numSource) {
    result.unshift(Math.floor(numSource % 7));
    numSource = Math.floor(numSource / 7);
  }
  return isMinus? -result.join('') + '': result.join('')
};
// console.log('------', convertToBase7(100))
console.log('------', convertToBase7(-7))

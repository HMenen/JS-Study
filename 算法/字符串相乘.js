/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 *
 * https://leetcode-cn.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (42.07%)
 * Likes:    541
 * Dislikes: 0
 * Total Accepted:    119.5K
 * Total Submissions: 267.8K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 
 * 示例 1:
 * 
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 * 
 * 示例 2:
 * 
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 * 
 * 说明：
 * 
 * 
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let num1Len = num1.length;
  let num2Len = num2.length;
  const arr = new Array(num1Len + num2Len).fill(0);
  for (let i = num1Len - 1; i >= 0; i--) {
    for (let j = num2Len - 1; j >= 0; j--) {
      let mul = (+num1[i]) * (+num2[j]);
      let p1 = i + j;
      let p2 = i + j + 1;
      let sum = arr[p2] + mul;
      arr[p2] = sum % 10;
      arr[p1] = arr[p1] + Math.floor(sum / 10);
    }
  }
  let i = 0;
  while(i < arr.length && arr[i] == 0) {
    i++
  }
  return i === arr.length? '0': arr.splice(i).join('');
};

console.log(multiply('123', '456'))
// @lc code=end


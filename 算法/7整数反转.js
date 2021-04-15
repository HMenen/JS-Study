/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (34.00%)
 * Likes:    2686
 * Dislikes: 0
 * Total Accepted:    646K
 * Total Submissions: 1.8M
 * Testcase Example:  '123'
 *
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 123
 * 输出：321
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = -123
 * 输出：-321
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 120
 * 输出：21
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：x = 0
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0;
  let temp = Math.abs(x);
  let num = 0;
  console.log(x, Math.pow(2, 31))
  if (x > Math.pow(2, 31) || x < Math.pow(-2, 31)) {
    return 0
  }
  while(temp) {
    num = temp % 10;
    temp = Math.floor(temp / 10);
    result = result * 10 + num;
  }
  return x > 0? result: -result;
};
// console.log(reverse(123))
// console.log(reverse(-900000))
// console.log(reverse(112345))
// console.log(reverse(-123))
// console.log(reverse(1534236469))
// console.log(reverse(-2147483412))
console.log(reverse(1463847412))
// @lc code=end


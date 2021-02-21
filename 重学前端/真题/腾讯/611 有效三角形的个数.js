/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 *
 * https://leetcode-cn.com/problems/valid-triangle-number/description/
 *
 * algorithms
 * Medium (48.44%)
 * Likes:    152
 * Dislikes: 0
 * Total Accepted:    11.1K
 * Total Submissions: 22.5K
 * Testcase Example:  '[2,2,3,4]'
 *
 * 给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [2,2,3,4]
 * 输出: 3
 * 解释:
 * 有效的组合是: 
 * 2,3,4 (使用第一个 2)
 * 2,3,4 (使用第二个 2)
 * 2,2,3
 * 
 * 
 * 注意:
 * 
 * 
 * 数组长度不超过1000。
 * 数组里整数的范围为 [0, 1000]。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  let result = 0;
  nums = nums.sort((l, r) => l - r);
  for (let i = nums.length - 1; i >=2; i--) {
    let left = 0, right = i - 1;
    while(left < right) {

      if (nums[left] + nums[right] > nums[i]) {
        result += (right - left);
        right--;
      } else {
        left++;
      }
    }
  }
  return result
};

console.log('------', triangleNumber([24,3,82,22,35,84,19]))
// @lc code=end

function triangleNumber2(arr) {
  let result = 0;
  let nums = arr.sort((a, b) => a - b);
  for (let i = nums.length - 1; i >= 2; i--) {
    let l = 0;
    let r = i - 1;
    while(l < r) {
      if (nums[l] + nums[r] > nums[i]) {
        result += (r - l);
        r--;
      } else {
        l++;
      }
    }
  }
  return result;
}
console.log('------', triangleNumber2([24,3,82,22,35,84,19]))

/*
 * @lc app=leetcode.cn id=659 lang=javascript
 *
 * [659] 分割数组为连续子序列
 *
 * https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/description/
 *
 * algorithms
 * Medium (40.50%)
 * Likes:    272
 * Dislikes: 0
 * Total Accepted:    24.8K
 * Total Submissions: 45.7K
 * Testcase Example:  '[1,2,3,3,4,5]'
 *
 * 给你一个按升序排序的整数数组 num（可能包含重复数字），请你将它们分割成一个或多个长度至少为 3 的子序列，其中每个子序列都由连续整数组成。
 * 
 * 如果可以完成上述分割，则返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: [1,2,3,3,4,5]
 * 输出: True
 * 解释:
 * 你可以分割出这样两个连续子序列 : 
 * 1, 2, 3
 * 3, 4, 5
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入: [1,2,3,3,4,4,5,5]
 * 输出: True
 * 解释:
 * 你可以分割出这样两个连续子序列 : 
 * 1, 2, 3, 4, 5
 * 3, 4, 5
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入: [1,2,3,4,4,5]
 * 输出: False
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**[1,2,3,3,4,4,5,5]
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  let map = {};
  let tail = {};
  for (let i = 0; i < nums.length; i++) {
    let char = nums[i];
    map[char] ? map[char]++ : map[char] = 1;
  }
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map[num] === 0) continue;
    if (map[num] > 0 && tail[num - 1]) {
      tail[num - 1]--;
      map[num]--;
      tail[num]? tail[num]++: tail[num] = 1;
    } else if (map[num] > 0 && map[num + 1] > 0 && map[num + 2] > 0) {
      map[num]--;
      map[num + 1]--;
      map[num + 2]--;
      tail[num + 2]? tail[num + 2]++: tail[num + 2] = 1;
    } else {
      return false
    }
  }
  return true;
};

console.log('=====', isPossible([1,2,3,3,4,4,5,5]))
// @lc code=end


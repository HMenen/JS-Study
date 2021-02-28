/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (74.71%)
 * Likes:    1042
 * Dislikes: 0
 * Total Accepted:    230.9K
 * Total Submissions: 298.6K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let used = [], res = [], track = [];
  backtrack(nums.sort(), used, res, track);
  return res;
};

function backtrack(nums, used, res, track) {
  if (track.length === nums.length) {
    res.push([...track]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i] || (i > 0 && nums[i] === nums[i - 1] && used[i - 1] == false)) {
      continue;
    }
    track.push(nums[i]);
    used[i] = true;
    backtrack(nums, used, res, track);
    track.pop();
    used[i] = false;
  }
}
// @lc code=end

// console.log(permuteUnique([1, 1, 2]))
console.log(permuteUnique([1, 2, 3]))
// console.log(permuteUnique([1, 2, 1]))
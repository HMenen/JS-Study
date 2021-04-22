/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (26.42%)
 * Likes:    3266
 * Dislikes: 0
 * Total Accepted:    490.2K
 * Total Submissions: 1.5M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^5 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const arr = [...nums].sort((a, b) => a - b);
  const result = [];
  console.log(arr)
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) break;
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let l = i + 1;
    let r = arr.length - 1;
    while(l < r) {
      const sum = arr[i] + arr[l] + arr[r];
      if (sum === 0) {
        result.push([arr[i], arr[l], arr[r]]);
        while (l < r && arr[l] === arr[l + 1]) l++;
        while (l < r && arr[r] === arr[r - 1]) r--;
        l++;
        r--;
      }
      else if (sum > 0) r--;
      else if (sum < 0) l++;
    }
  }
  return result;
};
// @lc code=end

// var nums = [-1, 0, 1, 2, -1, -4]   //[-1, -1, -4, 0, 1, 2]
// 输出：[[-1,-1,2],[-1,0,1]]
// var nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]
var nums = [-2,0,3,-1,4,0,3,4,1,1,1,-3,-5,4,0];
console.log('-----', threeSum(nums));


/* 给定一个含有 n 个正整数的数组和一个正整数 target 。
* 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
*
* 示例 1：
* 输入：target = 7, nums = [2,3,1,2,4,3]
* 输出：2
* 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
*
* 示例 2：
* 输入：target = 4, nums = [1,4,4]
* 输出：1
* 示例 3：
*
* 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
* 输出：0
*/

var minSubArrayLen = function(s, nums) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while(sum >= s && left <= i) {
      minLen = Math.min(minLen, i - left + 1);
      sum -= nums[left];
      left++
    }
  }
  return minLen === Infinity? 0: minLen;
}
// 11
// [1,2,3,4,5]
console.log('------', minSubArrayLen(3, [1,2,3,4,5]))
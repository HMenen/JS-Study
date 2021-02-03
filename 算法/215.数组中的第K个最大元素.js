/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  return dp(nums, k, 0, nums.length - 1);
};

function dp(arr, k, start, end) {
  let index = findK(arr, start, end);
  if (index === end - k + 1) {
    return arr[index]
  };
  if (index > end - k + 1) {
    return dp(arr, index - (end - k + 1), start, index - 1);
  } else {
    return dp(arr, k, index + 1, end);
  }
}

function findK(arr, start, end) {
  let left = start;
  let right = end;
  const temp = arr[start];
  while(left < right) {
    while(arr[right] > temp && left < right) {
      right--;
    }
    arr[left] = arr[right];
    while(arr[left] <= temp && left < right) {
      left++;
    }
    arr[right] = arr[left];
  }
  arr[left] = temp;
  return left;
}

console.log('------', findKthLargest([8, 3,2,1,5,6,4], 2))



// @lc code=end


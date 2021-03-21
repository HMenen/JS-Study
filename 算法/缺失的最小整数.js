/**[1,3,4,-1,3,10]   [5,6,7,8,9]   [3,4,6,1,9] 
 * 查找最小缺失正整数
 * @param {*} arr 
 * 数组中数组可以有重复，且无序
 */

function findInt(arr) {
  let target = 0;

}
function findInt1(arr) {
  const map = {};
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
    if (arr[i] > 0 && !map[arr[i]]) {
      map[arr[i]] = true
    }
  }

  for(let i = 0; i < maxNum; i++) {
    if (!map[i + 1]) {
      return i + 1;
    }
  }
}
// var arr = [1,3,4,-1,3,10]; //2
// var arr = [5,6,7,8,9];  // 1
var arr = [3,4,6,1,9];  //2
console.log(findInt(arr))



/**
 *  一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
 * 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 * https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
 * @param {number[]} nums
 * @return {number}
 *
 * 
 * */
var missingNumber = function(nums) {
  if (nums.length === 0 || !nums) return 1;
  let left = 0, right = nums.length;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === mid) {
      left = mid + 1;
    } else {
      right = mid - 1
    }
  }
  return left
};

console.log('--missingNumber-----', missingNumber([0,2,3]))
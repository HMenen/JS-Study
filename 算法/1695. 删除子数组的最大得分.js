// 给你一个正整数数组 nums ，请你从中删除一个含有 若干不同元素 的子数组。删除子数组的 得分 就是子数组各元素之 和 。
// 返回 只删除一个 子数组可获得的 最大得分 。
// 如果数组 b 是数组 a 的一个连续子序列，即如果它等于 a[l],a[l+1],...,a[r] ，那么它就是 a 的一个子数组。

// 示例 1：
// 输入：nums = [4,2,4,5,6]
// 输出：17
// 解释：最优子数组是 [2,4,5,6]
// 示例 2：

// 输入：nums = [5,2,1,2,5,2,1,2,5]
// 输出：8
// 解释：最优子数组是 [5,2,1] 或 [1,2,5]


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
  let sum = -Infinity;
  let map = [];
  for (let i = 0; i < nums.length; i++) {
    let item = new Array(nums.length-1).fill(-1);
    map.push(item)
  }
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (!map[i][j]) {
        map[i][j] = dp111(i, j, nums, map);
      }
      if (nums[j] )
      sum = Math.max(sum, dp111(i, j,nums, map));
    }
  }
  console.log('-=-=-', map)
  return sum;
};

function dp111(index, j, arr, map) {
  let sum = 0;
  let list = [];
  for (let i = index; i <= j; i++) {
    if (!list.includes(arr[i])) {
      sum += arr[i];
      list.push(arr[i]);
    } else {
      return sum;
    }
  }
  return sum;
}
console.log('-----', maximumUniqueSubarray([4, 2, 4, 5, 6]))
// function dp(index, arr, map) {
//   let sum = arr[index];
//   let list = [arr[index]];
//   let lastIndex;
//   for (let i = index + 1; i < arr.length; i++) {
//     lastIndex = i
//     if (map[index][i]) return map[index][i];
//     if (!list.includes(arr[i])) {
//       sum += arr[i];
//       list.push(arr[i]);
//     } else {
//       return sum;
//     }
//   }
//   return sum;
// }


// console.log('-----', maximumUniqueSubarray([187,470,25,436,538,809,441,167,477,110,275,133,666,345,411,459,490,266,987,965,429,166,809,340,467,318,125,165,809,610,31,585,970,306,42,189,169,743,78,810,70,382,367,490,787,670,476,278,775,673,299,19,893,817,971,458,409,886,434]))



// var maximumUniqueSubarray1 = function(nums) {
//   let sum = -Infinity;
//   let list = [];
//   let add = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (!list.includes(nums[i])) {
//       console.log('--add---', add, nums[i])
//       list.push(nums[i]);
//       add += nums[i];
//     } else {
//       sum = Math.max(sum, add);
//       add = 0;
//       list = [];
//     }
//   }
//   return sum;
// };
// // console.log('-----', maximumUniqueSubarray1([4,2,4,5,6]))


var maximumUniqueSubarray3 = function(nums) {
  let sum = -Infinity;
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let lastIndex;
    if (map[i - 1]) {
      lastIndex = map[i - 1].lastIndex;
    }
    if (!map[i]) {
      if (i < lastIndex) {
        continue;
      }
      map[i] = dp(i, nums);
      lastIndex = map[i].lastIndex;
    }
    sum = Math.max(sum, map[i].sum);
  }
  return sum;
};

function dp3(index, arr) {
  let sum = arr[index];
  let list = [arr[index]];
  let lastIndex;
  for (let i = index + 1; i < arr.length; i++) {
    lastIndex = i
    if (!list.includes(arr[i])) {
      sum += arr[i];
      list.push(arr[i]);
    } else {
      return {
        sum,
        lastIndex
      };
    }
  }
  return {
    sum,
    lastIndex
  };
}

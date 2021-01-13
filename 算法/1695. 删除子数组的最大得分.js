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

var maximumUniqueSubarray = function(nums) {
  let left = 0, right = 0;
  let map = {};
  let maxSum = -Infinity;
  while(right < nums.length) {
    let c = nums[right];
    right++;
    if (map[c]) {
      map[c]++;
    } else {
      map[c] = 1;
    }
    while(map[c] > 1) {
      let d = nums[left];
      map[d]--;
      left++;
    }
    let newNums = nums.slice(left, right);
    let sum = newNums.reduce((prev, current) => prev + current, 0);
    console.log('----newNums-', newNums, sum)
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

console.log('-1-----', maximumUniqueSubarray([4,2,4,5,6]))



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

// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

var twoSum = function(nums, target) {
  const ret  = [];
  for (let i = 0; i < nums.length; i++) {
   const left = nums[i];
   const right = target - left;
   let rightIndex = nums.slice(i + 1).indexOf(right);
   if(rightIndex > -1) {
     ret.push(i, rightIndex + i + 1);
     break;
   }
  }
  return ret;
};

console.log(twoSum([3,2,4], 6))
var twoSum = function(nums, target) {
  const ret  = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let rightNum = target - num;
    const rightArr = nums.slice(i + 1, nums.length);
    const rightIndex = rightArr.indexOf(rightNum);
    if (rightIndex > -1) {
      ret.push(i);
      ret.push(rightIndex + i + 1);
      return ret;
    }
  }
  return ret;
};

// const nums  = [3, 2, 4];
// const target = 6;
// console.log(twoSum(nums, target))

var isValid = function(s) {
  if (s.length === 0) return true;
  if (s.length % 2 !== 0) return false
  const khMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const khStack = [];
  for (let i = 0; i < s.length; i++) {
    let endNum = khStack[khStack.length - 1];
    if (khStack.length !== 0 && khMap[endNum] === s[i]) {
      khStack.pop();
    } else {
      khStack.push(s[i]);
    }
  }
  if (khStack.length === 0) {
    return true;
  } else {
    return false
  }
};

const s = "";
console.log(isValid(s));
// 48题目：字符串
// 描述：计算字符串中，出现不重复的连续子串的最大长度
// 输入：'adfafwefffdasdcx'

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0, right = 0;
  let map = {};
  let maxLen = 0;
  while(right < s.length) {
    let c = s[right];
    right++;
    if (map[c]) {
      map[c]++;
    } else {
      map[c] = 1;
    }
    while(map[c] > 1) {
      let d = s[left];
      map[d]--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left)
  }
  return maxLen
};

console.log(lengthOfLongestSubstring('tmmzuxt'))
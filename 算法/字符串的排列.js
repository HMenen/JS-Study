/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 *
 * https://leetcode-cn.com/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (34.92%)
 * Likes:    211
 * Dislikes: 0
 * Total Accepted:    49.8K
 * Total Submissions: 131K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 * 
 * 换句话说，第一个字符串的排列之一是第二个字符串的子串。
 * 
 * 示例1:
 * 
 * 
 * 输入: s1 = "ab" s2 = "eidbaooo"
 * 输出: True
 * 解释: s2 包含 s1 的排列之一 ("ba").
 * 
 * 
 * 
 * 
 * 示例2:
 * 
 * 
 * 输入: s1= "ab" s2 = "eidboaoo"
 * 输出: False
 * 
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 输入的字符串只包含小写字母
 * 两个字符串的长度都在 [1, 10,000] 之间
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let left = 0;
  let right = 0;
  let needs = {};
  let window = {};
  let valid = 0;
  for (let i = 0; i < s1.length; i++) {
    const c = s1[i];
    needs[c] ? needs[c]++ : needs[c] = 1;
  }
  while(right < s2.length) {
    const c = s2[right];
    right++;
    if (needs[c]) {
      window[c]? window[c]++: window[c] = 1;
      if (window[c] === needs[c]) {
        valid++;
      } 
    }
    while(right - left >= s1.length) {
      if (valid === Object.keys(needs).length) return true;
      const leftChar = s2[left];
      left++;
      if (needs[leftChar]) {
        if (window[leftChar] === needs[leftChar]) {
          valid--;
        }
        window[leftChar]--;
      }
    }
  }
  return false;
};
// @lc code=end
// "ab"
// "eidbaooo"
// "ab"
// "eidboaoo"
// "hello"
// "ooolleoooleh"
// "adc"
// "dcda"
// "abc"
// "ccccbbbbaaaa"
console.log('=========', checkInclusion("abc", "ccccbbbbaaaa"))
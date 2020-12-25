/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode-cn.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (35.66%)
 * Likes:    870
 * Dislikes: 0
 * Total Accepted:    95.4K
 * Total Submissions: 238.6K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 
 * 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 和 t 由英文字母组成
 * 
 * 
 * 
 * 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let left = 0;
  let right = 0;
  let valid = 0;
  let window = {};
  const needs = {};
  // 记录最小覆盖子串的起始索引及长度
  let start = 0, len = Infinity;
  for (let i = 0; i < t.length; i++ ) {
    const c = t[i];
    if (!needs[c]) {
      needs[c] = 1;
    } else {
      needs[c]++;
    }
  }
  while(right < s.length) {
    const c = s[right];
    right++;
    if (needs[c]) {
      !window[c] ? window[c] = 1: window[c]++;
      if (needs[c] === window[c]) {
        valid++;
      }
    }
    while (valid === Object.keys(needs).length) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      const leftChar = s[left];
      left++;
      if (needs[leftChar]) {
        if (window[leftChar] === needs[leftChar]) {
          valid--
        }
        window[leftChar]--;
      }
    }
  }
  return len == Infinity? '': s.slice(start, start + len);
};
// @lc code=end

console.log('--------', minWindow("cabwefgewcwaefgcf", "cae"))
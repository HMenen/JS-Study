// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let str = '';
  for (let i = 0; i < s.length; i++) {
    let s1 = getPalindrome(s, i, i);
    let s2 = getPalindrome(s, i, i + 1);
    str = str.length > s1.length? str: s1;
    str = str.length > s2.length? str: s2;
  }
  return str
};

function getPalindrome(s, l, r) {
  while(l >=0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.substr(l + 1, r - l -1);
}

console.log(longestPalindrome('cbbd'))
// @lc code=end
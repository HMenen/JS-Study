/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 *
 * https://leetcode-cn.com/problems/longest-common-subsequence/description/
 *
 * algorithms
 * Medium (58.96%)
 * Likes:    255
 * Dislikes: 0
 * Total Accepted:    48.9K
 * Total Submissions: 81K
 * Testcase Example:  '"abcde"\n"ace"'
 *
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。
 * 
 * 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde"
 * 的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。
 * 
 * 若这两个字符串没有公共子序列，则返回 0。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入：text1 = "abcde", text2 = "ace" 
 * 输出：3  
 * 解释：最长公共子序列是 "ace"，它的长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入：text1 = "abc", text2 = "abc"
 * 输出：3
 * 解释：最长公共子序列是 "abc"，它的长度为 3。
 * 
 * 
 * 示例 3:
 * 
 * 输入：text1 = "abc", text2 = "def"
 * 输出：0
 * 解释：两个字符串没有公共子序列，返回 0。
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= text1.length <= 1000
 * 1 <= text2.length <= 1000
 * 输入的字符串只含有小写英文字符。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let i = 0, j = 0;
  let memo = [];
  for (let i = 0; i < text1.length + 1; i++) {
    const itemArr = new Array(text2.length + 1).fill(0);
    memo.push(itemArr);
  }
  return dp(text1, i, text2, j, memo);
};

function dp(text1, i, text2, j, memo){
  if (i >= text1.length || j >= text2.length) {
    return 0;
  }
  if (memo[i][j]) {
    return memo[i][j];
  }
  if (text1[i] === text2[j]) {
    memo[i][j] =  1 + dp(text1, i + 1, text2, j + 1, memo)
  } else {
    memo[i][j] =  Math.max(dp(text1, i + 1, text2, j, memo), dp(text1, i, text2, j + 1, memo))
  }
  return memo[i][j];
}
// @lc code=end
// console.log('=============', longestCommonSubsequence('ayb', 'ab'));
// "mhunuzqrkzsnidwbun"
// "szulspmhwpazoxijwbq"
console.log('=============', longestCommonSubsequence('mhunuzqrkzsnidwbun', 'szulspmhwpazoxijwbq'));

function longestCommonSubsequence1(text1, text2) {
  const memo = [];
  for(let i = 0; i < text1.length; i++) {
    memo.push(new Array(text2.length).fill(0))
  }
  return dp1(text1, text2, 0, 0, memo);
}

function dp1(text1, text2, i, j, memo) {
  if(i > text1.length - 1 || j > text2.length - 1) {
    return 0;
  }
  if(memo[i][j]){
    return memo[i][j]
  }
  if(text1[i] === text2[j]) {
    memo[i][j] = 1 + dp1(text1, text2, i + 1, j + 1, memo)
  } else {
    memo[i][j] = Math.max(dp1(text1, text2, i + 1, j, memo), dp1(text1, text2, i, j + 1, memo))
  }
  return memo[i][j];
}
console.log('=============', longestCommonSubsequence1('mhunuzqrkzsnidwbun', 'szulspmhwpazoxijwbq'));


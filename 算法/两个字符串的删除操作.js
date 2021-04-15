 /*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 *
 * https://leetcode-cn.com/problems/delete-operation-for-two-strings/description/
 *
 * algorithms
 * Medium (48.75%)
 * Likes:    165
 * Dislikes: 0
 * Total Accepted:    12.6K
 * Total Submissions: 24.5K
 * Testcase Example:  '"sea"\n"eat"'
 *
 * 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入: "sea", "eat"
 * 输出: 2
 * 解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定单词的长度不超过500。
 * 给定单词中的字符只含有小写字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let lcs = longestCommonSubsequence(word1, word2);
  let n = word1.length, m = word2.length;
  return n - lcs + m - lcs;
};

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


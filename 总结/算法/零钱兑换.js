/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (38.88%)
 * Likes:    697
 * Dislikes: 0
 * Total Accepted:    103K
 * Total Submissions: 255.5K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 
 * 
 * 
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 * 
 */

// @lc code=start
/**
 * @param {number[]} coins [1, 2, 5]    [2]
 * @param {number} amount 2    3
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 0;
  for (let i = 1; i < amount + 1; i++) {
    dp[i] = Infinity;
    for (let c = 0; c < coins.length; c++) {
      if (i - coins[c] < 0) continue;
      dp[i] = Math.min(dp[i], (1 + dp[i - coins[c]]));
    }
  }
  if (dp[amount] === Infinity) {
    return -1;
  } else {
    return dp[amount]
  }
};
// @lc code=end

console.log(coinChange([2], 3))


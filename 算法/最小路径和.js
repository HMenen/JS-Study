/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (65.32%)
 * Likes:    742
 * Dislikes: 0
 * Total Accepted:    167.8K
 * Total Submissions: 247.1K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 * 输出：7
 * 解释：因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[1,2,3],[4,5,6]]
 * 输出：12
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 * col：行,row：列
 */
var minPathSum = function(grid) {
  let col = grid.length - 1;
  let row = grid[0].length - 1;
  let memo = [];
  for (let i = 0; i < col + 1; i++) {
    let item = new Array(row + 1).fill(Infinity)
    memo.push(item);
  }
  // console.log('======', memo)
  return dp(grid, col, row, memo);
};

function dp(grid, col, row, memo) {
  // console.log('-------', col, row, memo);
  if (col === 0 && row === 0) {
    return grid[0][0];
  }
  if (col < 0 || row < 0) {
    return Infinity;
  }
  if (memo[col][row] !== Infinity) {
    return memo[col][row]
  }
  memo[col][row] = Math.min(dp(grid, col - 1, row, memo), dp(grid, col, row - 1, memo)) + grid[col][row];
  return memo[col][row]
}

// @lc code=end
// console.log('========', minPathSum([[1,3,1],[1,5,1],[4,2,1]])) //7
// console.log('========', minPathSum([[1,2,3],[4,5,6]])) //12
console.log('========', minPathSum([[3,8,6,0,5,9,9,6,3,4,0,5,7,3,9,3],[0,9,2,5,5,4,9,1,4,6,9,5,6,7,3,2],[8,2,2,3,3,3,1,6,9,1,1,6,6,2,1,9],[1,3,6,9,9,5,0,3,4,9,1,0,9,6,2,7],[8,6,2,2,1,3,0,0,7,2,7,5,4,8,4,8],[4,1,9,5,8,9,9,2,0,2,5,1,8,7,0,9],[6,2,1,7,8,1,8,5,5,7,0,2,5,7,2,1],[8,1,7,6,2,8,1,2,2,6,4,0,5,4,1,3],[9,2,1,7,6,1,4,3,8,6,5,5,3,9,7,3],[0,6,0,2,4,3,7,6,1,3,8,6,9,0,0,8],[4,3,7,2,4,3,6,4,0,3,9,5,3,6,9,3],[2,1,8,8,4,5,6,5,8,7,3,7,7,5,8,3],[0,7,6,6,1,2,0,3,5,0,8,0,8,7,4,3],[0,4,3,4,9,0,1,9,7,7,8,6,4,6,9,5],[6,5,1,9,9,2,2,7,4,2,7,2,2,3,7,2],[7,1,9,6,1,2,7,0,9,6,6,4,4,5,1,0],[3,4,9,2,8,3,1,2,6,9,7,0,2,4,2,0],[5,1,8,8,4,6,8,5,2,4,1,6,2,2,9,7]])) //12
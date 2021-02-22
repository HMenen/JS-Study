/**
 * * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 * 输出：7
 * 解释：因为路径 1→3→1→1→1 的总和最小。
 * 
 * dp[i][j]
 * min(dp[i-1][j], dp[i][j-1])
 */


function minPathSum(grid) {
  let map = [];
  for (let i = 0; i < grid.length; i++) {
    let item = [];
    for (let j = 0; j < grid[0].length; j++) {
      item.push(Infinity);
    }
    map.push(item);
  }
  return dp(grid.length - 1, grid[0].length - 1, map, grid);
}

function dp(i, j, map, grid) {
  if (i === 0 && j === 0) {
    return grid[i][j];
  }
  if (i < 0 || j < 0) {
    return Infinity;
  }
  if (map[i][j] !== Infinity) {
    return map[i][j];
  }
  map[i][j] = grid[i][j] + Math.min(dp(i - 1, j, map, grid), dp(i, j - 1, map, grid));
  return map[i][j];
}


console.log('========', minPathSum([[1,3,1],[1,5,1],[4,2,1]])) //7
console.log('========', minPathSum([[1,2,3],[4,5,6]])) //12
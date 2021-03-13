/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 *
 * https://leetcode-cn.com/problems/word-search-ii/description/
 *
 * algorithms
 * Hard (40.02%)
 * Likes:    348
 * Dislikes: 0
 * Total Accepted:    31K
 * Total Submissions: 68K
 * Testcase Example:  '[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]\n["oath","pea","eat","rain"]'
 *
 * 给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words，找出所有同时在二维网格和字典中出现的单词。
 * 
 * 单词必须按照字母顺序，通过 相邻的单元格
 * 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board =
 * [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
 * words = ["oath","pea","eat","rain"]
 * 输出：["eat","oath"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：board = [["a","b"],["c","d"]], words = ["abcb"]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == board.length
 * n == board[i].length
 * 1 
 * board[i][j] 是一个小写英文字母
 * 1 
 * 1 
 * words[i] 由小写英文字母组成
 * words 中的所有字符串互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let map = {}, vaildWords = [], used = [];
  words.forEach(word => {
    !map[word[0]]
      ? map[word[0]] = [ word ]
      : !map[word[0]].includes(word) ? map[word[0]].push(word) : ''
  });
  for (let i = 0; i < board.length; i++) {
    used.push(new Array(board[0].length).fill(false));
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (map[board[i][j]]) {
        let str = map[board[i][j]], ret = [];
        let track = [board[i][j]];
        for (let n = 0; n < map[board[i][j]].length; n ++) {
          let used = {};
          used[`${i}-${j}`] = true;
          dp(i, j, board, track, str[n], ret, used);
        }
        if (ret.length > 0) {
          for (let i = 0; i < ret.length; i++) {
            if (!vaildWords.includes(ret[i])) {
              vaildWords.push(ret[i]);
            }
          }
        }
      }
    }
  }
  return vaildWords;
};

function dp(col, row, board, track, str, ret, used) {
  if (track.length === str.length) {
    ret.push(track.join(''));
    return;
  }
  if (col >=0 && track[track.length - 1] === str[track.length - 1]) {
    if (row >= 1 && board[col][row - 1] === str[track.length] && !used[`${col}-${row - 1}`]) {
      track.push(board[col][row - 1]);
      used[`${col}-${row - 1}`] = true;
      dp(col, row - 1, board, track, str, ret, used);
      track.pop();
    } 
    if (row < board[0].length - 1 && board[col][row + 1] === str[track.length] && !used[`${col}-${row + 1}`]) {
      track.push(board[col][row + 1]);
      used[`${col}-${row + 1}`] = true;
      dp(col, row + 1, board, track, str, ret, used);
      track.pop();
    } 
    if (col >= 1 && board[col - 1][row] === str[track.length] && !used[`${col - 1}-${row}`]) {
      track.push(board[col - 1][row]);
      used[`${col - 1}-${row}`] = true;
      dp(col - 1, row, board, track, str, ret, used);
      track.pop();
    } 
    if (col < board.length - 1 && board[col + 1][row] === str[track.length] && !used[`${col + 1}-${row}`]) {
      track.push(board[col + 1][row]);
      used[`${col + 1}-${row}`] = true;
      dp(col + 1, row, board, track, str, ret, used);
      track.pop();
    } 
    else {
      return;
    }
  }
}

// var board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
// var words = ["oath","pea","eat","rain"]
// var board = [["a","b"],["c","d"]];
// var words = ["abcb"]
var board = [["o","a","b","n"],["o","t","a","e"],["a","h","k","r"],["a","f","l","v"]];
var words = ["oa","oaa"]     //["oa","oaa"]
// var board = [["a","a"]]
// var words = ["aaa"]
console.log(findWords(board, words))
// @lc code=end


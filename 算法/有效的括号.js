/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const MAP ={
  '(': ')',
  '[': ']',
  '{': '}'
}

var isValid = function(s) {
  let list = [];
  for (let i = 0; i < s.length; i++) {
    let len = list.length;
    let tailStr = list[len - 1];
    if (s[i] !== MAP[tailStr]) {
      list.push(s[i])
    } else {
      list.pop();
    }
  }
  return list.length === 0
} 

console.log(isValid(''));


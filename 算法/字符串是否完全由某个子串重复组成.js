// 题目描述
// 对于一个非空字符串，判断其是否可由一个子字符串重复多次组成。字符串只包含小写字母且长度不超过10000。
// 样例1
// 输入： “abab”
// 输出： True
// 样例解释： 输入可由”ab”重复两次组成
// 样例 2
// 输入： “aba”
// 输出： False
// 样例 3
// 输入： “abcabcabcabc”
// 输出： True
// 样例解释：输入可由”abc”重复四次组成

function checkString(str) {
  let flag = true;
  let baseMap = {};
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (flag) {
      if (baseMap[c] && str[i - 1] !== str[i]) {
        flag = false;
      } else if (!baseMap[c]) {
        baseMap[c] = 1
      }
    } else if (!baseMap[c]) {
      return false;
    }
  }
  return true
}

console.log(checkString('aabaaab'))


new Promise((resolve, reject) => {
  reject(1)
}).then(() => {}, error => {
  console.log('--1---', error)
}).catch(err => console.log('--2---', err))
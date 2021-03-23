// s = "Aibee Apple"
// 第一个，只出现一次的字符，返回字符索引。
// int foo(string str)

function foo(str) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (map[c] && map[c] === ' ') continue;
    if (!map[c] && map[c]!==0) {
      map[c] = i;
    } else {
      map[c] = -1;
    }
  }
  const keys = Object.keys(map);
  let index = Infinity;
  for (let j = 0; j < keys.length; j++) {
    if (map[keys[j]] !== -1) {
      if (index > map[keys[j]]) {
        index = map[keys[j]]
      }
    }
  }
  return index;
}
var s = "Aibee Apple";
var s1 = "aab3";
var s2 = "aabcb";
console.log('-------', foo(s2));
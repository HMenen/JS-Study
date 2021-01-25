/**
 * 消除字符串中所有的y和连续的xz
 * eg： 'xxyyz' => 'x；'xxxyyyzzz' => ''； 'xyzwzyx' => 'wzx   xzwzx   xxxzzz
 */

function deleteLetters (str) {
  let str1 = str.replace(/y/g, '');
  while(str1.includes('xz')) {
    str1 = str1.replace(/xz/g, '');
  }
  return str1;
 }

 console.log('-------', deleteLetters('xxxyyyzzz'))
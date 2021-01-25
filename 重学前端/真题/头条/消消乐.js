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


function deleteLetters2 (str) {
  const arr = [];
  for(let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c !== 'y' && c !== 'z') {
      arr.push(c);
    } else if (c === 'z') {
      let lastChar = arr[arr.length - 1];
      if (lastChar === 'x') {
        arr.pop();
      } else {
        arr.push('z');
      }
    }
  }
  return arr.join('');
}

 console.log('-------', deleteLetters2('xxyyz'))
/**
 * 标题：数字格式化问题:1234567890 --> 1,234,567,890
 * 描述信息
 * 数字格式化问题,将1234567890 --> 1,234,567,890
* */

function formatCash(str) {
  let result = [];
  let count = 0;
  for(let i = str.length - 1; i >= 0; i--) {
    count++;
    if (count === 3 && i !== 0) {
      count = 0;
      result.unshift(str.substr(i, 3));
    } else if (i === 0) {
      let num = str.length % 3;
      result.unshift(str.substr(i, num || 3));
    }
  }
  return result.join(',');
}

let test1 = '1234567'
console.log(formatCash(test1))
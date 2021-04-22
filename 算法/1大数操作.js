/**
 * 大数相乘
 * @param {String} num1 
 * @param {String} num2 
 * 
 * //注意点
 * let curIndex = i + j + 1;
 * let prevIndex = i + j;
 */
function multiply(num1, num2) {
  let num1Len = num1.length;
  let num2Len = num2.length;
  let resultArr = new Array(+num1Len + +num2Len).fill(0);
  for (let i = num1Len - 1; i >= 0; i--) {
    for (let j = num2Len - 1; j >= 0; j--) {
      let mul = num1[i] * num2[j];
      let curIndex = i + j + 1;
      let prevIndex = i + j;
      let sum = resultArr[curIndex] + mul;
      resultArr[curIndex] = sum % 10;
      resultArr[prevIndex] = resultArr[prevIndex] + Math.floor(sum / 10);
    }
  }

  let startIndex = 0;
  while(resultArr[startIndex] === 0) {
    startIndex++;
  }
  return resultArr.splice(startIndex).join('') || '0'
}

// console.log(multiply('0', '0'), 12345 * 1234512)


/**
 * 415. 字符串相加
 */
var addStrings = function(num1, num2) {
  let leftIndex = num1.length - 1;
  let rightIndex = num2.length - 1;
  let carry = 0;
  let result = [];
  while(leftIndex >= 0 || rightIndex >= 0 || carry > 0) {
    let n1 = num1[leftIndex] || 0;
    let n2 = num2[rightIndex] || 0;
    let sum = +n1 + +n2 + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);
    leftIndex--;
    rightIndex--;
  }
  return result.join('');
}
console.log('addStrings:', addStrings('1230', '123'), 1230 + 123)

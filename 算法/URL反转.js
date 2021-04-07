/**
 * URL反转
 * 描述信息
 * 给定形如 `www.toutiao.com` 的 URL，将其转换成 `com.toutiao.www` 的形式，要求必须原地操作
 * 参考答案
 * 原地全部翻转一遍；
 * 遍历遇到"."，继续翻转该部分字符串； 该题目重点考察编码，需要保证代码简洁，要不不允许使用字符串库函数
 * 评分标准
 * 基础编码题，最多给3分，其他未达到3分要求均不合格；
 * 3.0：代码实现正确，代码结构清晰，空间复杂度O（1）
*/

function reverseUrl1(url) {
  let list = url.split('.');
  let result = '';
  for(let i = list.length - 1; i >= 0; i--) {
    result += list[i]
    if (i !== 0) {
      result += '.'
    }
  }
  return result;
}

/**
 * 空间复杂度O（1）
 * @param {String} url 
 * @returns 
 */
function reverseUrl2(url) {
  let len = url.length;
  let startIndex = 0;
  let result = handle(url);
  for (let i = 0; i < len; i++) {
    if (url[i] === '.' || i === len - 1) {
      let newStr = handle(result.substring(startIndex, i));
      result = result.substring(0, startIndex) + newStr + result.substring(i);
      startIndex = i + 1;
    }
  }
  return result;
}

function handle(str) {
  let result = '';
  let len = str.length;
  for(let i = len - 1; i >= 0; i--) {
    result += str[i];
  }
  return result
}

console.log(reverseUrl2('www.toutiao.com'))
/**
 * let str = "hello<:12>，今天天气<:34>真不错呢!"
 * 提取其中的表情数字
 */

function test(str) {
  // return str.match(/<:(\d+)>/g)
  return str.match(/[^<:](\d+)$>/g)
}

let str = "hello<:12>，今天天气<:34>真不错呢!"
console.log(test(str))
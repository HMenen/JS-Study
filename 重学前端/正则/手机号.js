/**
 * 手机号
 */
var regxPhone = /^1\d{10}$/;
console.log(regxPhone.test(12312121221))

/**
 * 邮箱地址
 */
var regxEmail = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-])+$/;
console.log(regxEmail.test('121@1.com'))

/**
 * 实现千位分隔符
 * @param {Number} num 
 */
function parseToMoney(num) {
  let newNum = parseFloat(num.toFixed(3));
  let [interger, decimal] = String.prototype.split.call(newNum, '.')
  interger = interger.replace(/\d(?=(\d{3})+$)/g, '$&,');
  return decimal? interger + '.' + decimal: interger;
}
console.log(parseToMoney(123456.78))
console.log(parseToMoney(12345678))

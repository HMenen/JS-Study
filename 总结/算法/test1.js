//有问题 '123.0'.split('.) = 123
// function handleNumber(n) {
//   let intNumStr = (n + '').split('.')[0];
//   let num2Str = (n + '').split('.')[1];
//   for(let i = intNumStr.length - 1; i >= 0; i--) {
//     if ((i + 1) % 3 === 0) {
//       intNumStr[i] = ',' + intNumStr[i];
//     }
//   }
//   let str = intNumStr + '.' + num2Str;
//   console.log(str)
//   return str;
// }


/**
 * 
 * @param {num} n 
 */
function handleNumber1(n) {
  let intNumStr = (n + '').split('.')[0];
  let num2Str = (n + '').split('.')[1];
  console.log(num2Str)
  let ret = '';
  const arrInt = intNumStr.split('')
  while(arrInt.length > 3) {
    ret = ',' + arrInt.splice(arrInt.length - 3, arrInt.length).join('') + ret;
  }
  ret = arrInt.join('') + ret;
  return ret + '.' + num2Str
}
console.log('===', handleNumber1(11111.23232112))


function thousands(num){
  var str = num.toString();
  var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg,"$1,");
}

alert(thousands(1234567.1234567));
alert(thousands(7654321));

//有问题 123456.84378 =》,123456.84378
var str = "123456.84378"
var result = str.split(".")[0].split('').reverse().join('').replace(/(\d{3})/g, '$1,').split('').reverse().join('') + str.replace(/(\d+\b)/,'');
console.log(result);
VM206:3 


function toD(str) {
  str = str.split('').reverse().join('');
  return str.match(/(\d+\.)|(\d{1,3})/g).map(e => e.split('').reverse().join('')).reverse().join(',').replace(',.', '.');
}


function changeD(str) {
  str = str.split('').reverse().join();
  return str.match(/(\d+\.)|(\d){1, 3}/g).map(n => n.split('').reverse().join('')).reverse().join.replace(',.', '.')
}
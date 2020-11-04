/**
 * 全排列
 * @param {String} str 
 */
function fullpermutate(str) {
  var result = [];
  if (str.length > 1) {
    //遍历每一项
    for (var m = 0; m < str.length; m++) {
      //拿到当前的元素
      var left = str[m];
      //除当前元素的其他元素组合
      var rest = str.slice(0, m) + str.slice(m + 1, str.length);
      //上一次递归返回的全排列
      var preResult = fullpermutate(rest);
      //组合在一起
      for (var i = 0; i < preResult.length; i++) {
        var tmp = left + preResult[i]
        result.push(tmp);
      }
    }
  } else if (str.length == 1) {
     result.push(str);
  }
  return result;
 }
 console.log(fullpermutate('acsc'))
 

 function fullRank(str) {
  const ret = [];
  if (str.length === 1) {
    return str;
  } else {
    for (let i = 0; i < str.length; i++) {
      let left = str[i];
      let rest = str.slice(0, i) + str.slice(i + 1, str.length);
      let restArr = fullRank(rest);
      for (let j = 0; j < restArr.length; j ++) {
        let tmp = left + restArr[j];
        ret.push(tmp);
      }
    }
  }
  return ret;
 }

 console.log('-----', fullRank('qazl'))
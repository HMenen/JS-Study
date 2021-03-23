/**
 * 2018-09   2019-01   [2018-10, 2018-11, 2018-12]
 */
function getDate(leftDate, rightDate) {
  let rightDateArr = rightDate.split('-');
  let leftDateArr = leftDate.split('-');
  let leftYear = leftDateArr[0];
  let leftMonth = leftDateArr[1];
  let rightYear = rightDateArr[0];
  let rightMonth = rightDateArr[1];
  if (rightYear === leftYear) {
    return getMonth(leftYear, +leftMonth + 1, +rightMonth);
  } else {
    let n = rightYear - leftYear;
    let startList = getMonth(leftYear, +leftMonth + 1, 13);
    let endList = getMonth(rightYear, 1, rightMonth);
    for(let i = 1; i < n; i++) {
      let midList = getMonth(+leftYear + i, 1, 13);
      startList = [...startList, ...midList];
    }
    return [...startList, ...endList];
  }
}

function getMonth(year, startMonth, endMonth) {
  let ret = [];
  for(let i = startMonth; i < endMonth; i++) {
    ret.push(year + '-' + i);
  }
  return ret;
}

console.log('---------', getDate('2018-01', '2018-12'))
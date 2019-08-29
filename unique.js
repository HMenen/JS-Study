/**
 * 输入：数组
 * 输出：去重的数组
 * 思想：使用了filter和indexOf，如果arr.indexOf(item) === index说明是第一次出现
 * @param {Arry} arr 
 */
function getUnique1(arr) {
  let uniqueArr = arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  })
  return uniqueArr;
}

// const a1 = [1, 3, 1, 4, 1, '1'];
// console.log(getUnique1(a1));

/**
 * 输入：数组
 * 输出：去重的数组
 * 思想：首先给数组排序，如果item !== 上一个数值则代表item是第一次出现
 * @param {Array} arr 
 */
function getUnique2(arr) {
  let uniqueArr = arr.sort().filter((item, index, arr) => {
    return !index || item !== arr[index - 1];
  })
  return uniqueArr;
}

// const a1 = [1, 3, 1, 4, 1, '1'];
// console.log(getUnique2(a1));

/**
 * 输入：数组
 * 输出：去重的数组
 * 思想：使用obj变量记录item，obj中有item则说明item出现过
 * @param {Array} arr 
 */
function getUnique3(arr) {
  obj = {};
  let uniqueArr = arr.filter((item) => {
    return obj.hasOwnProperty(typeof item + item) ? false: obj[typeof item + item] = true;
  })
  return uniqueArr;
}
// const a1 = [1, 3, 1, 4, 1, '1'];
// console.log(getUnique3(a1));

/**
 * 输入：数组
 * 输出：去重的数组
 * 思想：使用了set的唯一性
 * @param {Array} arr 
 */
function getUnique4(arr) {
  return Array.from(new Set(arr));
}
const a1 = [1, 3, 1, 4, 1, '1'];
console.log(getUnique4(a1));
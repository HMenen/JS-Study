/**
 * 数组扁平化
 * @param {Array} arr 
 */
function flatten(arr) {
  let a1 = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) { 
      a1 = [...a1, ...flatten(arr[i])];
    } else {
      a1.push(arr[i])
    }
  }
  return a1;
}

console.log(flatten([1,[1,2,[2,4]],3,5]));  // [1, 1, 2, 2, 4, 3, 5]

/**
 * 利用reduce实现数组扁平化
 * @param {Array} arr 
 */
function flatten1(arr) {
  return arr.reduce((prev, cur) => {
    return [...prev, ...(Array.isArray(cur) ? flatten1(cur): [cur])]
  }, []);
}


console.log(flatten1([['a', 'aa'], 1,[1,2,[2,4]],3,5]));
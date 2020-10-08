const arr1 = [1, 2, 3];

const arr11 = arr1.map((value, index) => {
  return value + 100;
})

// console.log(arr11)

/**
 * 手动实现一个map
 * @param {function} fn 
 */
Array.prototype.myMap = function(fn) {
  const arr = this;
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i))
  }
  return newArr;
}
const arr111 = arr1.myMap((value, index) => {
  return value + 100;
})

// console.log(arr111)


/**
 * 手动实现一个foreach
 * @param {function} fn 
 */
Array.prototype.myForEach = function(fn) {
  const arr = this;
  for(let i = 0; i < arr.length; i++) {
    fn(arr[i], i)
  }
}
// var arr0 = arr1.myForEach((value, index) => {
//   console.log('---index:', index, '===value:', value)
// })


/**
 * 手动实现一个filter
 * @param {function} fn 
 */
Array.prototype.myFilter = function(fn) {
  const arr = this;
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
// console.log(arr1.myFilter((value, index) => value % 2 === 0))
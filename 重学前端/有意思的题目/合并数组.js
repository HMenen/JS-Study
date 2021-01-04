function mergeArr(...args) {
  let arr = args.flat();
  console.log('===', arr)
  return arr.sort((a, b) => a - b);
}

// console.log(mergeArr([1, 1, 4, 2, 1, 10], [3, 6, 1], [2]))


function mergeArr1(isReverse, ...args) {
  let arr = [];
  args.forEach(item => {
    arr.push(...item);
  })
  return isReverse? arr.sort((a, b) => b - a): arr.sort((a, b) => a - b);
}

console.log(mergeArr1(false, [1, 1, 4, 2, 1, 10], [3, 6, 1], [2]))
console.log(mergeArr1(true, [1, 1, 4, 2, 1, 10], [3, 6, 1], [2]))
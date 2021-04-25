const a = [1, 2, 3, 4, 5];

// console.log(a.map((item, index) => {
//   console.log('index:', index)
//   return (item * 2)
// }));

Array.prototype.myMap = function(fn) {
  return this.reduce((prev, cur, index, arr) => {
    const ret = fn.call(this, cur, index, arr);
    prev.push(ret);
    return prev
  }, [])
}
console.log(a.myMap((item, index, arr) => {
  console.log('index:', index, arr)
  return (item * 2)
}));


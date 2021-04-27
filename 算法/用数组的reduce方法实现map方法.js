function myMap(arr, fn) {
  return arr.reduce((prev, cur, index) => {
    prev.push(fn(cur, index))
    return prev
  }, [])
}

var a = [1, 2, 3];
console.log(myMap(a, item => item + 1))

function myMap1(arr, fn) {
  return arr.reduce((prev, cur, index, arr) => {
    prev.push(fn(cur, index, arr));
    return prev;
  }, [])
}
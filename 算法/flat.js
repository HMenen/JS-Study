/**
 * 数组扁平化
 * @param {Array} arr 
 */
function flat(arr) {
  return  arr.reduce((prev, current) => {
    return [...prev, ...(Array.isArray(current)? flat(current): [ current ])]
  }, [])
}


let arr = [[[3, 4], [5, 6], [7, [8, 9]]], [[3, 4], [5, 6]]];
console.log(flat(arr));

function flat2(arr) {
  let list = [];
  let ret = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    list.push(arr[i]);
  }
  while(list.length > 0) {
    let value = list.pop();
    if (Array.isArray(value)) {
      for(let i = value.length - 1; i >= 0 ; i--) {
        list.push(value[i]);
      }
    } else {
      ret.push(value);
    }
  }
  return ret;
}


console.log(flat2(arr));
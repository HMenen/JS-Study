function unique1(arr) {
  return Array.from(new Set(arr));
}


let arr = [1, 3, 1, 5, 13, 1];

console.log(unique1(arr))


function unique2(arr) {
  const ret = [];
  arr.forEach(item => {
    if (ret.indexOf(item) === -1) {
      ret.push(item)
    }
  });
  return ret;
}

console.log(unique2(arr))
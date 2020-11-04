/**
 * 利用快拍实现寻找第k大的数
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 */
function findK(arr, k, start, end) {
  let index = getIndex(arr, start, end);
  if (index === end - k + 1) return arr[index];
  else if (index > end - k + 1) {
    return findK(arr, index - (end - k + 1), start, index - 1)
  } else {
    return findK(arr, k, index + 1, end)
  }
}

function getIndex(arr, start, end) {
  if (start > end) return;
  let left = start;
  let right = end;
  const temp = arr[start];
  while(left < right) {
    while(arr[right] > temp && left < right) {
      right--;
    }
    arr[left] =arr[right];
    while(arr[left] <= temp && left < right) {
      left++;
    }
    arr[right] =arr[left];
  }
  arr[left] = temp;
  return left;
}

let aaaa = [6, 1, 23, 3, 7, 8, 1, 12];
console.log('findK----', findK(aaaa, 7, 0, aaaa.length - 1))
function findIndex(arr, n, start, end) {
  console.log(start, '=====', end)
  let low = start;
  let high = end;
  if (start >= end) return -1;
  while(low < high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === n) {
        let indexLeft = -1;
          if (arr[mid - 1] === n) {
            indexLeft = findIndex(arr, n, start, mid - 1);
          }
          if (indexLeft === -1) {
             return mid;
          } else {
             return indexLeft;
          }
      } else if (arr[mid] > n) {
          high = mid - 1;
      } else {
          low = mid + 1;
      }
  }
}

const arr = [1, 2, 3, 4, 5, 6, 6, 6, 7];
const index = findIndex(arr, 6, 0, arr.length - 1);
console.log(index);
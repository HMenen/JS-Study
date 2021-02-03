function quickSort(arr, start, end) {
  if (start > end) return;
  let left = start;
  let right = end;
  let temp = arr[start];
  while(left < right) {
    while(arr[right] > temp && left < right) {
      right--;
    }
    arr[left] = arr[right];
    while(arr[left] <= temp && left < right) {
      left++;
    }
    arr[right] = arr[left];
  }
  arr[left] = temp;
  quickSort(arr, start, left - 1);
  quickSort(arr, left + 1, end);
}

let arr = [20, 22, 20, 20, 2, 1, 3, 11, 3, 12, 0, 1, 12, 18, 19, 18, 18];
quickSort(arr, 0, arr.length - 1);
console.log('-------', arr);

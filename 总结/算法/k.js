function findK(arr) {
  quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, start, end) {
  if (arr.length < 2) return arr;
  if (start >= end) return;
  let leftIndex = start;
  let rightIndex = end;
  let temp = arr[start];
  while(leftIndex < rightIndex) {
    while(arr[rightIndex] > temp && leftIndex < rightIndex) {
      rightIndex--;
    }
    arr[leftIndex] = arr[rightIndex];
    while(arr[leftIndex] <= temp && leftIndex < rightIndex) {
      leftIndex++;
    }
    arr[rightIndex] = arr[leftIndex];
  }
  arr[leftIndex] = temp;
  quickSort(arr, start, leftIndex - 1);
  quickSort(arr, leftIndex + 1, end);
}

let arr = [3, 4, 5, 0, 1, 3, 1, 1];
// findK(arr);
quickSort(arr, 0, arr.length - 1)
console.log('---', arr)
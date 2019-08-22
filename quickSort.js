/**
 * 约定：
 * 输入：需排序的数组，需排序数组第一位的index值，需排序数组最后一位index值
 * 输出：一个有序数组
 * @param {Array} arr 需排序的数组
 * @param {Number} start 需排序数组第一位的index值
 * @param {Number} end 需排序数组最后一位index值
 */
function quickSort(arr, start, end) {
  //边界：start>=end时返回
  if (start >= end) return;

  const temp = arr[start]; //数组第一位为一个参照
  let startIndex = start;
  let endIndex = end;
  //1. 调整数组，使数组变为temp左边的值均小于等于temp，temp右边的值均大于temp
  //先从后面进行比较
  while(startIndex < endIndex) {
    while(arr[endIndex] > temp && startIndex < endIndex) {
      endIndex--;
    }
    arr[startIndex] = arr[endIndex];
    while(arr[startIndex] <= temp && startIndex < endIndex) {
      startIndex++;
    }
    arr[endIndex] = arr[startIndex];
  }
  //本次排序结束后将temp的值赋给arr[startIndex]，使arr[startIndex]左边的值均小于等于自己，arr[startIndex]左边的值均大于自己
  arr[startIndex] = temp;
  //2. 递归排序
  quickSort(arr, start, startIndex - 1);
  quickSort(arr, startIndex + 1, end);
}

let arr = [2, 1, 3, 11, 3, 12, 0, 1, 12, 18, 19, 18, 18];
quickSort(arr, 0, arr.length - 1)
console.log(arr);
/*
*  约定： mergeSort(arr)   输入一个数组返回一个有序数组
* 
* **/

function mergeSort(arr) {
  // 边界   arr.length  == 0 你没处理 这地方会无线循环 
  // 约定: 边界情况一定在这里返回
  if (arr.length <= 1) {
      return arr;
  }
  
  // 归并： 第一步 分
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid, arr.length);

  // 归并第二步, 递归
  let leftUnionArr = mergeSort(leftArr);
  let rightUnionArr = mergeSort(rightArr);

  // 第三步 合并
  return merge(leftUnionArr, rightUnionArr);
}


/*
*  约定： 输入两个有序数组， 返回一个整体有序数组
* **/
function merge(leftArr, rightArr) {
  let l = 0;
  let r = 0;
  let result = [];
  while (l < leftArr.length && r < rightArr.length) {
      if (leftArr[l] <= rightArr[r]) {
          result.push(leftArr[l]);
          l++;
      } else {
          result.push(rightArr[r]);
          r++;
      }
  }
  while (l < leftArr.length) {
      result.push(leftArr[l]);
      l++;
  }
  while (r < rightArr.length) {
      result.push(rightArr[r]);
      r++;
  }
  return result;
}
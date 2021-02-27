function findKthLargest(arr, k) {
  if (k > arr.length || k === 0) return -1;
  return getResult(arr, k, 0, arr.length - 1);
}

function getResult(arr, k, start, end) {
  let index = findK(arr, start, end);
  if (index === end - k + 1) return arr[index];
  if (index > end - k + 1) {
    return getResult(arr, index - (end - k + 1), start, index - 1);
  } else {
    return getResult(arr, k, index + 1, end);
  }
}

function findK(arr, start, end) {
  if (start > end) return;
  let left = start, right = end;
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
  return left;
}

// console.log('------', findKthLargest([8, 3,2,1,5,6,4], 2));

function quickSort(arr, start, end) {
  if (start > end) return;
  let left = start, right = end;
  let temp = arr[start];
  while(left < right) {
    while(arr[right] > temp && right > left) {
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

var a = [8, 3,2,1,5,6,4, 0, 0, 12, 111,12]
quickSort(a, 0, a.length - 1)
// console.log('------', a);


function binarySearch(arr, targrt, start, end) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === targrt) {
    return mid;
  }else if (arr[mid] > targrt) {
    return binarySearch(arr, targrt, start, mid - 1);
  } else {
    return binarySearch(arr, targrt, mid + 1, end);
  }
}
let aaa = [1, 4, 6, 10, 22, 23];
console.log(binarySearch(aaa, 1, 0, aaa.length - 1));

function reverse(head) {
  let preNode = head;
  let currentNode = head.next;
  let nextNode;
  while(currentNode) {
    nextNode = currentNode.next;
    currentNode.next = preNode;
    preNode = currentNode;
    currentNode = nextNode;
  }
  head.next = null;
}

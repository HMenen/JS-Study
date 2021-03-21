// function heapSort (arr) {
//     buildMaxHeap(arr);
//     for (let i = arr.length - 1; i > 0; i--) {
//         swap(i, 0);
//         maxHeapfy(arr, 0);
//     }
// }

// function buildMaxHeap (arr) {
//     const len = arr.length;
//     for (let i = Math.floor(len / 2); i < len; i++) {
//         maxHeapfy(arr, i);
//     }
// }

// function maxHeapfy (arr, i) {
//     let left = i * 2 + 1;
//     let right = i * 2 + 2;
//     let largest = i;
//    if (left < arr.length && arr[left] > arr[largest]) {
//        largest = left;
//    }
//    if (right < arr.length && arr[right] > arr[largest]) {
//        largest = right;
//    }
//    if (i !== largest) {
//        swap(i, largest);
//        maxHeapfy(arr, largest);
//    }
// }

// function swap (i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

function sweap (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function heapSort (arr) {
    let n = Math.floor(arr.length / 2);
    for (let i = n; i >=0; i--) {
        maxHead(arr, i, arr.length);
    }
    for (let j = arr.length - 1; j > 0; j--) {
        sweap(arr, 0, j);
        maxHead(arr, 0, j);
    }
}
  
function maxHead(arr, i, len) {
    let lChild = i * 2 + 1;
    let rChild = i * 2 + 2;
    let max = i;
    if (lChild < len && arr[lChild] > arr[max]) {
        max = lChild;
    }
    if (rChild < len && arr[rChild] > arr[max]) {
        max = rChild;
    }
    if (max != i) {
        sweap(arr, i, max);
        maxHead(arr, max, len);
    } 
}
 
let arr = [2,4,1,4,6,2,1,8,0,11,2,5];
// const arr = [3, 1, 1, 2, 5]
heapSort(arr);
console.log(arr)
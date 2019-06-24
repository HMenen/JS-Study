function heapSort (arr) {
    buildMaxHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        swap(i, 0);
        buildMaxHeap(arr, 0);
    }
}

function buildMaxHeap (arr) {
    const len = arr.length;
    for (let i = Math.floor(len / 2); i < len; i++) {
        maxHeapfy(arr, i);
    }
}

function maxHeapfy (arr, i) {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let largest = i;
   if (left < arr.length && arr[left] > arr[largest]) {
       largest = left;
   }
   if (right < arr.length && arr[right] > arr[largest]) {
       largest = right;
   }
   if (i !== largest) {
       swap(i, largest);
       maxHeapfy(arr, largest);
   }
}

function swap (i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
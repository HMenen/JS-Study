function popSort (arr) {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
// popSort(arr);
// console.log(arr)

function selectSort (arr) {
    let minIndex;
    let temp;
    for (let i = 0; i < arr.length - 2; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}
// selectSort(arr); 321   231   213

function insertSort (arr) {    
    let temp;
    for (let i = 1; i < arr.length; i++) {
        temp = arr[i];   //一定要记住，arr[i]的值是会变的，所以用temp保存这个值
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            // if (arr[j] > arr[j + 1]) {
                // arr[j + 1] = arr[j];
            // }
            arr[j + 1] = arr[j]; 
            j --;
        }
        arr[j + 1] = temp;
    }
}
let arr1 = [2, 3, 2, 3, 0, 12, 1, 3, 6];
insertSort(arr1);
console.log(arr1)

function shellSort (arr) {
    let temp;
    let N = Math.floor(arr.length / 2);
    while (N > 0) {
        for (let i = N; i < arr.length; i++) {
            temp = arr[i];
            let j = i - N;
            while (j >= 0 && arr[j] > temp) {
                arr[j + N] = arr[j];
                j -= N;
            }
            arr[j + N] = temp;
        }
        N = Math.floor(N / 2);
    }
}
// [3, 1, 1, 2, 5];
// shellSort(arr);
// console.log(arr)

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
 
// let arr = [2,4,1,4,6,2,1,8,0,11,2,5];
// // const arr = [3, 1, 1, 2, 5]
// heapSort(arr);
// console.log(arr)

// [3, 1, 1, 2, 5];
function mergeSort (arr) {
    if (arr.length == 1) return arr
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let result = [];
    let l = 0;
    let r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
            result.push(left[l]);
            l++;
        } else {
            result.push(right[r]);
            r++;
        }
    }
    while (l < left.length) {
        result.push(left[l]);
        l++;
    }
    while (r < right.length) {
        result.push(right[r]);
        r++;
    }
    return result;
}
// console.log(mergeSort(arr));

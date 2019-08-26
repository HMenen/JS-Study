<<<<<<< HEAD
function quickSort (arr, start, end) {
    if (start >= end) return;
    let s = start;
    let e = end;
    let point;
    while (s < e) {
        point = arr[Math.floor((s + e) / 2)];
        // while (s < e && arr[e] > point) e--;
        while (s < e && arr[s] <= point) s++;
        while (s < e && arr[e] > point) e--;
        if (s < e) {
            console.log('--s---' + arr[s] + '--e---' + arr[e]);
            let temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
        }
=======
function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  
function qsort(arr, s, e) {
    if (s >= e) return;
    const point = arr[s];
    let start = s + 1;
    let end = e;
    while (start < end) {
        while (start < end && arr[end] > point) end--;
        while (start < end && arr[start] <= point) start++;
        swap(arr, start, end);
>>>>>>> b99bf94d4926064ea02b6ce73cd4442de073af9c
    }
    swap(arr, s, start);
    qsort(arr, s, start - 1);
    qsort(arr, start + 1, e);
}
<<<<<<< HEAD
const arr = [3, 1, 1, 2, 5] //1 1 3 2 5 1235
quickSort(arr, 0, arr.length - 1)
console.log(arr)
=======
// const arr = [3, 1, 1, 2, 5]
let arr2 = [3,2,1]
qsort(arr2, 0, arr2.length - 1)
console.log(arr2)


// function s (s, e, arr) {
//     if (s <= e) return;
//     let start = s;
//     let end = e;
//     while(start < end) {
//         let point = arr[Math.floor((start + end) / 2)];
//         while (arr[end] > point) end--;
//         while (arr[start] <= point ) start++;
//         if (start != end) {
//             let temp = arr[start];
//             arr[start] = arr[end];
//             arr[end] = temp;
//         }
//     }
//     s(s, start - 1, arr);
//     s(start + 1, e, arr);
// }

// s(0, arr.length - 1, arr)
>>>>>>> b99bf94d4926064ea02b6ce73cd4442de073af9c

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
        while (j >= 0 && arr[j + 1] < temp) {
            // if (arr[j] > arr[j + 1]) {
                // arr[j + 1] = arr[j];
            // }
            arr[j + 1] = arr[j]; 
            j --;
        }
        arr[j + 1] = temp;
    }
}
// let arr1 = [2, 3, 2, 3];
// insertSort(arr);
// console.log(arr)

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
 
let arr = [2,4,1,4,6,2,1,8,0,11,2,5];
// const arr = [3, 1, 1, 2, 5]
heapSort(arr);
console.log(arr)

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
<<<<<<< HEAD
// console.log(mergeSort(arr));
=======
// console.log(mergeSort(arr));
>>>>>>> b99bf94d4926064ea02b6ce73cd4442de073af9c

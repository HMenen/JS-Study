function quickSort (arr, start, end) {
    if (start >= end) return;
    let s = start;
    let e = end;
    let point;
    while (s < e) {
        point = arr[Math.floor((s + e) / 2)];
        while (s < e && arr[e] > point) e--;
        while (s < e && arr[s] <= point) s++;
        if (s < e) {
            let temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
        }
        // console.log(JSON.stringify(arr))
    }
    quickSort(arr, start, s - 1);
    quickSort(arr, s + 1,  end );
}
const arr = [3, 1, 1, 2, 5]
// quickSort(arr, 0, arr.length - 1)
// console.log(arr)

function popSort (arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
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
        while (j >= 0 && arr[j + 1] < arr[j]) {
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
            while (j >= 0 && arr[j] > arr[j + N]) {
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

function heapSort (arr) {
    buildMaxHeap(arr, Math.floor(arr.length / 2));
    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, i, 0);
        maxHeapfy(arr, 0, i);
    }
}
function buildMaxHeap (arr, n) {
    for (let i = n; i >= 0; i--){
        maxHeapfy(arr, i, arr.length);
    }
}
function maxHeapfy (arr, i, len) {
    let rightChild = i * 2 + 1;
    let leftChild = i * 2;
    let largest = i;
    if (leftChild < len && arr[leftChild] > arr[largest]) {
        largest = leftChild;
    }
    if (rightChild < len && arr[rightChild] > arr[largest]) {
        largest = rightChild;
    }
    if (i !== largest) {
        swap(arr, i, largest);
    }
}

function swap (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// heapSort(arr);
// console.log(arr)

// [3, 1, 1, 2, 5];
function mergeSort (arr) {
    if (arr.length == 1) return arr
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length + 1);
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
console.log(mergeSort(arr));
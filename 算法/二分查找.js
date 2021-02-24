/**
 * 二分查找
 * @param {*} arr 
 * @param {*} low 
 * @param {*} high 
 * @param {*} targetValue 
 */
function binarySearch(arr, low, high, targetValue) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === targetValue) {
    return mid;
  } else if (arr[mid] < targetValue) {
    return binarySearch(arr, mid + 1, high, targetValue);
  } else {
    return binarySearch(arr, low, mid - 1, targetValue);
  }
}

let aaa = [1, 4, 6, 10, 22, 23];
// console.log(binarySearch(aaa, 0, aaa.length - 1, 23));

/**
 * 快排
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 */
function quickSort(arr, start, end) {
  if (start > end) return;
  let left = start;
  let right = end;
  let temp = arr[start];
  while (left < right) {
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
let arr = [2, 1, 3, 11, 3, 12, 0, 1, 12, 18, 19, 18, 18];
quickSort(arr, 0, arr.length - 1)
// console.log(arr);

/**
 * [215] 数组中的第K个最大元素
 * @param {*} arr 
 * @param {*} k 
 */
function findKthLargest(arr, k) {
  if (k > arr.length) return -1;
  return dp(arr, k, 0, arr.length - 1);
}

function dp(arr, k, start, end) {
  let index = findK(arr, start, end);
  if (index === end - k + 1) {
    return arr[index];
  } else if (index > end - k + 1) {
    return dp(arr, index - (end - k + 1), start, index - 1);
  } else {
    return dp(arr, k, index + 1, end);
  }
}

function findK(arr, start, end) {
  if (start > end) return -1;
  let left = start, right = end;
  let temp = arr[start];
  while(left < right) {
    while(arr[right] > temp && left < right) {
      right--;
    }
    arr[left] = arr[right];
    while(arr[left] < temp && left < right) {
      left++;
    }
    arr[right] = arr[left];
  }
  arr[left] = temp;
  return left;
}

// console.log('------', findKthLargest([8, 3, 2, 1, 5, 6, 4], 2))

/* 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 * 示例1:
 * 输入: s1 = "ab" s2 = "eidbaooo"
 * 输出: True
 * 解释: s2 包含 s1 的排列之一 ("ba").
 * 
 * 示例2:
 * 输入: s1= "ab" s2 = "eidboaoo"
 * 输出: False
 * 
 * 注意：
 * 输入的字符串只包含小写字母
 * 两个字符串的长度都在 [1, 10,000] 之间
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let needs = {}, window = {};
  let vaild = 0, left = 0;
  for (let c of s1) {
    needs[c]? needs[c]++ : needs[c] = 1
  }

  for (let i = 0; i < s2.length; i++) {
    let c = s2[i];
    if (needs[c]) {
      window[c]? window[c]++ : window[c] = 1;
      if (window[c] === needs[c]) {
        vaild++;
      }
    }
    while(i + 1 - left >= s1.length) {
      if (vaild === Object.keys(needs).length) {
        return true;
      }
      let d = s2[left];
      left++;
      if (window[d]) {
        if (needs[d] === window[d]) {
          vaild--;
        }
        window[d]--;
      }
    }
  }
  return false;
}
// console.log('==========', checkInclusion('ab', 'eidbaooo')) //true
// console.log('======111====', checkInclusion('ab', 'eidboaoo')) //false

/**
 * 反转链表
 * @param {*} head 
 */
function reverse(head) {
  let pre = head;
  let current = head.next;
  let next = null;
  while(current) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  head = current;
}
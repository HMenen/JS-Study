/**
 * 3行省略
 */
// .box{
//   line-clamp: 3;
//   text-overflow: 'ellipsis';
//   display: --webkit--box;
//   --webkit--box-orient: vertical;
//   overflow: hidden;
// }

/**
 *  数组，超过一半的数字
 */

function findNum(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let list = [...arr];
  list.sort();
  return list[list.length / 2]
}

function findNum1(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let map = {};
  let len = arr.length
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (map[num]) {
      map[num]++;
      if (map[num] > len / 2) {
        return num
      }
    } else {
      map[num] = 1;
    }
  }
  return -1;
}


function findNum2(arr) {
  let map = {};
  let len = arr.length
  for(let i = 0; i < arr.length; i++) {

  }
}


function debounce(fn, sleep) {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, sleep)
  }
}

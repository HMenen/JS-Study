// function isPrinme (n) {
//   if (n === 0 || n === 1) return false;
//   if (n === 2) return true;
//   for ( i = 2; i < Math.sqrt(n) ; i++) {
//     if (n % i === 0) {
//       console.log(i)
//       return false;
//     }
//   }
//   return true;
// }


// console.log(isPrinme(180))


// String.fromCharCode(97)
// "a"
// String.fromCharCode(65)
// "A"

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function getNum(list) {

}

var addTwoNumbers = function(l1, l2) {
  let len = l1.length > l2.length ? l1.length: l2.length;
  let ret = [];
  for (let i = 0; i < len ; i++) {
    let sum = l1[i] + l2[i];
    if (ret[i]) {
      sum += 1;
    }
    ret[i] = sum % 10;
    ret[i + 1] = Math.floor(sum / 10);
  }
  console.log(ret);
};

// addTwoNumbers([2,4,3], [5,6,4])


/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {*} nums 
 * @param {*} target 
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      const n = target - nums[i];
      let point = nums.indexOf(n);
      if (point > -1) {
        if (i === point) {
          let point = nums.indexOf(n, i + 1);
          if (point > -1) {
            return [i, point];
          }
        } else {
          return [i, point];
        }
      }
  }
};

const r = twoSum([3,3], 6);
// console.log(r)

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let next;
  let maxLen = 1;
  let ret;
  for (let i = 0; i < s.length; i++) {
      next = i + 1;
      while(next < s.length) {
          if (s[next - 1] !== s[next]) {
              next++;
          } else {
              break;
          }
      }
      ret = next - i - 1;
      if (ret > maxLen) {
          maxLen = ret;
      }
  }
  // console.log('---', maxLen);
};

lengthOfLongestSubstring("abcabcbb");


/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
示例 1:
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let len = s.length;
  let maxLen = 0;
  let arr = new Array(128).fill(0);
  for (let i = 0, j = 0; j < len; j++) {
      if (!arr[s[j]]) {
          arr[s[j]] = -1;
      }
      i = Math.max(arr[s[j]], i);
      maxLen = Math.max(maxLen, j - i + 1);
      arr[s[j]] = j + 1;
  }
  return maxLen;
};

function getNum(n) {
  let num1 = 0;
  let ret = 0;
  while (n > 2) {
      num1 = Math.floor(n / 3);
      n -= num1 * 3;
      ret += num1;
      n = n + num1;
  }
  if (n === 2) {
      ret += 1;
  }
  return ret;
}

// console.log(getNum(59));
// while(line = readline()){
//   function getNum(n) {
//     let num1 = 0;
//     let ret = 0;
//     if (n < 2) {
//       return ret;
//     }
//     while (n > 2) {
//         num1 = Math.floor(n / 3);
//         n -= num1 * 3;
//         ret += num1;
//         n = n + num1;
//     }
//     if (n === 2) {
//         ret += 1;
//     }
//     return ret;
//   }
//   let n = getNum(parseInt(line));
//   print(n);
// }


// while(line = readline()) {
//   let n = parseInt(line);
//   let arr = [];
//   while(n > 0){
//       n--;
//       line = readline();
//       arr.push(parseInt(line));
//   }
//   const newArr = getArr(arr);
//   printArr(newArr);
//   //print(newArr);
// }


function changeNum(num) {
  let ret = 0;
  if (num[0] === '0' && num[1] === 'x') {
    num = num.slice(2);
  }
  for(let i = num.length - 1; i >= 0; i--) {
    if(num[i]>='A'&&num[i]<='F') {
      ret += Math.pow(16, num.length - i - 1) * (num[i].charCodeAt(num[i]) - 55);
    }
    else {
      ret += Math.pow(16, num.length - i - 1) * parseInt(num[i]);
    }
  }
  return ret;
}

// console.log(changeNum('0xAB'))

/**
 * 
 */
function getNum(str, char) {
  let sum = 0;
  Array.from(str).forEach(item => {
      if (item === char) {
        sum++;  
      }
  });
  return sum;
}
var str = 'nhrwlbcc8m7c5hih9mhalw98k0322wf2jjm47kk3ntm9snfrflzzundn7d608usy049asxalzjk7izj6amcqhr8uubc04g52mcjboj2fmge2l6iarizfu4yve5o4i3srf5zgqbg82ckcotdeqp760mc9gzei5dzk5gj9x9yj05o3hle0ii64krkkp5i7blh7nbu3gu5vgi2scyn4yqx3z4vcjbyzhnqkh887izotjkg2l0mit0k14vyn39';
var c = 't';
// console.log(str.toUpperCase())
console.log(getNum(str.toUpperCase(), c.toUpperCase()));



/**
 * •连续输入字符串，请按长度为8拆分每个字符串后输出到新的字符串数组；
•长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。
输入描述:
连续输入字符串(输入2次,每个字符串长度小于100)

输出描述:
输出到长度为8的新字符串数组

示例1
输入
复制
abc
123456789
输出
复制
abc00000
12345678
90000000
 */
// while(line = readline()) {
//   var str1 = line;
//   var arr = getArr(str1);
//   printArr(arr);
//   var str2 = readline();
//   arr = getArr(str2);
//   printArr(arr);
// }

// function getArr(str) {
//   let n = Math.floor(str.length / 8);
//   const arr = [];
//   let start = 0;
//   let end = -1;
//   for (let i = 1; i <= n; i++) {
//       end += 8;
//       arr.push(str.slice(start, end + 1));
//       start += 8;
//   }
//   if (str.length % 8 !== 0) {
//       let s = str.slice(start, str.length);
//       arr.push(s.padEnd(8, 0));
//   }
//   return arr;
// }

// function printArr(arr){
//   for(let i = 0; i < arr.length; i++) {
//       print(arr[i]);
//   }
// }



function getObj(arr) {
  arr.sort((a, b) => {
      return a.key - b.key;
  })
  
  const obj = {};
  arr.forEach(item => {
    if (!obj[item.key]) {
        obj[item.key] = item.value;
    } else {
        obj[item.key] += item.value;
    }
});
  
  return obj;
}

var arr1 = [{"key":0,"value":56527},{"key":2,"value":92174},{"key":3,"value":58163},{"key":6,"value":51274},{"key":7,"value":49280},
{"key":8,"value":68235},{"key":10,"value":17638},{"key":10,"value":73644},{"key":12,"value":73279},{"key":13,"value":75118},
{"key":17,"value":76746},{"key":21,"value":88999},{"key":21,"value":4319},{"key":21,"value":69214},{"key":25,"value":59851},
{"key":26,"value":15309},{"key":28,"value":54831},{"key":29,"value":45376},{"key":30,"value":76857},{"key":32,"value":2411},
{"key":32,"value":69415},{"key":32,"value":17559},{"key":34,"value":56597},{"key":34,"value":63154},{"key":34,"value":24047},
{"key":35,"value":84342},{"key":35,"value":30281},{"key":37,"value":72460},{"key":38,"value":59383},{"key":38,"value":54371},
{"key":39,"value":69774},{"key":39,"value":32353},{"key":40,"value":66421},{"key":42,"value":92649},{"key":43,"value":28542},
{"key":43,"value":65865},{"key":43,"value":34446},{"key":44,"value":57035},{"key":44,"value":5477},{"key":45,"value":92403},
{"key":45,"value":49365},{"key":45,"value":11278},{"key":45,"value":31340},{"key":47,"value":93446}]

// console.log(Object.keys(getObj(arr1)));
const obj = getObj(arr1);
Object.keys(obj).forEach(key => {
  let str = key + ' ' + obj[key];
  console.log(str);
})
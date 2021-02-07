/** 1. 
 * 执行代码求输出，并说明为什么，严格模式下输出有变化吗，为什么？ 
**/

"use strict"
var a = function () { this.b = 3 }
var c = new a();
a.prototype.b = 9;
var b = 7;
// a();   // ---------- 主要问题在这里，a()执行时this指向问题

// console.log(b);
// console.log(c.b);

//答：严格模式下输出有变化，此时方法 a 中的 this 指向的是undefined；在非严格模式下this指向的是全局。


/** 2. 
 * 给定一个升序整型数组[0,1,2,4,5,7,13,15,16],找出其中连续出现的数字区间，
 * 输出为["0->2","4->5","7","13","15->16"] 
**/

function summaryRanges(arr){
  let left = 0, right = 0;
  let len = arr.length;
  let ret = [];
  if (arr.length === 0) return;
  for (let i = 0; i < len; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
      right = i + 1;
    } else {
      if (left === right) {
        ret.push(arr[i]);
      } else {
        ret.push(`${arr[left]}->${arr[right]}`);
      }
      left = i + 1;
      right = i + 1;
    }
  }
  return ret
}

// console.log('-------summaryRanges:', summaryRanges([0, 1, 2, 4, 5, 7, 8, 10, 13, 15, 16, 22, 23, 122]))
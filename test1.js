/**样例输入
aaabbcccaab
样例输出
3a2b3c2a1b

提示
获取字符串中某个下标字符的方法示例：
Java:
String str="hello,world!";
System.out.println(str.charAt(4));	//

PHP:
$str='hello,world';
echo $str[4],' ',$str{6};	//

Javascript:
var str='hello,world!';
console.log(str[4],' ',str.charAt(6));	//
**/


function char_count(str) {
  let ret = '';
  let index = 1;
  const strArr = Array.from(str);
  for (let i = 0; i < strArr.length; i = i + index) {
    const target = strArr[i];
    let sameCount = 0;
    for (let j = i; j < strArr.length; j++) {
      index = sameCount;
      if (strArr[j] === target) {
        sameCount++;
        index = sameCount;
        if (j === strArr.length - 1) {
          ret += sameCount + target;
        }
      } else {
        ret += sameCount + target;
        break;
      }
    }
  }
  return ret;
}

res = char_count('aaabbcccaab');

console.log(res);


function arraySort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const _arr = [2,13,1,5,99,234,23];
res = arraySort(_arr);

async function async1(){
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2(){
  console.log('async2')
}
console.log('script start')
setTimeout(function(){
  console.log('setTimeout') 
},0)  
async1();
new Promise(function(resolve){
  console.log('promise1')
  resolve();
}).then(function(){
  console.log('promise2')
})
console.log('script end')
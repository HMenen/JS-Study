// 题目一：
// setTimeout(()=>{
//   console.log('setTimeout')
// },0)
// setImmediate(()=>{
//   console.log('setImmediate')
// })

//输出
//setImmediate
//setTimeout

// 题目二：
// const promise = Promise.resolve()
// promise.then(()=>{
//     console.log('promise')
// })
// process.nextTick(()=>{
//     console.log('nextTick')
// })
//输出
//nextTick
//promise

// 题目三：
// setTimeout (() => { 
//   console.log(1)
// },0)
// new Promise((resolve,reject) => { 
//   console.log(2)
//   for(let i = 0; i <10000; i++) {
//       i === 9999 && resolve()
//   }     
//   console.log(3) 
// }).then(() => { 
//   console.log(4)
// })
// console.log(5)
//输出: 2、3、5、4、1

// 题目四
// setInterval(()=>{
//   console.log('setInterval')
// },100)
// process.nextTick(function tick(){
//   process.nextTick(tick)
// })

setImmediate(function(){
  console.log(1);
},0);
setTimeout(function(){
  console.log(2);
},0);
new Promise(function(resolve){
  console.log(3);
  resolve();
  console.log(4);
}).then(function(){
  console.log(5);
});
console.log(6);
process.nextTick(function(){
  console.log(7);
});
console.log(8);
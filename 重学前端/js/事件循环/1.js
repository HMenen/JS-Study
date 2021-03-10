// // console.log('script start')

// // async function async1() {
// // await async2()
// // console.log('async1 end')
// // }
// // async function async2() {
// // console.log('async2 end')
// // }
// // async1()

// // setTimeout(function() {
// // console.log('setTimeout')
// // }, 0)

// // new Promise(resolve => {
// // console.log('Promise')
// // resolve()
// // })
// // .then(function() {
// // console.log('promise1')
// // })
// // .then(function() {
// // console.log('promise2')
// // })



// console.log('script start')

// async function async1() {
//     await async2()
//     console.log('async1 end')
//     console.log('async111 end')
// }
// async function async2() {
//     console.log('async2 end')
//     return Promise.resolve().then(()=>{
//         console.log('async2 end1')
//     })
// }
// async1()

// setTimeout(function() {
//     console.log('setTimeout')
// }, 0)

// new Promise(resolve => {
//     console.log('Promise')
//     resolve()
// })
// .then(function() {
//     console.log('promise1')
// })
// .then(function() {
//     console.log('promise2')
// })
// .then(function() {
//   console.log('promise21111')
// })


// console.log('script end')

setImmediate(() => {
  console.log('timeout1')
  // Promise.resolve().then(() =>console.log('promise resolve'))
  new Promise((resolve) => resolve()).then(() =>console.log('promise resolve111'))
  process.nextTick(() =>console.log('next tick1'))
});
setImmediate(() => {
  console.log('timeout2')
  process.nextTick(() =>console.log('next tick2'))
});
setImmediate(() =>console.log('timeout3'));
setImmediate(() =>console.log('timeout4'));



// setTimeout(()=>{
//   console.log('setTimeout1');
//   Promise.resolve().then(() => console.log('promise1'));
// });

// setTimeout(()=>{
//   console.log('setTimeout2');
//   Promise.resolve().then(() => console.log('promise2'));
// });

// setImmediate(() => {
//   console.log('setImmediate1');
//   Promise.resolve().then(() => console.log('promise3'));
// });

// setImmediate(() => {
//   console.log('setImmediate2');
//   Promise.resolve().then(() => console.log('promise4'));
// });
//setImmediate1
// promise3
// setImmediate2
// promise4
// setTimeout1
// promise1
// setTimeout2
// promise2
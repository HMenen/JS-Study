/**
 * 选择速度最快的npm源
 * 后端返回地址如下： 
 * ['http:demo1', 'http:demo2]
 * @param {Array} arr 
 */
function request(api) {
  new Promise((resolve, reject) => {
    axios.get(api)
      .then(() => {
        resolve(api)
      })
      .catch(err => reject(err))
  })
}

function findMostFastNpm(npms) {
  const promises = npms.map(api => request(api));
  Promise.race(promises).then(res => console.log('most fast npm is', res))
}






// function findMostFastNpm(arr) {
//   return Promise.race(arr).then(res => {
//     console.log('-=-=-=-=-=-', res)
//   })
// } 

// var p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('http:demo1')
//   }, 1000)
// })

// var p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('http:demo2')
//   }, 600)
// })

// console.log(findMostFastNpm([p1, p2]))
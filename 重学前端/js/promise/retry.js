//已有请求函数getData，其功能为异步请求数据返回promise对象，如getData(params).then(…).catch(…)。
//实现一个myGetData,返回promise对象，要求加入失败重试功能，该函数内部依然使用getData实现，
//在getData失败一次后间隔一秒钟再重试一次，直到重试到第五次、如果全都失败了，myGetData所返回的promise为reject，
//只要有任意一次成功，则停止重试，直到resolve结果。

// function retry(fn, sleep, times) {
//   return new Promise((resolve, reject) => {
//     fn()
//       .then(res => {
//         console.log('调用成功', res);
//         resolve(res);
//       })
//       .catch(err => {
//         if (times > 0) {
//           console.log(`还剩${ times--}次`, err)
//           setTimeout(() => retry(fn, sleep, times), sleep)
//         } else {
//           reject(err)
//         }
//       })
//   })
// }

function retry11(fn, sleep, times) {
  return new Promise((resolve, reject) => {
    const attemp = () => {
      fn()
        .then(res => {
          resolve(res);
          console.log('--调用成功--', res);
        })
        .catch(err => {
          if (times >= 0) {
            console.log(`还剩${ times }次`, err);
            times--;
            setTimeout(attemp, sleep)
          } else {
            reject(err);
          }
        })
    }
    attemp();
  })
}

// 测试
const fetchData = () => {
  return new Promise((resolve, reject) => {
    const rad = Math.random()
    if (rad > 0.5) {
      resolve(rad)
    } else {
      reject(rad)
    }
  })
}

// retry(fetchData, 2000, 5) // 如果出错每隔3秒请求一次，一共请求五次
retry11(fetchData, 2000, 5) // 如果出错每隔3秒请求一次，一共请求五次
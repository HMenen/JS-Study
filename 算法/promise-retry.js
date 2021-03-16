//已有请求函数getData，其功能为异步请求数据返回promise对象，如getData(params).then(…).catch(…)。
//实现一个myGetData,返回promise对象，要求加入失败重试功能，该函数内部依然使用getData实现，
//在getData失败一次后间隔一秒钟再重试一次，直到重试到第五次、如果全都失败了，myGetData所返回的promise为reject，
//只要有任意一次成功，则停止重试，直到resolve结果。
function retry(request, sleep, tryTimes) {
  return new Promise((resolve, reject) => {
    const fn = () => {
      request()
        .then(res => {
          resolve(res);
          console.log('---sucess----', res)
        })
        .catch(err => {
          if(tryTimes >= 0) {
            console.log('-------', tryTimes, err);
            tryTimes--;
            setTimeout(fn, sleep);
          } else {
            reject(err)
          }
        })
    }
    fn();
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
    // reject(rad)
  })
}

retry(fetchData, 3000, 5) // 如果出错每隔3秒请求一次，一共请求五次
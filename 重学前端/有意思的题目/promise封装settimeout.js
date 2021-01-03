function myTimeout(sleep) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(111), sleep)
  })
}


console.log(myTimeout(1000).then(data => console.log('===data===', data)))

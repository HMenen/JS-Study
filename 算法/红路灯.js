// 方法一
function sleep(duration){
  return new Promise(resolve => {
      setTimeout(resolve, duration);
  })
}
function changeColor(duration,color){
  return new Promise(resolve => {
  console.log('traffic-light ', color);
    sleep(duration).then(resolve);
})
}
function main() {
return new Promise(resolve => {
  changeColor(2000, 'red').then(() => {
    changeColor(1000, 'yellow').then(() => {
      changeColor(3000, 'green').then(() => {
        main();
      })
    })
  })
})
}

// 方法二
function sleep(fn, sleep) {
  return new Promise((resolve, reject) => {
    fn();
    setTimeout(resolve, sleep)
  })
}

async function showLight() {
   while(true) {
    await sleep(() => console.log('--red--'), 1000);
    await sleep(() => console.log('--yellow--'), 2000);
    await sleep(() => console.log('--blue--'), 1000);
  }
}

showLight();
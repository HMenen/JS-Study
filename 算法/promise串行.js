let a1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    console.log('------1');
  }, 1000)
});

let a2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
    console.log('------2');
  }, 1200)
});

let a3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
    console.log('------3');
  }, 3000)
});

function handlePromises1(promiseArr) {
  promiseArr.reduce((prev, cur) => prev.then(cur), Promise.resolve())
}

handlePromises1([a1, a2, a3]);
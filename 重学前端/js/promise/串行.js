/**
 * 串行执行promise
 * @param {Array} arr 
 */
function handlePromises1(arr) {
  return arr.reduce((prev, cur, index) => {
    return prev.then(() => cur.then(res => console.log('-------', res)));
  }, Promise.resolve())
}

async function handlePromises2(arr) {
  for(let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let res = await item;
    console.log('-----', res);
  }
}

let a1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
});

let a2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 1200)
});

let a3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 3000)
});

handlePromises1([a1, a2, a3]);
// handlePromises2([a1, a2, a3]);
//promise.all

function all(list) {
  let result = [];
  let count = list.length;
  return new Promise((resolve, reject) => {
    if (list.length === 0) {
      resolve(list);
      return;
    }
    function getResult(task, i) {
      if (task && task.then && typeof task.then === 'function') {
        const { then } = task;
        then.call(task, res => getResult(res, i), reject);
        return;
      } else {
        result[i] = task;
        count--;
      }
      if (count === 0) {
        resolve(result);
      }
    }
    for(let i = 0; i < list.length; i++) {
      getResult(list[i], i);
    }
  })
}

const t1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('t1')
  }, 1000);
})

const t2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('t2')
  }, 3000);
})

// all([t1, t2]).then(res => console.log(res))

//1234567 => 1,234,567   123,456
function handleNum(str) {
  let count = 0;
  let result = [];
  for(let i = str.length - 1; i >= 0; i--) {
    count++;
    if (count === 3 && i !== 0) {
      result.unshift(str.slice(i, i + 3));
      count = 0
    }
    if (i === 0) {
      result.unshift(str.substr(i, count || 3));
    }
  }
  return result.join(',');
}
console.log(handleNum('123456'))
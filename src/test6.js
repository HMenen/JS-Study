// setTimeout(() => {
//   console.log(1)
// }, 0);

// const promise = new Promise((resolve, reject) => {
//   console.log(2)
//   reject(3)
//   console.log(4)
// })

// promise
// .then(() => console.log(5))
// .catch(error => {
//   console.log(6)
//   console.log(8)
// })
// .then(() => console.log(7))
// .catch(() => console.log(8))
// .then(() => console.log(9))

// console.log(10)

// 2,4,10,6,1


const fn = (...args) => {
  // console.log(args)
  for (const arg of args) {
    console.log(arg);
  }
};
const [a, b] = [1, 2];
fn`${a} + ${b} = ${a + b}`;
[ '', ' + ', ' = ', '' ]
1
2
3


fn1`${a} + ${b} = ${a + b}`;

const fn1 = (...args) => {
  let result = ``;
  let numChars = [];
  let c = a;
  let simbol = args[0]
  for(let i = 0; i < simbol.length; i++) {
    if (simbol[i - 1] === '=') {
      result += ''
      result = getRightData(numChars, result);
    } else {
      result = result + `${c}`;
      numChars.push(c);
    }
  }
}

function getRightData(list, str) {
  let len = list[i].lengt;
  for(let i = 0; i < len; i++) {
    str = str + list[i];
    if (i !== len - 1) {
      str += '+';
    } else {
      str += '}';
    }
  }
  return str;
}


function quickSort(arr) {
  let temp = arr[0];
  let left = 0;
  let right = arr.length - 1;
  let result = [];
  while(left ) {
    
  }
}

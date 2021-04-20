let x;
({x} = {x: 1});

console.log(x)

let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
// first // 1
// last // 3
console.log(first, '---', last)

for(let i = 0; i < 3; i++) {
  const i = 5;
  console.log(i)
}
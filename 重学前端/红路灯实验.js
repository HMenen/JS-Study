function changeColor(colorName, time) {
  return new Promise((resolve, reject) => {
    console.log(colorName);
    setTimeout(() => resolve(), time);
  })
}



async function redGreen() {
  //方法一：low
  // while(true) {
  //   await changeColor('red', 1000)
  //     .then(() => changeColor('green', 1000))
  //     .then(() => changeColor('blue', 1000))
  // }

  //方法二
  while(true) {
    await changeColor('red', 1000);
    await changeColor('green', 1000)
    await changeColor('blue', 1000)
  }
}

redGreen();


// function changeColor2(colorName, time) {
//   console.log(colorName);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   })
// }

// async function run() {
//   while(true) {
//     await changeColor2('red', 1000);
//     await changeColor2('green', 2000)
//     await changeColor2('blue', 3000)
//   }
// }

// run();
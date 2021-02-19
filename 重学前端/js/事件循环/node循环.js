//15 17 16 18 1 2 4 14 3 5 6 13 7 8 10 12 9 11  node结果
//15 17 16 18 1 2 4 3 5 14 6 13 7 8 10 9 11 12  
//15 17 16 18 1 2 4 14 3 5 6 13 7 8 10 12 9 11
setTimeout(() => {                                                // settimeout1
  console.log('1')
  new Promise((resolve) => { console.log('2'); resolve(); })      // Promise3
  .then(() => { console.log('3') })
  new Promise((resolve)=> { console.log('4'); resolve()})         // Promise4
  .then(() => { console.log('5') })
  setTimeout(() => {                                              // settimeout3
    console.log('6')
    setTimeout(() => {                                            // settimeout5
      console.log('7')
      new Promise((resolve) => { console.log('8'); resolve() })   // Promise5
      .then( () => {  console.log('9') })
      new Promise((resolve) => { console.log('10'); resolve() })  // Promise6
      .then(() => {  console.log('11') })
    })
    setTimeout(() => { console.log('12') }, 0)                    // settimeout6
  })
  setTimeout(() => { console.log('13') }, 0)                      // settimeout4
})


setTimeout(() => { console.log('14') }, 0) // settimeout2

new Promise((resolve) => { console.log('15'); resolve() })        // Promise1
.then( ()=> { console.log('16') })


new Promise((resolve) => { console.log('17'); resolve() })        // Promise2
.then(() => { console.log('18') })

// 15 17 16 18 1 2 4 3 5 14 6 13 7 8 10 9 11 12
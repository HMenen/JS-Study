
function getCount1 (count) {
    for (let i = 0; i < count; i++) {
        ((n) => {
            setTimeout(() => {
                console.log(n)
            }, 1000);
        }) (i + 1);
    }
}

/**
 * 1、2、3、4、5 每隔1s输出
 * @param {int} count 
 */
function getCount2 (count) {
    for (var i = 0; i < count; i++) {
        ((n) => {
            setTimeout(() => {
                console.log(n);
            }, 1000 * n);
        }) (i + 1);
    }
}

/**
 * 1、2、3、4、5 每隔1s输出;使用let.
 * @param {int} count 
 */
function getCount2_1 (count) {
    for (let i = 1; i < count + 1; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000 * (i));
    }
}

/**
 * 1、2、3、4、5 每隔1s输出
 * @param {int} count 
 */
async function getCount3 (count) {
    for (var i = 0; i < count; i++) {
        // await setNum(i + 1);
        await sleep();
        console.log(i + 1);
    }
}

function sleep () {
    return new Promise((resolve, rejected) => {
        setTimeout(() => resolve(), 1000);
    });
}

function setNum (n) {
    var num = n;
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            console.log(num);
            resolve();
        }, 1000);
    })
}


const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));
async function log() {
  for (let i = 1; i <= 5; i++) {
    await sleep(1000);
    console.log(i);
  }
}

getCount3(5);
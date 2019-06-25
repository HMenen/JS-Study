/**
 * 查找对象原型链上的所有原型对象
 * @param {*} obj 
 */
function getProto (obj) {
    let list = [];
    let v = obj;
    while (v.__proto__ !== null) {
        list.push(v.__proto__);
        v = v.__proto__;
    }
    return list;
}

function A () {}
 const ins = new A();
 let list = getProto(ins);
 console.log(JSON.stringify(list));

/**
 * 实现instanceof方法
 * instanceof的作用：用于判断实例属于哪个构造函数。
 * instanceof的原理：判断实例对象的__proto__属性，
 * 和构造函数的prototype属性，是否为同一个引用（是否指向同一个地址）。
 * @param {*} obj 
 */
 function getInstanceOf (obj1, obj2) {
    let v = obj1.__proto__;
    while (v !== null) {
        if (v === obj2.prototype) {
            return true;
        }
        v = v.__proto__;
    }
    return false;
 }

 function  getPhone (A) {
    const phoneStr = A.replace(/[-' ']/g, '');
    const phoneArr = Array.prototype.slice.call(phoneStr);
    const retArr = [];
    const len = phoneArr.length;
    let index = 0;
    let retStr;
    while (index < len) {
        retArr.push(phoneArr.slice(index, index + 3));
        index = index + 3;
    }
    if (retArr[retArr.length - 1].length === 1) {
        retArr[retArr.length - 1].unshift(retArr[retArr.length - 2].pop());
    }
    retStr = retArr.map(item => {
        return item.join('');
    })
    retStr = retStr.join('-');
    return retStr;
 }

 console.log(getPhone('12344444444123'));

 
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
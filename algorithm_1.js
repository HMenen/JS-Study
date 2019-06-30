/**
 * 判断一个单词是否是回文
 * 回文是指把相同的词汇或句子，在下文中调换位置或颠倒过来，产生首尾回环的情趣，叫做回文，也叫回环。
 * 比如 mamam redivider .
 * @param {string} str 
 */
function checkPalindrom (str) {
    let strArr = Array.prototype.slice.call(str);
    let strArrClone = Object.assign(strArr);
    strArrClone.reverse();
    if (strArr.join() == strArrClone.join()) {
        return true;
    }
    return false;
}
let str = 'asdf';
// console.log(checkPalindrom(str));


/**
 * 去掉一组整型数组重复的值
 * @param {Array} arr 
 */
function unique (arr) {
    let myArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (myArr.indexOf(arr[i]) != -1) {
            continue;
        } else {
            myArr.push(arr[i]);
        }
    }
    return myArr;
}
let arr1 = [1, 3, 4, 6, 1, 9, 1]
// let arr2 = unique(arr1);
// console.log(JSON.stringify(arr2));


/**
 * 统计一个字符串出现最多的字母
 * @param {string} str 
 */
function findMaxDuplicateChar (str) {
    let myArr = new Array(str.length);
    let strArr = Array.prototype.slice.call(str);
    let maxIndex = -1;
    if (str.length == 1) return str;
    strArr.forEach((item, index) => {
        if (myArr[item]) {
            myArr[item]++;
            if (myArr[maxIndex] <= myArr[item]) {
                maxIndex = index;
            }
        } else {
            myArr[item] = 1;
        }
    });
    if (!myArr[0]) maxIndex = 0;
    return str[maxIndex];
}
let str1 = 'afjghdfraaaasdenas';
// console.log(findMaxDuplicateChar(str1));

/**
 * 找出下列正数组的最大差值
 * @param {Array} arr 
 */
function getMaxProfit (arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return max - min;
}
let arr3 = [10, 5, 11, 7, 8, -9];
// console.log(getMaxProfit(arr3));
 

/**
 * 实现一个算法，随机生成指制定长度的字符窜
 * @param {int} len 
 */
function randomString (len) {
    const str = 'abcdefghijklmnopqrstuvwxyz9876543210';
    let temp = '';
    let randomStr = '';
    for (let i = 0; i < len; i++) {
        randomStr = str.charAt(Math.floor(Math.random() * len));
        temp += randomStr;
    }
    return temp;
}
// console.log(randomString(16));

/**
 * 打乱数字数组的顺序
 * 洗牌算法：sort底层为快排，利用了快排的收敛性
 * @param {Array} arr 
 */
function getRandomArr (arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
}
var arr4 = [1,2,3,4,5,6,7,'a','dsfs',8,9,'v'];
// console.log(getRandomArr(arr4));

/**
 * 斐波那契数列
 */
function getFibonacci (n) {
    if (n === 1 || n === 0) {
        return 1;
    } 
    while(n > 1) {
        return getFibonacci(n - 1) + getFibonacci(n - 2)
    }
}

function getFibnacciArr (n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(getFibonacci(i));
    }
    return arr;
}

// console.log(getFibnacciArr(5));

/**
 * bind的实现
 * @param {Function} fun 
 * @param {object} thisArg 
 */
function myBind (fun, thisArg) {
    let args = [].slice.call(arguments, 2);
    return (() => fun.apply(thisArg, args.concat([].slice.call(arguments)))); 
}

/**
 * 深度复制的实现
 * @param {object} source 
 */
function deepClone (source) {
    let obj = source;
    if (typeof source === 'object') {
        Array.isArray(source) ? obj = [] : obj = {};
        Object.keys(source).forEach(item => {
            obj[item] = deepClone(source[item]);
        });
    }
    return obj;
}
let ha = {a: 1, a2: 'aasss',b:{c: 2, d:{e: 3, f: 4}}, ha: 'hahaha'}
let obj = deepClone(ha);
// console.log(obj);


/**
 * 请使用最基本的遍历来实现判断字符串 a 是否被包含在字符串 b 中，并返回第一次出现的位置（找不到返回 -1）。
 * @param {string} a 
 * @param {string} b 
 */
function isContain (a, b) {
    let temp = false;
    for (let i in b) {
        if (a[0] === b[i]) {
            temp = true;
            for (let j in a) {
                if (a[j] !== b[+i + +j]) {
                    temp = false;
                    break;
                }
            }
            if (temp) return i;
        }
    }
    return -1;
}
let b1 = 'qwqqekk';
let a1 = 'qq';
// console.log(isContain(a1, b1))

/**
 * 判断字符串 a 是否被包含在字符串 b 中，并返回第一次出现的位置（找不到返回 -1）
 * @param {string} a 
 * @param {string} b 
 */
function isContain_1 (a, b) {
    return b.indexOf(a);
}
// console.log(isContain(a1, b1))

/**
 * 将一个任意长的数字变成逗号分割的格式
 * @param {*} num 
 */
function parseToMone (num) {
    // let n = ('' + num).split('.');

}
parseToMone(123.456);

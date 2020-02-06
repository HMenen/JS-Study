/**
 * 判断一个单词是否是回文
 * 回文是指把相同的词汇或句子，在下文中调换位置或颠倒过来，产生首尾回环的情趣，叫做回文，也叫回环。
 * 比如 mamam redivider .
 * @param {string} str 
 */
function checkPalindrom (str) {
    let cloneStr = str;
    if (str == [].slice.call(cloneStr).reverse().join('')) {
        return true;
    }
    return false;
}
let str = 'asdfdsa1';
console.log(checkPalindrom(str));


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
 * 实现一个算法，随机生成指定长度的字符窜
 * @param {int} len 
 */
function randomString (len) {
    const str = 'abcdefghijklmnopqrstuvwxyz9876543210';
    let temp = '';
    let randomStr = '';
    for (let i = 0; i < len; i++) {
        randomStr = str.charAt(Math.floor(Math.random() * (str.length)));
        temp += randomStr;
    }
    return temp;
}
console.log(randomString(6));

/**
 * 打乱数字数组的顺序
 * 洗牌算法：sort底层为快排，利用了快排的收敛性
 * @param {Array} arr 
 */
function getRandomArr (arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
}


//每次生成的随机交换位置:
Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
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

/**
 * 斐波那契数列
 * 非递归版
 * @param {number} n 
 */
function fibonacci1(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let n1 = 1;
    let n2 = 1;
    let ret;
    for (let index = 2; index <= n; index++) {
        ret = n1 + n2;
        n1 = n2;
        n2 = ret;
    }
    return ret;
}
  
console.log(fibonacci1(4))
/**
 * 斐波那契数列
 * 动态规划版
 * @param {number} n 
 */
function fibonacci2(n) {
    const arr = [1, 1];
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n];
}

console.log(fibonacci2(4))


// 实现一个add方法，使计算结果能够满足如下预期：
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)                // 9


// 非递归算法
function binary_search(arr, key) {
    var low = 0,
        high = arr.length - 1;
    while(low <= high){
        var mid = parseInt((high + low) / 2);
        if(key == arr[mid]){
            return  mid;
        }else if(key > arr[mid]){
            low = mid + 1;
        }else if(key < arr[mid]){
            high = mid -1;
        }else{
            return -1;
        }
    }
};
var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = binary_search(arr,10);
alert(result); // 9 返回目标元素的索引值

new Promise((resolve, rejected) => {
    rejected('error');
}).then(null, () => console.log('-------'))

new Promise((resolve, rejected) => {
    rejected('error');
}).catch(err => console.log('====')).then(null, (err) => console.log('------123-', err));

var demo1 = async ()=>{
    let result = await new Promise(resolve => {
        setTimeout(()=>{
        console.log('我延迟了一秒');
        resolve('我延迟了一秒')
        }, 1000)
    })
    console.log('我由于上面的程序还没执行完，先不执行“等待一会”');
    return result
}
demo1().then(result=>{
  console.log('输出',result);
})

// 递归遍历

let result1 = [];
// 前序遍历
let dfs1 = function (node) {
    if (node) {
        result1.push(node.value);
        dfs1(node.left);
        dfs1(node.right);
    }
}

// 中序遍历
let result2 = [];
let dfs2 = function (node) {
    if(node) {
        dfs2(node.left);
        result2.push(node.value); // 直到该结点无左子树 将该结点存入结果数组 接下来并开始遍历右子树
        dfs2(node.right);
    }
}

// 后序遍历
let result3 = [];
let dfs3  = function(node) {
    if(node) {
        dfs3(node.left);
        dfs3(node.right);
        result3.push(node.value);
    }
}
dfs(tree);

// 非递归遍历（利用栈：将遍历到的结点都依次存入栈中，拿结果时从栈中访问）
let dfs = function (nodes) {
    let result = [];
    let stack = [];
    stack.push(nodes);
    while(stack.length) { // 等同于 while(stack.length !== 0) 直到栈中的数据为空
        let node = stack.pop(); // 取的是栈中最后一个j
        result.push(node.value);
        if(node.right) stack.push(node.right); // 先压入右子树
        if(node.left) stack.push(node.left); // 后压入左子树
    }
    return result;
}
dfs(tree);

//广度遍历
let rusult4 = [];
let stack = [tree]; // 先将要遍历的树压入栈
let count = 0;
let bfs4 = function() {
    let node = stack.pop();
    if (node) {
        result4.push(node.value);
        if (node.left) result4.push(node.left.value);
        if (node.right) result4.push(node.right.value);
        count++;
        bfs4();
    }
}

//非递归算法
function bfs(node) {
    let result = [];
    let queue = [];
    queue.push(node);
    let pointer = 0;
    while(pointer < queue.length) {
        let node = queue[pointer++]; // // 这里不使用 shift 方法（复杂度高），用一个指针代替
        result.push(node.value);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return result;
}


//1.深度优先遍历的递归写法
function deepTraversal(node){
    let nodes=[];
    if(node!=null){
        nodes.push[node];
        let childrens=node.children;
        for(let i=0;i<childrens.length;i++)
            deepTraversal(childrens[i]);
    }
    return nodes;
}

function dfs(node) {
    let result = [];
    let stack = [];
    while(stack.length || node) { // 是 || 不是 &&
        if(node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            result.push(node.value);
            //node.right && stack.push(node.right);
            node = node.right; // 如果没有右子树 会再次向栈中取一个结点即双亲结点
        }
    }
    return result;
}

dfs(tree);



// 递归算法
function binary_search(arr,low, high, key) {
    if (low > high){
        return -1;
    }
    var mid = parseInt((high + low) / 2);
    if(arr[mid] === key){
        return mid;
    }else if (arr[mid] > key){
        high = mid - 1;
        return binary_search(arr, low, high, key);
    }else if (arr[mid] < key){
        low = mid + 1;
        return binary_search(arr, low, high, key);
    }
};

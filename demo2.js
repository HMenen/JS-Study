Function.prototype.my_bind = function (context, ...args) {
    console.log(args);
    return () => this.apply(context, args);
}

function bind(func, thisArg) {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments, 2);
    return function () {
        return func.apply(thisArg, args.concat(slice.call(arguments)));
    };
}

let a = {name: 'hello', age: 1, grade: 100};
function b () {
    console.log('-----' + this.name);
    console.log('-----' + this.age);
    console.log('-----' + this.grade);
}

// const d = bind(b, a, [1, 2]);
// d();

// const c = b.my_bind(a, '222', 111);
// c();


/**
 * 深度拷贝
 */
// function deepClone (myObj, items, key) {
//     let obj = {};
//     for (let item in items) {
//         if (typeof items[item] === 'object' && items[item] !== null) {
//             myObj[item] = {};
//             deepClone(myObj, items[item], item);
//         } else {
//             obj[item] = items[item];
//         }
//     }
//     if (key === undefined) {
//         Object.assign(myObj, obj);
//     } else {
//         Object.assign(myObj[key], obj);
//     }
//     return myObj;
// }


function deepClone(obj) {
    let result = obj;
    if (obj && typeof obj === 'object') {
        result = {};
        if (Array.isArray(obj)) result = [];
        Object.keys(obj).forEach(function(key) {
            result[key] = deepClone(obj[key]);
        })
        return result;
    }
    return result;
}

let ha = {a: 1, a2: 'aasss',b:{c: 2, d:{e: 3, f: 4}}, ha: 'hahaha'}
let obj = deepClone(ha);
console.log(obj);

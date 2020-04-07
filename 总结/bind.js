/**
 * bind的实现
 * @param {obj} sourceArg 
 * @param {obj} thisArg 
 */
function myBind (fun, thisArg) {
    let args = Array.prototype.slice.call(arguments, 2);
    return function () {
        return fun.apply(thisArg, args.concat(Array.prototype.slice.call(arguments)))
    };
}

/**
 * 符大神源码
 * @param {object} func 
 * @param {object} thisArg 
 */
function bind(func, thisArg) {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments, 2);
    return function () {
        return func.apply(thisArg, args.concat(slice.call(arguments)));
    };
}

function a () {
    let args = Array.prototype.slice.call(arguments);
    console.log(args);
}

b = {name: 'hahha', age: 'dadad', im: 1};
let fun = myBind(a, b, 111, 222);
fun('aaa');




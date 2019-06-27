Function.prototype.my_bind = function (context, ...args) {
    console.log(args);
    return () => this.apply(context, args);
}

function bind(func, thisArg) {
    var slice = Array.prototype.slice;
    console.log('=====111======' + JSON.stringify(arguments));
    var args = slice.call(arguments, 2);
    console.log('=====222======' + JSON.stringify(arguments));
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

const d = bind(b, a, [1, 2]);
d();

// const c = b.my_bind(a, '222', 111);
// c();
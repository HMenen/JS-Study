Function.prototype.my_bind = function (context, args) {
    console.log(args);
    console.log('======================' + this);
    return () => this.apply(context, Array.prototype.slice.call(args).concat([].slice.call(arguments)));
}

let a = {name: '111', age: 1};
function b () {
    let name = '123';
    let grade = 0;
    console.log('-----' + this.name);
    console.log('-----' + this.age);
    console.log('-----' + this.grade);
}

const c = b.my_bind(a, '222', 111);
c();
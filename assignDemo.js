/**
 * 实现assign方法
 * @param {obj} target 
 * @param  {...any} source 
 */
function myAssign(target, ...source) {
    source.forEach(ele => {
        for (let item of Object.keys(ele)) {
            target[item] = ele[item];
        }
    });    
}

var a = {'a': 1};
var b = {'b': 2, 'c': 3};
var c = {'c': 4, 'd': 5};
myAssign(a, b, c);
console.log(JSON.stringify(a));
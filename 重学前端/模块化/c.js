var moduleA = require('./a');

console.log(moduleA.counter1);
setTimeout(() => console.log(moduleA.counter1), 1000)
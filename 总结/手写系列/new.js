function myNew(func, ...arg) {
  let obj = {};
  obj.__proto__ = func.prototype;
  let res = func.apply(obj, arg);
  return res instanceof Object? res: obj;
}


function Animal(name) {
  this.name = name;
}
let animal = myNew(Animal, 'dog');
console.log(animal)  // dog
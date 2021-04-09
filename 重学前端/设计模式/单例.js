let singleCase = function(name){
  this.name = name;
};
singleCase.prototype.getName = function(){
  return this.name;
}
// 获取实例对象
let getInstance = (function() {
  var instance = null;
  return function(name) {
      if(!instance) {//相当于一个一次性阀门,只能实例化一次
          instance = new singleCase(name);
      }
      return instance;
  }
})();

// 测试单体模式的实例,所以one===two
let one = getInstance("one");
let two = getInstance("two");   
// console.log('----------', one === two, one.name, two.name)

function SingleCase1(name) {
  this.name = name;
}

let getInstance1 = (function () {
  let instance;
  return function(name) {
    if (!instance) {
      instance = new SingleCase1(name);
    }
    return instance;
  }
})()

let a1 = getInstance1('a1Name');
let a2 = getInstance1('a2Name');
console.log(a1.name, '---1--', a2.name);
console.log(a1 === a2);

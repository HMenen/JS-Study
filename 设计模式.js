/**
 * 单例模式 Singleton Pattern:
 * 保证一个类只有一个实例，并提供一个访问它的全局访问点（调用一个类，任何时候返回的都是同一个实例）。
 * 实现方法：使用一个变量来标志当前是否已经为某个类创建过对象，如果创建了，则在下一次获取该类的实例时，直接返回之前创建的对象，否则就创建一个对象。
'''
 *  */
  var Demo = (function() {
  let instance = null;
  return function(name) {
    if (!instance) {
      instance = this;
      init(name);
    }
    return instance;
  }
  function init(name) {
    this.name = name
    console.log('已初始化')
  }
})()

// let demo1 = Demo('demo1');
// let demo2 = Demo('demo2');
// console.log(demo2.name)


var Singleton = function(name) {
  this.name = name;
  this.instance = null;
}
Singleton.getInstance = function(name) {
  if(!this.instance) {
      this.instance = new Singleton(name);
  }
  return this.instance;
}
var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
// 指向的是唯一实例化的对象
console.log(a === b);

es6

class Singleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }
    // 构造一个广为人知的接口，供用户对该类进行实例化
    static getInstance(name) {
        if(!this.instance) {
            this.instance = new Singleton(name);
        }
        return this.instance;
    }
}


/**
 * 工厂模式
 * 工厂模式类似于现实生活中的工厂可以产生大量相似的商品，去做同样的事情，实现同样的效果;这时候需要使用工厂模式。
 * 优点：能解决多个相似的问题。
 * 缺点：不能知道对象识别的问题(对象的类型不知道)。
 */
function CreatePerson(name,age,sex) {
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.sex = sex;
  obj.sayName = function(){
      return this.name;
  }
  return obj;
}
var p1 = new CreatePerson("longen",'28','男');
var p2 = new CreatePerson("tugenhua",'27','女');
// console.log(p1.name); // longen
// console.log(p1.age);  // 28
// console.log(p1.sex);  // 男
// console.log(p1.sayName()); // longen
// console.log(p1 instanceof Object)


/**
 * 代理模式
 * @param {String} msg 
 */
//代理
function proxySendMsg(msg) {
  if (typeof msg === undefined) {
    console.log(null);
    return;
  }
  // 有消息则进行过滤
  msg = ('' + msg).replace(/泥\s*煤/g, '');
  sendMessage(msg)
}

function sendMessage(msg) {
  console.log(msg);
}
sendMessage('泥煤呀泥 煤呀'); // 泥煤呀泥 煤呀
proxySendMsg('泥煤呀泥 煤'); // 呀
proxySendMsg(); // null

//观察者模式/发布-订阅模式, 装饰者模式
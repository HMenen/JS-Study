/**
 * 手写instance  === 知识点：原型对象的认识
 * instanceof: 判断在一个实例对象的原型链上是否包含这个类的propertype属性
 * @param {Object} obj1 
 * @param {Object} obj2 
 */
function myInstanceOf(obj1, obj2) {
  let protoObj = obj1.__proto__;
  while(protoObj) {
    if (protoObj === obj2.prototype) {
      return true;
    }
    protoObj = protoObj.__proto__;
  }
  return false;
}

let a = []

function Person(){};
new Person() instanceof Person;

[] instanceof Object; //true
// new Date() instanceof Object;//true
console.log(myInstanceOf(Person, Array))
console.log(myInstanceOf([], Array))



/**
 * 实现instanceof方法
 * instanceof的作用：用于判断实例属于哪个构造函数。
 * instanceof的原理：判断实例对象的__proto__属性，
 * 和构造函数的prototype属性，是否为同一个引用（是否指向同一个地址）。
 * @param {*} obj 
 */
function getInstanceOf (obj1, obj2) {
  let v = obj1.__proto__;
  while (v !== null) {
      if (v === obj2.prototype) {
          return true;
      }
      v = v.__proto__;
  }
  return false;
}


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 1 || s.length === 0) {
      return s;
    }
    let maxLen = 1, maxLeft = 0, left = 0, right = 0;
    for (let i = 0; i < s.length; i++) {
      left = i - 1;
      right = i + 1;
      let len = 1;
      while(left >= 0 && s[i] === s[left]) {
        len++;
        left--;
      }
      while(right < s.length && s[i] === s[right]) {
        len++;
        right++;
      }
      
      while(left >= 0 && right < s.length && s[left] === s[right]) {
        len += 2;
        left--;
        right++;
      }
      if (len > maxLen) {
        maxLen = len;
        maxLeft = left;
      }
    }
    return s.substring(maxLeft + 1, maxLen + maxLeft + 1)
  };

  var aa = "babad";
  console.log(longestPalindrome(aa))
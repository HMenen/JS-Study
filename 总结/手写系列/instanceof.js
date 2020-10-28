/**
 * 
 * @param {*} obj1 
 * @param {*} obj2 
 */
function myInstanceOf(obj1, obj2) {
  let p = obj1.__proto__;
  while(p) {
    if (p === obj2.prototype) {
      return true;
    }
    p = p.__proto__; 
  }
  return false;
}

console.log(myInstanceOf([], Array))
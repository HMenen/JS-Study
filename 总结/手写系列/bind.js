/**
 * 
 * @param {*} context 
 * @param  {...any} args 
 */
Function.prototype.myBind = function(context, ...arg1) {
  const func = this;
  return (...args) => func.apply(context, arg1.concat(args));
}

Function.prototype.bindNew1 = function (context, ...args) {
  return (...newArgs) => this.apply(context, [...args, ...newArgs]);
};

const obj = { name: '12121' };
function test(a, b) {
  console.log('=====', this.name, a, b)
}

test.myBind(obj, 'hahah')('去啊转');
// test.bind(obj, 'hahah')('去啊转');



// test
const test1 = {
  name: "fy",
  showName: function (last) {
    console.log(this.name + " is " + last);
  },
};
test1.showName("handsome"); // fy is handsome
test1.showName.bind({ name: "Mr.fy" })("handsome");
test1.showName.myBind({ name: "Mr.fy" })("handsome");
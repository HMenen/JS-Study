// var a = 'Hello world';

// module.exports.a = a]

// const a = {
//   counter: 3,
//   inCounter: () => {
//     a.counter += 1;
//   }
// }
// module.exports = a;

var counter = 1;
function inCounter(){
  counter += 1;
  return counter
}
setTimeout(() => ++counter, 500)

module.exports = {
  inCounter,
  counter1: counter
  // get counter() {
  //   return counter;
  // }
};
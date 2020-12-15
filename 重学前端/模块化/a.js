// var a = 'Hello world';

// module.exports.a = a]

// const a = {
//   counter: 3,
//   inCounter: () => {
//     a.counter += 1;
//   }
// }
// module.exports = a;

var counter = 3;
function inCounter(){
  counter += 1;
}


module.exports = {
  inCounter,
  counter
  // get counter() {
  //   return counter;
  // }
};
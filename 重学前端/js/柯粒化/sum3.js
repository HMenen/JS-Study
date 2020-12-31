/**
 * 
 * 而只考虑了单次连续调用时能给出正确结果，但实际上真要业务中有这么个函数，应该且必须允许这种调用方式的存在。
 * 很多写法返回的函数一直是同一个，就是那个add它自己，这就注定无法支持上面的使用方式，
 * 写法大体是把每次传入的参数push到同一个数组里面，然后在toString时求和并返回，
 * 也有每次调用时直接求出值并存下来，toString时直接返回。
 *  链接：https://zhuanlan.zhihu.com/p/296852112
 * @param  {...any} args 
 * 
 * 这种写法保存了每次调用后的值
 */

function add(...args) {
  var f = add.bind(null, ...args);
  f.toString = function() {
    return args.reduce((prev, now) => {
      return prev + now
    }, 0)
  }
  return f
}
add.toString = () => 0

console.log(  add + 1  ) // log出1
console.log(  add() + 1  )
const add3  = add(0, 1)(2) // add3的功能是对传入的数值加3并返回
console.log(  add3(2) + 0  ) // log出5
const add8  = add3(1)(2)(2) // add8由add3的持续调用得到   //10
const add8p = add3(5) // 另一种方式得到add8，注意两个add8不是同一个函数，起名add8p  //15
const add9  = add8(1) // 由add8再传入得到add9函数  
console.log(  add9(1) + 3  ) // log出13
console.log(  add8(1) + 3  ) // log出12
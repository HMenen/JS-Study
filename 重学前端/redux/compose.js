function componse(...funcs) {
  return funcs.reduce((a , b) => (...args) => a(b(...args)))
}
// 最后得到的是  (...args) => fn1(fn2(fn3(...args)))
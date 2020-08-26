/**
 * 手动实现一个async await
 */

const getData1 = () =>new Promise(resolve => setTimeout(() => resolve("data111======="), 1000))
const getData2 = () =>new Promise(resolve => setTimeout(() => resolve("data222======="), 1000))

function asyncToGenerator(generatorFunc) {
  return function() {
    const gen = generatorFunc.apply(this, arguments)
    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let generatorResult
        try {
          generatorResult = gen[key](arg)
        } catch (error) {
          return reject(error)
        }
        const { value, done } = generatorResult
        if (done) {
          console.log('=-=-=-=-=-', value)
          return resolve(value)
        } else {
          return Promise.resolve(value).then(val => step('next', val), err => step('throw', err))
        }
      }
      step("next")
    })
  }
}

function asyncToGenerator1(generatorFunc) {
  const gen = generatorFunc.apply(this, arguments);
  return new Promise((resolved, rejected) => {
    function step(key, args) {
      let generatorResult;
      try {
        generatorResult = gen[key](args);
        console.log('--generatorResult--', generatorResult)
      } catch (error) {
        return rejected(error)
      }
      const { value, done } = generatorResult;
      if (done) {
        resolved(value);
      } else {
        return Promise.resolve(value).then(value => {
          // console.log('=-=-=-=-=-', value)
          step('next', value)
        }, err => step('throw', err))
      }
    }
    step('next');
  })
}

function *test() {
  const a1 = yield getData1();
  console.log('--1--------');
  console.log('--1a--------', a1);
  const a2 = yield getData2();
  console.log('--2--------');
  console.log('--2a--------', a2);
}

// asyncToGenerator(test)()
asyncToGenerator1(test)


// const a = new Promise((resove) => {
//   resove(1)
// })
// console.log(a)
// a.then(res => console.log('====', res))
// console.log(Promise.resolve(111))
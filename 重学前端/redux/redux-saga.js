// https://segmentfault.com/a/1190000016570727

import axios from 'axios';
const takers = []; // 存generator

// 执行gen
function runGen(dispatch, gen) {
  // 防止无限循环
  if (!takers.length) {
    return;
  }
  // 遍历执行generator
  takers.forEach((taker, key) => {
    const g = taker();
    // 删除已执行的taker
    takers.splice(key, 1);
    // 执行yield axios.post并返回一个promise
    const userPromise = g.next().value;
    userPromise.then((user) => {
      // 把{dispatch, user}设置为上一步的返回值，并执行yield dispatch
      g.next({ dispatch, user });
      // 执行yield takers
      g.next()  
    });
  })
}

export default function fetchMiddleware(_ref2) {
    var getState = _ref2.getState,
        dispatch = _ref2.dispatch;
    // 初始化时注册taker,把generator添加到takers，用于dispatch时执行
    fetchMiddleware.run = () => takers.push(gen)
    // 改变dispatch
    return (next) => {
        return (action) => {
            // dispatch时执行这里
            var result = next(action);
            runGen(dispatch, gen)
            return result;
        };
    };
    return fetchMiddleware;
}


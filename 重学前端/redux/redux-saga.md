##### redux-saga相比于其他中间件的优点
redux-saga 是一个库，致力于在React/Redux应用中简化异步操作（side effects，即像异步获取远程数据或者浏览器缓存数据）。

比如解决异步竞态问题：takeLatest

redux-saga的本质，集中处理副作用

异步逻辑抽离到了saga文件，可以构建统一的 集中的异步处理中心，可以直接分发action触发对应逻辑，复用也简单，分发同一个action即可，如果有特殊定制，只需另加saga方法特殊处理,是store reducer专注处理state，接口与实现 分离


查询与责任分离，保证了action的纯洁性，符合redux设计思想实现以同步方式写异步操作，容易理解，逻辑清晰通过发送指令而不是直接调用让异步操作变得容易测试监听、执行自动化提供了丰富强大的指令来完成复杂的操作，比如无阻塞调用，同时执行多个任务等讲道理，任何redux异步操作都可以让saga这个中间件来完成，非常复杂的同样可以胜任，并且很容易理解（异步操作以同步方式写）和测试。再配合dva，可以减轻redux的复杂度同时完成更强大的功能。这样以来，redux配合saga，就可以让它们各司其职，整个思路也变得清晰起来：redux 倡导action和reducer要纯洁，那就让所有异步操作这些不纯洁的任务交给saga，reducer不用变，还是纯函数；定义好对应action的sagas专门用来处理异步操作，我只要在组件需要的地方里dispatch 纯action就行了，符合redux设计思想。

链接：https://zhuanlan.zhihu.com/p/30034732
https://www.yuque.com/aikegunaike/kgnyet/etyq67
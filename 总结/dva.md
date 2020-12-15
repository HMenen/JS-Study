1. dva
dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架

dva 通过 model 的概念把一个领域的模型管理起来，包含同步更新 state 的 reducers，处理异步逻辑的 effects，订阅数据源的 subscriptions 。

2. Dva 概念 -- 数据流向
数据的改变发生通常是通过用户交互行为或者浏览器行为（如路由跳转等）触发的，当此类行为会改变数据的时候可以通过 dispatch 发起一个 action，如果是同步行为会直接通过 Reducers 改变 State ，如果是异步行为（副作用）会先触发 Effects 然后流向 Reducers 最终改变 State，所以在 dva 中，数据流向非常清晰简明，并且思路基本跟开源社区保持一致（也是来自于开源社区）。


Effect
Effect 被称为副作用，在我们的应用中，最常见的就是异步操作。它来自于函数编程的概念，之所以叫副作用是因为它使得我们的函数变得不纯，同样的输入不一定获得同样的输出。
dva 为了控制副作用的操作，底层引入了redux-sagas做异步流程控制，由于采用了generator的相关概念，所以将异步转成同步写法，从而将effects转为纯函数。至于为什么我们这么纠结于 纯函数，如果你想了解更多可以阅读Mostly adequate guide to FP，或者它的中文译本JS函数式编程指南。

Subscriptions 是一种从 源 获取数据的方法，它来自于 elm。

Subscription 语义是订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action。数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。


3. Model 对象的属性
namespace: 当前 Model 的名称。整个应用的 State，由多个小的 Model 的 State 以 namespace 为 key 合成
state: 该 Model 当前的状态。数据保存在这里，直接决定了视图层的输出
reducers: Action 处理器，处理同步动作，用来算出最新的 State
effects：Action 处理器，处理异步动作

4. Effect
4.1 
Action 处理器，处理异步动作，基于 Redux-saga 实现。Effect 指的是副作用。根据函数式编程，计算以外的操作都属于 Effect，典型的就是 I/O 操作、数据库读写。
Effect 是一个 Generator 函数，内部使用 yield 关键字，标识每一步的操作（不管是异步或同步）。
4.2 call 和 put
dva 提供多个 effect 函数内部的处理函数，比较常用的是 call 和 put。
call：执行异步函数
put：发出一个 Action，类似于 dispatch


export default function connect(mapStateToProps, mapDispatchToProps, mergeProps, options = {}) {}
connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

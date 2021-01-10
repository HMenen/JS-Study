在React中，如果是由React引发的事件处理（比如：onClick引发的事件处理），调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.setState。 “除此之外”指的是：绕过React通过addEventListener直接添加的事件处理函数和setTimeout/setInterval产生的异步调用。

作者：不洗碗工作室
链接：https://juejin.cn/post/6844903513198166030
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


##### setState 是同步的（不接受反驳）。
所谓 setState ‘异步’的说法，其实只是让 setState 推迟执行了而已，并不是真正的异步。
setState设计成‘异步’的原因不只是从提高 react 性能方面考虑，同时还牵扯到 react 的很多 api 设计，保证生命周期的正常运转。
setState 除了原生事件和 setTimeout 之外，都是“异步”的。

作者：oak5483
链接：https://juejin.cn/post/6906081894128566285
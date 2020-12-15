在React中，如果是由React引发的事件处理（比如：onClick引发的事件处理），调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.setState。 “除此之外”指的是：绕过React通过addEventListener直接添加的事件处理函数和setTimeout/setInterval产生的异步调用。

作者：不洗碗工作室
链接：https://juejin.cn/post/6844903513198166030
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
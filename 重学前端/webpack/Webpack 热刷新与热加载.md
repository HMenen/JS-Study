##### https://zhuanlan.zhihu.com/p/30623057
1. Webpack 热刷新
简单来说 Webpack 热刷新就是 Webpack-dev-server 会启动一个服务，来监听 webpack 打包文件变化，有文件更新时 webpack-dev-server 通知浏览器某个文件变化了，浏览器就会刷新当前页面。


服务端通过 EventSource 发送消息给客户端了，我们来看看客户端的通信实现。
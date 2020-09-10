1. 核心概念
```
entry：入口。webpack是基于模块的，使用webpack首先需要指定模块解析入口(entry)，webpack从入口开始根据模块间依赖关系递归解析和处理所有资源文件。

output：输出。源代码经过webpack处理之后的最终产物。

loader：模块转换器。本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。因为 Webpack 只认识 JavaScript，所以Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。

plugin：扩展插件。基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

module：模块。除了js范畴内的es module、commonJs、AMD等，css @import、url(...)、图片、字体等在webpack中都被视为模块。
另外webpack4开始 mode 变成一个重要概念，webpack为不同 mode提供了一些默认值，附上阮一峰老师的吐槽
```
#### https://github.com/LuckyWinty/blog/blob/master/markdown/webpack/Webpack4%E6%89%93%E5%8C%85%E6%9C%BA%E5%88%B6%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90.md

webpack是一个打包模块化 JavaScript 的工具，在 webpack里一切文件皆模块，通过 Loader 转换文件，通过 Plugin 注入钩子，最后输出由多个模块组合成的文件。 webpack专注于构建模块化项目。

我们先从简单的入手看，当 webpack 的配置只有一个出口时，不考虑分包的情况，其实我们只得到了一个bundle.js的文件，这个文件里包含了我们所有用到的js模块，可以直接被加载执行。那么，我可以分析一下它的打包思路，大概有以下4步：
1.利用babel完成代码转换及解析,并生成单个文件的依赖模块Map
2.从入口开始递归分析，并生成整个项目的依赖图谱
3.将各个引用模块打包为一个立即执行函数
4.将最终的bundle文件写入bundle.js中

###### 单个文件的依赖模块Map
我们会可以使用这几个包：

@babel/parser：负责将代码解析为抽象语法树
@babel/traverse：遍历抽象语法树的工具，我们可以在语法树中解析特定的节点，然后做一些操作，如ImportDeclaration获取通过import引入的模块,FunctionDeclaration获取函数
@babel/core：代码转换，如ES6的代码转为ES5的模式
由这几个模块的作用，其实已经可以推断出应该怎样获取单个文件的依赖模块了，转为Ast->遍历Ast->调用ImportDeclaration。代码如下：

##### 核心概念
```
Entry 入口，webpack执行构建的第一步将从Entry开始，可抽象成输入
Module 模块，在webpack里一切皆模块，一个模块对应着一个文件。webpack会从配置的Entry开始递归找出所有依赖的模块。
Chunk 代码块，一个Chunk由多个模块组合而成，用于代码合并与分割。
Loader 模块转换器，用于把模块原内容按照需求转换成新内容。
Plugin 扩展插件，在webpack构建流程中特定时机会广播出对应的事件，插件可以监听这些事件的发生，在特定时机做对应的事情。

作者：amCow
链接：https://www.jianshu.com/p/8dd5885bfb66

```
##### webpage拆包
将大的vender，拆解为小的模块，提高并行加载速度
避免单一vender过大问题
在多页面应用中，还可细分仅加载页面必要模块

##### 流程概括
初始化配置参数 -> 绑定事件钩子回调 -> 确定Entry逐一遍历 -> 使用loader编译文件 -> 输出文件
webpack的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

初始化参数：从配置文件和Shell语句中读取与合并参数，得出最终的参数；
开始编译： 用上一步得到的参数初始化Complier对象，加载所有配置的插件，执行对象的run方法开始执行编译；
确定入口： 根据配置中的entry找出所有入口文件；
编译模块：从入口文件出发，调用所有配置的Loader对模块进行翻译，再找出该模块依赖的模块，再递归本步骤知道所有入口依赖的文件都经过了本步骤的处理；
完成模块编译： 在经过第4步使用Loader翻译完所有模块后，得到了每个模块被翻译后的最终内容以及他们之间的依赖关系；
输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的Chunk，再把每个Chunk转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
输出完成： 在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。
在以上过程中，webpack会在特定的时间点广播出特定的时间，插件在监听到感兴趣的时间后会执行特定的逻辑，并且插件可以调用Webpack提供的API改变Webpack的运行结果。


##### plugin
在 webpack 下，它推荐的插件写法是这样：
```
class MyWebpackPlugin {
  apply(compiler) {
    // 定义一个 class，其中有一个 apply 方法，
    // apply 方法接收 webpack 的 compiler 对象
  }
}
```
在插件完成后，我们就可以在配置文件中调用插件：
```
{
  plugins: [
    new MyWebpackPlugin()
  ]
}
```
webpack 在运行时，会调用我们的插件定义的 apply 方法：
```
if (Array.isArray(options.plugins)) {
  for (const plugin of options.plugins) {
    if (typeof plugin === 'function') {
      plugin.call(compiler, compiler);
    } else {
      plugin.apply(compiler);
    }
  }
}
```
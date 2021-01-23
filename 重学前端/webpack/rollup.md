##### https://www.jianshu.com/p/6a7413481bd2
rollup是一款小巧的javascript模块打包工具，更适合于库应用的构建工具;可以将小块代码编译成大块复杂的代码，基于ES6 modules,它可以让你的 bundle 最小化，有效减少文件请求大小,vue在开发的时候用的是webpack,但是最后将文件打包在一起的时候用的是 rollup.js

##### rollup优势
自动 Tree-shaking(Tree-shaking, 也被称为 "live code inclusion," 它是清除实际上并没有在给定项目中使用的代码的过程，但是它可以更加高效。)
打包速度快
配置简单

##### rollup VS webpack
rollup更适合构建javascript库,也可用于构建绝大多数应用程序;但是rollup 还不支持一些特定的高级功能，尤其是用在构建一些应用程序的时候，特别是代码拆分和运行时态的动态导入 dynamic imports at runtime.如果你的项目中需要这些功能,则使用webpack更为适合;

##### 特性:
1. rollup 所有资源放同一个地方，一次性加载,利用 tree-shake特性来  剔除未使用的代码，减少冗余
2. webpack 拆分代码、按需加载  webpack2已经逐渐支持tree-shake
rollup:
  1.打包你的 js 文件的时候如果发现你的无用变量，会将其删掉。
  2.可以将你的 js 中的代码，编译成你想要的格式
webpack:
1.代码拆分
2.静态资源导入（如 js、css、图片、字体等）
拥有如此强大的功能，所以 webpack 在进行资源打包的时候，就会产生很多冗余的代码。

##### Tree-shaking
本文所说的前端中的tree-shaking可以理解为通过工具"摇"我们的JS文件，将其中用不到的代码"摇"掉，是一个性能优化的范畴。具体来说，在 webpack 项目中，有一个入口文件，相当于一棵树的主干，入口文件有很多依赖的模块，相当于树枝。实际情况中，虽然依赖了某个模块，但其实只使用其中的某些功能。通过 tree-shaking，将没有使用的模块摇掉，这样来达到删除无用代码的目的。


Dead Code 一般具有以下几个特征
•代码不会被执行，不可到达
•代码执行的结果不会被用到
•代码只会影响死变量（只写不读）


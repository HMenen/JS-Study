##### require表示的是运行时加载。而import表示的是编译时加载（效率更高），由于是编译时加载，所以import命令会提升到整个模块的头部。

require和import的区别
##### 遵循的模块化规范不一样

模块化规范：即为 JavaScript 提供一种模块编写、模块依赖和模块运行的方案。谁让最初的 JavaScript 是那么的裸奔呢——全局变量就是它的模块化规范。require/exports 出生在野生规范当中，什么叫做野生规范？即这些规范是 JavaScript 社区中的开发者自己草拟的规则，得到了大家的承认或者广泛的应用。比如 CommonJS、AMD、CMD 等等。import/export 则是名门正派。TC39 制定的新的 ECMAScript 版本，即 ES6（ES2015）中包含进来。

##### 出现的时间不同

require/exports 相关的规范由于野生性质，在 2010 年前后出生。AMD、CMD 相对命比较短，到 2014 年基本上就摇摇欲坠了。一开始大家还比较喜欢在浏览器上采用这种异步小模块的加载方式，但并不是银弹。随着 Node.js 流行和 Browsersify 的兴起，运行时异步加载逐渐被构建时模块合并分块所替代。Wrapper 函数再也不需要了。 2014 年 Webpack 还是新玩意，现在已经是前端必备神器了。

##### CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用，举例如下
https://zhuanlan.zhihu.com/p/352878760

Babel 是一个 JavaScript 编译器
Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。下面列出的是 Babel 能为你做的事情：

语法转换
通过 Polyfill 方式在目标环境中添加缺失的特性 (通过 @babel/polyfill 模块)
源码转换 (codemods)


Polyfill
Polyfill是一个js库，主要抚平不同浏览器之间对js实现的差异 

##### Babel和Polyfill
Babel:Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码。注意：Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API。有的同学可能分不清哪些是ES6句法，哪些是API，这个暂时先放一放，后面会讲。

Polyfill:Polyfill的准确意思为，用于实现浏览器并不支持的原生API的代码。

Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

##### 大多数编译器的工作过程可以分为三部分：
Parse(解析)：将源代码转换成更加抽象的表示方法（例如抽象语法树）
Transform(转换)：对（抽象语法树）做一些特殊处理，让它符合编译器的期望
Generate(代码生成)：将第二步经过转换过的（抽象语法树）生成新的代码

原理很简单，核心就是 AST (抽象语法树) (https://segmentfault.com/a/1190000016231512?utm_source=tag-newest)。首先将源码转成抽象语法树，然后对语法树进行处理生成新的语法树，最后将新语法树生成新的 JS 代码，整个编译过程可以分为 3 个阶段 parsing (解析)、transforming (转换)、generating (生成)，都是在围绕着 AST 去做文章，话不多说上图：

一般来说，Parse 阶段可以细分为两个阶段：词法分析（Lexical Analysis, LA）和语法分析（Syntactic Analysis, SA）。
### 单页面应用（SinglePage Web Application，SPA）：https://segmentfault.com/
1. 通过hash改变，利用window.onhashchange 监听。
window.addEventListener('hashchange', function(e) {console.log(e)})

2. 当点击浏览器后退按钮或js调用history.back都会触发onpopstate事件
popstate
popstate 事件能监听除 history.pushState() 和 history.replaceState() 外 url 的变化。

window.onpopstate是popstate事件在window对象上的事件处理程序.
每当处于激活状态的历史记录条目发生变化时,popstate事件就会在对应window对象上触发. 如果当前处于激活状态的历史记录条目是由history.pushState()方法创建,或者由history.replaceState()方法修改过的, 则popstate事件对象的state属性包含了这个历史记录条目的state对象的一个拷贝.

3. 界面是通过URL来定位的，所以单页面应用从头到尾它的html地址都是不变的，注意哦，是html地址，而不是URL地址，这两者还是有点区别的。
单页面跳转仅刷新局部资源，公共资源(js、css等)仅需加载一次

多页面应用（MultiPage Application，MPA）：
多个界面间的跳转，会伴随着html地址的改变
多页面跳转刷新所有资源，每个公共资源(js、css等)需选择性重新加载，常用于 app 或 客户端等


SPA 的一个重要实现就是改变路由时，页面不刷新。实现这个功能，通常有两种方式：使用 window.history 对象或 location.hash。
　　window.history 包含了浏览器的历史信息，它有以下几种常用方法：
　　history.back()：与在浏览器点击后退按钮相同；
　　history.forward()：与在浏览器中点击按钮向前相同；
　　history.go(n)：接受一个整数作为参数，移动到该整数指定的页面，比如 go(1) 相当于 forward()，go(-1) 相当于 back()，go(0) 相当于刷新当前页面。
　　HTML5 对 history 对象新增了 pushState() 和 replaceState() 方法，这两个方法可以往历史栈中添加数据，给用户的感觉就是浏览器的 url 改变了，但是页面并没有重新加载。pushState() 是在浏览记录中添加一个新记录，replaceState() 则是修改当前的浏览器记录，这是二者的细微差别，使用时参数的字段和含义都是一样的。
  window.history.pushState(state, title, url)
　 hash 是 location 对象的属性，它指的是当前 url 的锚，也就是从 # 号开始的部分。修改 location.hash 并监听 window 的 hashchange 事件，也能达到同样的目的。


hash 模式和 history 模式
我们都知道单页应用的路由有两种模式：hash 和 history。如果我们在 hash 模式时不使用 history.pushState() 和 history.replaceState() 方法，我们就只需要在 hashchange 事件回调里编写 url 改变时的逻辑就行了。而 history 模式下，我们不仅要在 popstate 事件回调里处理 url 的变化，还需要分别在 history.pushState() 和 history.replaceState() 方法里处理 url 的变化。而且 history 模式还需要后端的配合，不然用户刷新页面就只有 404 可以看了?

所以 hash 模式下我们的工作其实是更简单的，但为什么现在都推荐用 history 模式呢？总不是 hash 模式下的 url 太丑了，毕竟这是个看脸的世界?

不过 vue-router 在浏览器支持 pushState() 时就算是 hash 模式下也是用 history.pushState() 来改变 url，不知道有没什么深意？还有待研究...
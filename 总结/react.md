##### State 的更新可能是异步的
出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
```
this.setState((state, props) => ({ counter: state.counter + props.increment}))

```

##### react事件
在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 。
打开一个新页面，你可以这样写：
```
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

##### key
```
1. key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。

如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。可以看看 Robin Pokorny 的深度解析使用索引作为 key 的负面影响这一篇文章。如果你选择不指定显式的 key 值，那么 React 将默认使用索引用作为列表项目的 key 值。
2, 元素的 key 只有放在就近的数组上下文中才有意义。

比方说，如果你提取出一个 ListItem 组件，你应该把 key 保留在数组中的这个 <ListItem /> 元素上，而不是放在 ListItem 组件中的 <li> 元素上。

一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性。

3. key 只是在兄弟节点之间必须唯一
数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。
当我们生成两个不同的数组时，我们可以使用相同的 key 值
```

##### 受控组件
```
对于受控组件来说，输入的值始终由 React 的 state 驱动。你也可以将 value 传递给其他 UI 元素，或者通过其他事件处理函数重置，但这意味着你需要编写更多的代码。
```

##### 代码分割
```
对你的应用进行代码分割能够帮助你“懒加载”当前用户所需要的内容，能够显著地提高你的应用性能。尽管并没有减少应用整体的代码体积，但你可以避免加载用户永远不需要的代码，并在初始加载的时候减少所需加载的代码量。

在你的应用中引入代码分割的最佳方式是通过动态 import() 语法。

使用之前：
import { add } from './math';
console.log(add(16, 26));

使用之后：
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```

##### React.lazy
```
使用之前：
import OtherComponent from './OtherComponent';

使用之后：
const OtherComponent = React.lazy(() => import('./OtherComponent'));


1. React.lazy的用法
React.lazy方法可以异步加载组件文件。
const Foo = React.lazy(() => import('../componets/Foo));
React.lazy不能单独使用，需要配合React.suspense，suspence是用来包裹异步组件，添加loading效果等。
<React.Suspense fallback={<div>loading...</div>}>
    <Foo/>
</React.Suspense>

2. React.lazy原理
React.lazy使用import来懒加载组件，import在webpack中最终会调用requireEnsure方法，动态插入script来请求js文件，类似jsonp的形式。

React.lazy 目前只支持默认导出（default exports）。如果你想被引入的模块使用命名导出（named exports），你可以创建一个中间模块，来重新导出为默认模块。这能保证 tree shaking 不会出错，并且不必引入不需要的组件。

Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差。

如果你只是想避免层层传递一些属性，组件组合（component composition）有时候是一个比 context 更好的解决方案。
```

##### Context
```
Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。

Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据
Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户
```

##### 错误边界（Error Boundaries）
```
错误边界是一种 React 组件，这种组件可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI，而不是渲染那些崩溃了的子组件树。错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误

如果一个 class 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch() 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。当抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 打印错误信息。

这一改变具有重要意义，自 React 16 起，任何未被错误边界捕获的错误将会导致整个 React 组件树被卸载

错误边界无法捕获事件处理器内部的错误。

React 不需要错误边界来捕获事件处理器中的错误。与 render 方法和生命周期方法不同，事件处理器不会在渲染期间触发。因此，如果它们抛出异常，React 仍然能够知道需要在屏幕上显示什么。
```

##### Refs 转发
```
Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧。对于大多数应用中的组件来说，这通常不是必需的。但其对某些组件，尤其是可重用的组件库是很有用的
```

##### 高阶组件
```
高阶组件是参数为组件，返回值为新组件的函数。
```

##### JSX
```
实际上，JSX 仅仅只是 React.createElement(component, props, ...children) 函数的语法糖。
```

##### Portal
```
Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案
ReactDOM.createPortal(child, container)
```

##### Profiler
```
Profiler 测量渲染一个 React 应用多久渲染一次以及渲染一次的“代价”。 
它的目的是识别出应用中渲染较慢的部分，或是可以使用类似 memoization 优化的部分，并从相关优化中获益。
```

##### ref
```
ref 的值根据节点的类型而有所不同：

当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。
你不能在函数组件上使用 ref 属性，因为他们没有实例。
```

##### ref
```
React 将在组件挂载时，会调用 ref 回调函数并传入 DOM 元素，当卸载时调用它并传入 null。在 componentDidMount 或 componentDidUpdate 触发前，React 会保证 refs 一定是最新的。

ref中的回调函数会在对应的普通组件（或元素）componentDidMount，ComponentDidUpdate之前，或者componentWillUnmount之后执行，componentWillUnmount之后执行时，callback接收到的参数是null。需要注意的是，ref不能用在无状态组件中。
<Test ref={(test) => this.test = test}></Test>

另一好处：ref是一个回调函数，使得我们能在这个函数中做更多的事情，比如说，我们可以借助这种函数的机制，让父组件直接获取子组件的Dom。而如果你让ref是一个字符串，实现这个功能是不可能的 
```

##### hook
```
React 内置了一些像 useState 这样的 Hook。你也可以创建你自己的 Hook 来复用不同组件之间的状态逻辑。我们会先介绍这些内置的 Hook。
```

##### useEffect
```
useEffect 会在每次渲染后都执行吗？ 是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。（我们稍后会谈到如何控制它。）你可能会更容易接受 effect 发生在“渲染之后”这种概念，不用再去考虑“挂载”还是“更新”。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕

与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。大多数情况下，effect 不需要同步地执行。在个别情况下（例如测量布局），有单独的 useLayoutEffect Hook 供你使用，其 API 与 useEffect 相同。

React 会在执行当前 effect 之前对上一个 effect 进行清除

```

##### useEffect 和 useLayoutEffect 的区别？
```
useEffect在组件渲染到屏幕之后执行, useLayoutEffect它会在所有的 DOM 变更之后同步调用 effect

useEffect 在渲染时是异步执行，并且要等到浏览器将所有变化渲染到屏幕后才会被执行。
useLayoutEffect 在渲染时是同步执行，其执行时机与 componentDidMount，componentDidUpdate 一致

对于 useEffect 和 useLayoutEffect 哪一个与 componentDidMount，componentDidUpdate 的是等价的？
useLayoutEffect，因为从源码中调用的位置来看，useLayoutEffect的 create 函数的调用位置、时机都和 componentDidMount，componentDidUpdate 一致，且都是被 React 同步调用，都会阻塞浏览器渲染。

useEffect 和 useLayoutEffect 哪一个与 componentWillUnmount 的是等价的？
同上，useLayoutEffect 的 detroy 函数的调用位置、时机与 componentWillUnmount 一致，且都是同步调用。useEffect 的 detroy 函数从调用时机上来看，更像是 componentDidUnmount (注意React 中并没有这个生命周期函数)。

```

##### 为什么建议将修改 DOM 的操作里放到 useLayoutEffect 里，而不是 useEffect？
```
可以看到在流程9/10期间，DOM 已经被修改，但但浏览器渲染线程依旧处于被阻塞阶段，所以还没有发生回流、重绘过程。由于内存中的 DOM 已经被修改，通过 useLayoutEffect 可以拿到最新的 DOM 节点，并且在此时对 DOM 进行样式上的修改，假设修改了元素的 height，这些修改会在步骤 11 和 react 做出的更改一起被一次性渲染到屏幕上，依旧只有一次回流、重绘的代价。
如果放在 useEffect 里，useEffect 的函数会在组件渲染到屏幕之后执行，此时对 DOM 进行修改，会触发浏览器再次进行回流、重绘，增加了性能上的损耗。
```

##### 关键渲染路径
```
关键渲染路径
关键渲染路径是指浏览器将 HTML、CSS 和 JavaScript 转换成实际运作的网站必须采取的一系列步骤，通过渲染流程图我们可以大致概括如下：

处理 HTML 并构建 DOM Tree。
处理 CSS 并构建 CSSOM Tree。
将 DOM Tree 和 CSSOM Tree 合并成 Render Object Tree。
根据 Render Object Tree 计算节点的几何信息并以此进行布局。
绘制页面需要先构建 Render Layer Tree 以便用正确的顺序展示页面，这棵树的生成与 Render Object Tree 的构建同步进行。然后还要构建 Graphics Layer Tree 来避免不必要的绘制和使用硬件加速渲染，最终才能在屏幕上展示页面。

```

##### 创建 Render Layer 的原因如下
```
创建 Render Layer 的原因如下：
NormalLayer
position 属性为 relative、fixed、sticky、absolute
透明的（opacity 小于 1）、滤镜（filter）、遮罩（mask）、混合模式（mix-blend-mode 不为 normal）
剪切路径（clip-path）
2D 或 3D 转换（transform 不为 none）
隐藏背面（backface-visibility: hidden）
倒影（box-reflect）
column-count（不为 auto）或者column-widthZ（不为 auto）
对不透明度（opacity）、变换（transform）、滤镜（filter）应用动画
OverflowClipLayer
剪切溢出内容（overflow: hidden）
另外以下 DOM 元素对应的 Render Object 也会创建单独的 Render Layer：
- Document
- HTML
- Canvas
- Video

如果是 NoLayer 类型，那它并不会创建 Render Layer，而是与其第一个拥有 Render Layer 的父节点共用一个。

```

##### 为什么需要 Composited Layer？
```
为什么需要 Composited Layer？
避免不必要的重绘。例如网页中有两个 Layer a 和 b，如果 a Layer 的元素发生改变，b Layer 没有发生改变；那只需要重新绘制 a Layer，然后再与 b Layer 进行 Compositing，就可以得到整个网页。
利用硬件加速高效实现某些 UI 特性。例如滚动、3D 变换、透明度或者滤镜效果，可以通过 GPU（硬件渲染）高效实现。
```

##### react-router 路由的实现原理
```
React Router 是一个基于 React 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。本文从两个方便来解析 react-router 实现原理。一：介绍 react-router 的依赖库history；二：使用 history 库，实现一个简单的 react-router 路由。

history 介绍
history 是一个 JavaScript 库，可让您在 JavaScript 运行的任何地方轻松管理会话历史记录。history 抽象出各种环境中的差异，并提供最小的 API ，使您可以管理历史堆栈，导航，确认导航以及在会话之间保持状态。

history 有三种实现方式：
1、BrowserHistory：用于支持 HTML5 历史记录 API 的现代 Web 浏览器（请参阅跨浏览器兼容性）
2、HashHistory：用于旧版Web浏览器
3、MemoryHistory：用作参考实现，也可用于非 DOM 环境，如 React Native 或测试

三种实现方法，都是创建了一个 history 对象，这里主要讲下前面两种：


const history = {
  length: globalHistory.length, 
  action: "POP", 
  location: initialLocation,
  createHref,
  push, // 改变location
  replace,
  go,
  goBack,
  goForward,
  block,
  listen //监听路由变化
};

1.页面跳转实现
BrowserHistory：pushState、replaceState;
HashHistory：location.hash、location.replace


function push(){
  createKey(); // 创建location的key，用于唯一标示该location，是随机生成的
  if(BrowserHistory){
    globalHistory.pushState({ key, state }, null, href);
  }else if(HashHistory){
    window.location.hash = path;
  }
  //上报listener 更新state ...
}
function replace(){
  createKey(); // 创建location的key，用于唯一标示该location，是随机生成的
  if(BrowserHistory){
    globalHistory.replaceState({ key, state }, null, href); 
  }else if(HashHistory){
    window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + "#" path);
  } 
  //上报listener 更新state ...  
}

2.浏览器回退
BrowserHistory：popstate;
HashHistory：hashchang;


if(BrowserHistory){
  window.addEventListener("popstate", routerChange);
}else if(HashHistory){
  window.addEventListener("hashchange", routerChange);
}
function routerChange(){
  const location = getDOMLocation(); //获取location
  //路由切换
  transitionManager.confirmTransitionTo(location,callback=()=>{
    //上报listener
    transitionManager.notifyListeners();
  });
}

```

##### 何为 Suspense？
Suspense 让组件“等待”某个异步操作，直到该异步操作结束即可渲染。


???
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>


1. 路由懒加载
```
const LazyHome = dynamic(() => import(/*prefetch: true*/'../src/pages/Home'));
const LazyDemo2 = dynamic(() => import(/*prefetch: true*/'./pages/Demo2'));

<HashRouter>
  <AppMain/>
  <div className="App-main">
    <Route path='/input' component={MyInput}></Route>
    <Route path='/home' component={LazyHome}></Route>
  </div>
</HashRouter>

```

2. PureComponent, immutable,

3. reselect

4. 时间分片

5. 虚拟列表


##### React 路由懒加载
使用方式
// webpack 配置文件中 使用lazyload-loader（必须将lazuyload-loader 放置在use的最右侧）
module: {
 rules: [
 {
 test: /.(js|jsx)$/,,
 use: [
 'babel-loader',
 'lazyload-loader'
 ]
 },
业务代码中

 // 使用lazy! 前缀 代表需要懒加载的Router
 
 import Shop from 'lazy!./src/view/Shop';
 
 // Router 正常使用
 <Route path="/shop" component={Shop} />
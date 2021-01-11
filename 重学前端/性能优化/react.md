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
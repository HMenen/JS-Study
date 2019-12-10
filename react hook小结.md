##### hook使用范围：在函数组件中使用的
##### 常用的hook
1. useState
```
用法：const [count, setCount] = useState(0)
出参：useState会返回一对值，当前state以及更新state的函数;
入参：useState唯一对参数即state对初始状态；在本例中useState(0)即给count赋予了初始值0。
例如：
function Example(props) {
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

在类组件中使用state时如下：
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
}
改变state时使用this.setState方法，如下：
this.setState({count: 1});
```
2. useEffect
```
useEffect 意思为副作用,常在该函数中请求数据
执行时机：useEffect是在componentDidMount和componentDidUpdate之后执行的
入参：函数，数组（useEffect执行的依赖项）; 其中第二个参数是一个数组，空数组的情况下代表其只在componentDidMount后执行一次；若数组不为空，则在数组中的内容发生改变后执行useEffect
返回值：清除函数，在componentUnMount时执行

用法：
useEffect(() => {
  console.log('-----useEffect----');
  return () => console.log('---清除---');
}, [])

```
3. useLayoutEffect
```
useLayoutEffect和useEffect有点类似；但useLayoutEffect但执行时机时早于useEffect的；
执行时机：在componentDidMount和componentDidUpdate时执行的
入参：函数、数组（useLayoutEffect执行的依赖项）；若第二个参数是一个空数组，则仅在componentDidMount时执行一次
返回值：清除函数，在componentUnMount时执行

用法：
useLayoutEffect(() => {
  console.log('-----useLayoutEffect----');
  return () => console.log('---清除---');
}, [])
```
4. useMemo
```
传入 useMemo 的函数会在渲染期间执行,请不要在这个函数内部执行与渲染无关的操作
入参：函数、依赖项数组
返回值：返回一个计算值
执行时机：render时

用法：
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

```
```
拓展：利用useMemo实现useRef
const useAppRef = () => {
  const ref = useMemo(() => (
    current: null
  ), []);

  return ref;
}
```

5. useCallback
```
类似useMemo
useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
```

```
拓展：获得当前mount状态
1.
const useMountState = () => {
  const mountState = useMemo(() => ({state: false}), []);
  useLayoutEffect(() => {
    mountState.state = true;
    return () => {mountState.state = false}
  })
  return mountState;
}

2.
const useMountState = () => {
  const mountRef = useRef(false);
  const get = useCallback(() => mountRef.current, []);
  useLayoutEffect(() => {
    mountRef.current = true;
    return () => mountRef.current = false;
  })

  return mountRef.currnet;
}

```

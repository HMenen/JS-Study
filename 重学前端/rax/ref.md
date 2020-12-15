ref：获取组件的实例
1. 函数组件不能使用ref，原因：函数组件没有实例。实现如下
```
函数组件 
获得new的容器组件（instantiateComponent）为：CompositeComponent，在__getPublicInstance方法中，instance.__isReactiveComponent = true,
返回null；

```
 __getPublicInstance() {
  let instance = this[INSTANCE];

  // The functional components cannot be given refs
  if (instance.__isReactiveComponent) return null;

  return instance;
}
```

function attachRef(ownerComponent, ref, component) {
  ...

  let instance = component.__getPublicInstance();

  if (process.env.NODE_ENV !== 'production') {
    if (instance == null) {
      warning('Do not attach ref to function component because they don’t have instances.');
    }
  }
  ...

}

```

首先需要
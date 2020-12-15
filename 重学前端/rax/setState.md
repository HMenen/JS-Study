__processPendingState(): 
清空 this.__pendingStateQueue
返回 nextState


```
HOST
/*
 * Stateful things in runtime
 */
export default {
  __mountID: 1,
  __isUpdating: false,
  // Inject
  driver: null,
  // Roots
  rootComponents: {},
  rootInstances: {},
  // Current owner component
  owner: null,
};
```


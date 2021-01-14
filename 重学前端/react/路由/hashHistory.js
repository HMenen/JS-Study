// https://segmentfault.com/a/1190000015992872?utm_source=tag-newest

//维护一个订阅者列表，当hash变更的时候通知到相关的函数。
var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';
const createTransitionManager = () => {
  // 内部维护的订阅者列表
  let listeners = [];
  // 注册订阅者
  const appendListener = fn => {
      let isActive = true;
      const listener = (...args) => {
          if (isActive) fn(...args);
      };
      listeners.push(listener);
      return () => {
          isActive = false;
          listeners = listeners.filter(item => item !== listener);
      };
  };
  //通知订阅者
  const notifyListeners = (...args) => {
      listeners.forEach(listener => listener(...args));
  };
}

//订阅hash变更事件，判断是否确实要变更，如需变更则更新自己的属性，通知订阅者，不需变更则回退到之前的状态
// 构造hashHistory对象
const createHashHistory = (props = {}) => {
  const globalHistory = window.history;    // 引用HTML5 history对象
  // transitionManager负责控制是否进行跳转，以及跳转后要通知到的订阅者，后面会详细讨论
  const transitionManager = createTransitionManager();
  // 注册history变更回调的订阅者
  const listen = listener => {
      const unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);
      return () => {
          checkDOMListeners(-1);
          unlisten();
      };
  };
  
  // 监听hashchange事件
  const checkDOMListeners = delta => {
      listenerCount += delta;
      if (listenerCount === 1 && delta === 1) {
        window.addEventListener(HashChangeEvent$1, handleHashChange);
      } else if (listenerCount === 0) {
        window.removeEventListener(HashChangeEvent$1, handleHashChange);
      }
  };
  
  // hashchange事件回调
  const handleHashChange = () => {
      // 构造内部使用的location对象，包含pathname、search和hash等属性
      const location = getDOMLocation();    
      handlePop(location);
  };
  // 处理hash变更逻辑
  const handlePop = location => {
      const action = "POP";
      // 给用户展示确认跳转的信息（如果有的话），确认后通知订阅者。如果用户取消跳转，则回退到之前状态
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, ok => {
          if (ok) {
              setState({action, location});    // 确认后通知订阅者
          } else {
              revertPop(location);             // 取消则回退到之前状态
          }
      });
  };
  
  // 更新action，location和length属性，并通知订阅者
  const setState = nextState => {
      Object.assign(history, nextState);

      history.length = globalHistory.length;

      transitionManager.notifyListeners(history.location, history.action);
  };
}



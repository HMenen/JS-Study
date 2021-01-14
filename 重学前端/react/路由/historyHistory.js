// https://juejin.cn/post/6844903730899484686
// 当活动历史记录条目更改时，将触发popstate事件。需要注意的是调用history.pushState()或history.replaceState()不会触发popstate事件。
// 只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()）

// createBrowserHistory.js
var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';
function createBrowserHistory(props = {}){
  // 处理basename（相对地址，例如：首页为index，假如设置了basename为/the/base，那么首页为/the/base/index）
  const basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : "";
  
  const initialLocation = getDOMLocation(window.history.state);
 
  // 处理state参数和window.location
  function getDOMLocation(historyState) {
    const { key, state } = historyState || {};
    const { pathname, search, hash } = window.location;
 
    let path = pathname + search + hash;
 
    // 保证path是不包含basename的
    if (basename) path = stripBasename(path, basename);
 
    // 创建history.location对象
    return createLocation(path, state, key);
  };
 
  const history = {
    // location对象（与地址有关）
    location: initialLocation,
    //...
  };
  return history;
}


// createBrowserHistory.js
function createBrowserHistory(props = {}){
  function block(prompt = false) {
    // 设置提示
    const unblock = transitionManager.setPrompt(prompt);
 
    // 是否设置了block
    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }
 
    // 解除block函数
    return () => {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }
 
      // 消除提示
      return unblock();
    };
  }
 
  let listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount += delta;
    
    // 是否已经添加
    if (listenerCount === 1 && delta === 1) {
      // 添加绑定，当地址栏改变的时候
      window.addEventListener(PopStateEvent, handlePopState);
    } else if (listenerCount === 0) {
      //  解除绑定
      window.addEventListener(PopStateEvent, handlePopState);
    }
  }
  
  // getDOMLocation(event.state) = location = {
  //   hash: ""
  //   pathname: "/history/index.html"
  //   search: "?_ijt=2mt7412gnfvjpfeuv4hjkq2uf8"
  //   state: undefined
  // }
  function handlePopState(event) {
    handlePop(getDOMLocation(event.state));
  }
  
  function handlePop(location) {
    // 不需要刷新页面
    const action = "POP";
 
    // 实现提示
    transitionManager.confirmTransitionTo(
      location,
      action,
      getUserConfirmation,
      ok => {
        if (ok) {
          // 确定
          setState({ action, location });
        } else {
          // 取消
          revertPop(location);
        }
      }
    );
  }


  function push(path, state) {
    const action = "PUSH";
    // 构造location
    const location = createLocation(path, state, createKey(), history.location);
 
    // 执行block函数，弹出框
    transitionManager.confirmTransitionTo(
      location,
      action,
      getUserConfirmation,
      ok => {
        if (!ok) return;
 
        // 获取当前路径名
        const href = createHref(location);
        const { key, state } = location;
 
        // 添加历史条目
        globalHistory.pushState({ key, state }, null, href);
        
        if (forceRefresh) {
          // 强制刷新
          window.location.href = href;
        } else {
          // 更新history
          setState({ action, location });
        }
      }
    );
  }


  const history = {
    // 截取
    block,
    push,
    //...
  };
 
  return history;
}

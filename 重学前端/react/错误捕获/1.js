/**
 * react错误边界
 * 它能捕获子组件生命周期函数中的异常，包括构造函数（constructor）和render函数
    而不能捕获以下异常：
    Event handlers（事件处理函数）
    Asynchronous code（异步代码，如setTimeout、promise等）
    Server side rendering（服务端渲染）
    Errors thrown in the error boundary itself (rather than its children)（异常边界组件本身抛出的异常）
 */

 class ErrorBoundary extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       isError: false
     }
   }

   static getDerivedStateFromError(error) {
      // 更新 state 使下一次渲染能够显示降级后的 UI
      return { isError: true }
   }

   componentDidCatch(error, errorInfo) {
      // 你同样可以将错误日志上报给服务器
   }

   render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
   }
 }
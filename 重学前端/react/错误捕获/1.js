/**
 * react错误边界
 */

 class ErrorBoundary extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       isError: false
     }
   }

   static getDerivedStateFromError(error) {
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
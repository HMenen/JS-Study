// const [state, setState] = useSetState({
//   hello: '',
//   count: 0,
// });

// setState({ hello: 'world' })

function useSetState(initState={}) {
  const [state, setState] = useState(initState);

  function mySetState(obj) {
    if (typeof obj !== 'object') {
      return;
    }
    if (Object.keys(obj).length === 0){
      return;
    }
    setState({...state, ...obj});
  }

  return [state, mySetState]
}

function debounce(fn, sleep) {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, sleep)
  }
}

function throttle(fn, sleep) {
  let timer;
  return (...args) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null;
    }, sleep)
  }
}
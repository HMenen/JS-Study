function throttle(fn, sleep) {
  let timer = null;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null
    }, sleep);
  }
}

function throttle(fn, sleep) {
  let time = 0;
  return (...args) => {
    let now = new Date().getTime() / 1000;
    if (now - time >= sleep) {
      fn.apply(this, args);
      time = new Date().getTime();
    }
  }
}

function getNum() {
  let count = 0;
  return () => {
    return ++count
  }
}
const a = getNum();
console.log(a());
console.log(a());
console.log(a());

// https://mp.weixin.qq.com/s/YbZx4hGKaAPYuhZgSvMcCw
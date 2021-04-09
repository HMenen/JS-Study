/**
 * 
 * 标题：js异步操作与计算题
 * 描述信息
    for (var i = 0; i < 6; i++) {
        setTimeout(function() {
            console.log(new Date, i);
        }, 1000);
    }
    console.log(new Date, i);得到的结果是什么?
    怎样优化，可以变成： 0 -> 1 -> 2 -> 3-> 4 ->5
    如果继续优化，实现console.log(new Date, i);代码执行时，立即输出 0，之后每隔 1 秒依次输出 1,2,3,4（sleep），之后再暂停5秒，然后输出5, 实现结果类似：
    2017-08-31T04:38:23: 0 <— start IIFE
    2017-08-31T04:38:24: 1 <— sleep 1s
    2017-08-31T04:38:25: 2 <— sleep 1s
    2017-08-31T04:38:26: 3 <— sleep 1s
    2017-08-31T04:38:27: 4 <— sleep 5s
    2017-08-31T04:38:32: 5
  */

function sleep(delay, fn) {
  return new Promise((resolve, reject) => {
    fn();
    setTimeout(resolve, delay);
  })
}

async function test() {
  for(let i = 0; i < 6; i++) {
    let time = i === 4? 5: 1;
    await sleep(time * 1000, () => console.log(new Date(), i))
  }
}

function sleep1(delay) {
  return new Promise((resolve, reject) => setTimeout(resolve, delay))
}
async function test1() {
  for(let i = 0; i < 6; i++) {
    if (i === 4) {
      await sleep1(4000)
      console.log(new Date(), i)
    } else {
      console.log(new Date(), i)
      await sleep1(1000)
    }
  }
}

test();
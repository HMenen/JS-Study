##### fetch和ajax的区别是什么？
1. ajax和fetch的区别 ：
  （1）、ajax是理用XMLHttpRequest对象来请求数据的，而fetch是window的一个方法
  （2）、ajax基于原生的XHR开发，XHR本身的架构不清晰，已经有了fetch的替代方案
  （3）、fetch比较与ajax有着更好更方便的写法
  （4）、fetch只对网络请求报错，对400，500都当做成功的请求，需要封装去处理
  （5）、fetch没有办法原生监测请求的进度，而XHR可以

2. ajax用法
因为它原生的写法很鸡肋，所以大多会封装下，导致可能很多人不会自己写个ajax请求。都是用的JQuery或者Axios来请求数据的

```
var xhr= new XMLHttpRequest(); // 新建XMLHttpRequest对象
xhr.onload= function(){ //请求完成
  console.log(this.responseText);
}
// 发送请求:
xhr.open('GET', '/user');
xhr.send();

代码注释：
1.open(method, url, async) 方法需要三个参数:
```


3. fetch用法
1、第一个参数是URL
2、第二个参数可选参数 可以控制不同的init对象
3、使用了js 中的promise对象

```
var arr1 = [{
  name: "haha",
  detail:"123"
}];

fetch("url", {
    method: "post",
    headers: {//设置请求的头部信息
        "Content-Type": "application/json"
        //跨域时可能要加上
        //"Accept":"allication/json"
    },    //将arr1对象序列化成json字符串
    body: JSON.stringify(arr1)//向服务端传入json数据
}).then(function(resp) {
    resp.json().then((data) => {
                
    })
});

```


#####  fetch规范与jQuery.ajax()主要有两种方式的不同，牢记：
链接：https://www.jianshu.com/p/c6138494e70a

1、从 fetch()返回的 Promise 将不会拒绝HTTP错误状态, 即使响应是一个 HTTP 404 或 500。相反，它会正常解决 (其中ok状态设置为false), 
并且仅在网络故障时或任何阻止请求完成时，它才会拒绝。

2、默认情况下, fetch在服务端不会发送或接收任何 cookies, 如果站点依赖于维护一个用户会话，则导致未经认证的请求(要发送 cookies，必须发送凭据头).
这一点也可以做一些处理：
```
如果想要在同域中自动发送cookie,加上 credentials 的 same-origin 选项

fetch(url, {
  credentials: ’same-origin'
})
same-origin值使得fetch处理Cookie与XMLHttpRequest类似。 否则，Cookie将不会被发送，导致这些请求不保留认证会话。

对于CORS请求，使用include值允许将凭据发送到其他域：
fetch(url, {
  credentials: 'include'
})

```

##### fetch和XMLHttpRequest相比，主要有以下优点:
语法简洁，更加语义化
基于标准 Promise 实现，支持 async/await
同构方便，使用 isomorphic-fetch
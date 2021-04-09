##### 标题：Cookie 和 Session 有什么区别
描述信息
如题
参考答案
cookie 在浏览器中存在，并且每个请求都会带上，而且是可以设置失效时间的，失效前就会有效。 
session 是一次会话有效，也就是说，浏览器关闭 session 就会失效。 
其实这道题目考察的一个重点是在于，session 这种机制是怎么在浏览器中实现的呢？ 实际上 session 的实现也是在浏览器中放了一个 cookie，失效时间是一次会话失效。

评分标准
2.5分及以下：无法回答，或者简单介绍出 cookie 和 session 的基础区别；
3.0分：能够回答出即便是 session 也是会种植一个 cookie 到浏览器中的；

##### 标题：存储在 Cookie 和 localStorage 内有什么区别
参考答案
存储在 Cookie 中每个 request 都会带上，而放在 localStorage 中，仅有浏览器中会存储。
评分标准
2.5分及以下：介绍了 cookie 和 localStorage 的简单区别；
3.0分：能够说出某些数据存在 cookie 中比 localStorage 合适，就是做了对比；
3.5分：能够说明 cookie 在每个请求中都会自动携带，可能会增加请求的大小；
4.0分：能够说出更多，比如 cookie 中可能有安全问题，服务端可以开 httpOnly 防止 JS 读取 cookie，总而言之是介绍了更多细节；
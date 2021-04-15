##### cookie 属性
1. name字段为一个cookie的名称。
2. value字段为一个cookie的值。
3. domain字段为可以访问此cookie的域名。
4. expires/Max-Age 
字段为此cookie超时时间。若设置其值为一个时间，那么当到达此时间后，此cookie失效。
不设置的话默认值是Session，意思是cookie会和session一起失效。当浏览器关闭(不是浏览器标签页，而是整个浏览器) 后，此cookie失效。
5. Size字段 此cookie大小。
6. http/httponly 字段  
cookie 的 httponly 属性。若此属性为true，则只有在http请求头中会带有此cookie的信息，而不能通过document.cookie来访问此cookie。
7. secure 字段 设置是否只能通过 https 来传递此条cookie
8. SameSite
SameSite用来限制第三方 Cookie，从而减少安全风险。它有3个属性，分别是：
Strict
Scrict最为严格，完全禁止第三方Cookie，跨站点时，任何情况下都不会发送Cookie
Lax
Lax规则稍稍放宽，大多数情况也是不发送第三方 Cookie，但是导航到目标网址的 Get 请求除外。
None
网站可以选择显式关闭SameSite属性，将其设为None。不过，前提是必须同时设置Secure属性（Cookie 只能通过 HTTPS 协议发送），否则无效。
9.Priority
优先级，chrome的提案，定义了三种优先级，Low/Medium/High，当cookie数量超出时，低优先级的cookie会被优先清除。
在360极速浏览器和FireFox中，不存在Priority属性，不清楚在此类浏览器中设置该属性后是否生效。
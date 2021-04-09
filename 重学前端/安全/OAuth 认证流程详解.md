##### https://www.jianshu.com/p/0db71eb445c8

接下来分步详细解释上图中每步都做了什么：

1. 用户点击简书上的微博登录按钮，跳转到微博授权页面。微博登录按钮的链接形如下方的 URL：

  https://api.weibo.com/oauth2/authorize?client_id=123050457758183&redirect_uri=http://jianshu.com/callback
URL 中要包含以下参数：
* client_id：在微博开放平台申请的应用 ID
* redirect_uri：授权成功后要跳转到的地址

点击以上链接后跳转到微博的授权页面如下图：

简书的第三方授权页面
这个页面会告诉用户第三方应用要获取用户的哪些数据，以及拥有什么权限，比如在上图中简书会要求获得个人信息、好友关系、分享内容到微博以及获得评论的权限，用户点击“允许”则表示允许简书获得这些数据，进行下一步

2. 页面自动跳转到初始参数中redirect_uri 定义的那个URL，并自动在 URL 末尾添加一个 code 参数，实际跳转的地址形如:
 http://jianshu.com/callback?code=2559200ecd7ea433f067a2cf67d6ce6c

3. 第三步，简书通过上一步获取的 code 参数换取 Token，Token 就是前文中说到的钥匙。简书请求如下的接口获取 Token：
POST https://api.weibo.com/oauth2/access_token
要包含以下参数：
client_id：在微博开放平台申请的应用 ID
client_secret：在微博开放平台申请时提供的APP Secret
grant_type：需要填写authorization_code
code：上一步获得的 code
redirect_uri：回调地址，需要与注册应用里的回调地址以及第一步的 redirect_uri 参数一致

4. 通过第三步的请求，接口返回 Token 和相关数据：
{
 "access_token": "ACCESS_TOKEN",//Token 的值
 "expires_in": 1234,//过期时间
 "uid":"12341234"//当前授权用户的UID。
}

5. 在第四步中获取了access_token ，使用它，就可以去获取用户的资源了，要获取用户昵称和头像，请求如下接口：
GET https://api.weibo.com/2/users/show.json

携带参数：
access_token：上一步获取的access_token
uid：用户的账号 id，上一步的接口有返回
最后一步，微博返回用户信息，简书进行处理，整个流程结束。

通过以上的方式，在简书和新浪微博中间建立了一个独立的权限层，这个权限由用户赋予，可以被用户随时取消，不同第三方应用之间相互独立，互不干扰，这样就彻底解决了明文存放账号密码的问题。

以上只是以新浪微博为例，概括了一种最常见的 OAuth2.0 认证方式，关于 OAuth 更全面的文档，请参见 RFC 6749。阮一峰博客上也写过一篇关于 OAuth 的科普，推荐阅读：《理解OAuth 2.0》

链接：https://www.jianshu.com/p/0db71eb445c8
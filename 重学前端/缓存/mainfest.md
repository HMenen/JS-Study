##### Html5离线缓存详细讲解
离线缓存是Html5新特性之一，简单理解就是第一次加载后将数据缓存，在没有清除缓存前提下，下一次没有网络也可以加载，用在静态数据的网页或游戏比较好用。当然，Html5新的特性都不是所有浏览器都能支持的，离线缓存也一样。反正IE9（包括）及IE9以下的浏览器目前是不支持的。如果用在移动端，应该都能支持。检测是否支持离线缓存也是比较简单的。

##### 使用起来也很简单。

①：首先要引入manifest文件。
```
复制代码
<!DOCTYPE html>
<html lang="en" manifest="test.manifest">    //就是在这里引入，注意引入也是讲究路劲跟文件名的，这里文件名是test，后缀是mainfest，路劲在当前的html下面（一般放在html当前文件夹下面也没什么问题，我是这么放的）
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
</body>
</html>
```

②：引入完了之后，接下来就是test.mainfest文件代码的编写了。
4-1:首先我们建立一个名为cache.manifest的文件，Windows平台下用记事本即可（也可用其他的IDE）。文件内容如下：

CACHE MANIFEST
#version1
CACHE:
index.html
404.html
favicon.ico
robots.txt
humans.txt
apple-touch-icon.png
css/normalize.min.css
css/main.css
css/bootmetro-icons.min.css
img/pho-cat.jpg
img/pho-huangshan.jpg
 
FALLBACK:
online.js local.js
 
NETWORK:
*

注意事项：
1、第一行必须是”CACHE DMANIFEST”文字，以把本文件的作用告知浏览器，即对本地缓存中的资源文件进行具体设置。
2、在manifest文件中，可以加上注释来进行一些必要说明或解释。注释行以”#”文字开头。
3、在CACHE之后的部分为列出我们需要缓存的文件。
4、在FALLBACK之后的部分每一行中指定两个资源文件，第一个资源文件为能够在线访问时使用的资源文件，第二个资源文件为不能在线访问时使用的备用资源文件。
5、在NETWORK之后可以指定在线白名单，即列出我们不希望离线存储的文件，因为通常它们的内容需要互联网访问才有意义。另外，在此部分我们可以使用快捷方式：通配符*。这将告诉浏览器，应用服务器中获取没有在显示部分中提到的任何文件或URL。
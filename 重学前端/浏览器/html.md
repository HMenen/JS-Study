##### meta
<meta> 元素可提供有关页面的元信息（ meta-information），比如针对搜索引擎和更新频度的描述和关键词。

meta标签俗称描述网页数据的数据，比如网页本身的编码； 网页本身的作者，描述；还有一些更高级的功能性特性，比如dns预解析，定义视口表现等;
常用的比如：

<meta charset="utf-8">
<meta name="description" content="A general guide on the use of meta tags in html pages" />

###### 必须的属性
content	some_text	定义与 http-equiv 或 name 属性相关的元信息

###### 可选的属性
属性	值	描述
1. http-equiv    把 content 属性关联到 HTTP 头部。
content-type
expires
refresh
set-cookie

http-equiv 属性
http-equiv 属性为名称/值对提供了名称。并指示服务器在发送实际的文档之前先在要传送给浏览器的 MIME 文档头部包含名称/值对。
当服务器向浏览器发送文档时，会先发送许多名称/值对。虽然有些服务器会发送许多这种名称/值对，但是所有服务器都至少要发送一个：content-type:text/html。这将告诉浏览器准备接受一个 HTML 文档。
使用带有 http-equiv 属性的 <meta> 标签时，服务器将把名称/值对添加到发送给浏览器的内容头部。例如，添加：
<meta http-equiv="charset" content="iso-8859-1">
<meta http-equiv="expires" content="31 Dec 2008">
这样发送到浏览器的头部就应该包含：

content-type: text/html
charset:iso-8859-1
expires:31 Dec 2008

2. name	    把 content 属性关联到一个名称
author
description
keywords
generator
revised
others

3. scheme	  some_text	  定义用于翻译 content 属性值的格式。

4. <meta name="viewport" content="width=device-width, initial-scale=1"> 

5. 出现一个控制手段——“内核控制标签”，只要你在自己的网站里增加一个meta标签，告诉360浏览器这个网站应该用哪个内核渲染，那么360浏览器就会在读取到这个标签后，立即切换对应的内核，并将这个行为应用于这个二级域名下所有网址。

浏览器默认内核的指定只需在head标签中添加一行代码即可： 

若页面需默认用极速核，增加标签：<meta name="renderer" content="webkit"> 
若页面需默认用ie兼容内核，增加标签：<meta name="renderer" content="ie-comp"> 
若页面需默认用ie标准内核，增加标签：<meta name="renderer" content="ie-stand"> 
content的取值为webkit,ie-comp,ie-stand之一，区分大小写，分别代表用webkit内核，IE兼容内核，IE标准内核


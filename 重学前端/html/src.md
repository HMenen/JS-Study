##### src和href的区别

src和href的区别
在引用外部资源的时候，必然会使用到src或者href这两个属性，那么两者有什么区别呢？

1.href
Hypertext Reference的缩写，中文是超文本引用。指向一些网络资源，用来建立和当前文档或者元素的链接关系。
在加载该资源时，不会阻塞当前文档的处理。在a,link标签常用。

<a href="http://www.baidu.com"></a>
<link href="style.css" rel="stylesheet"/>
当浏览器加载到link标签时，会识别这是CSS文档，并行下载该CSS文档，但并不会停止对当前页面后续内容的加载。这也是不建议使用@import加载CSS的原因。

2.src
source的缩写。表示对资源的引用，指向的内容会用来嵌入到其所在的标签，也就是替换元素。
由于src的内容是页面必不可少的一部分，因此浏览器在解析src时会停下来对后续文档的处理，直到src的内容加载完毕。常用在script、img、iframe标签中，我们建议js文件放在HTML文档的最后面。如果js文件放在了head标签中，可以使用window.onload实现js的最后加载。

<img src="..."/>
<script src=""><script>
总结：href用于建立当前页面与引用资源之间的关系（链接），而src则会替换当前标签。遇到href，页面会并行加载后续内容；而src则不同，浏览器需要加载完毕src的内容才会继续往下走。

##### link和@import的区别
两者都是外部引用 CSS 的方式，但是存在一定的区别：
（1）link是XHTML标签，除了能够加载CSS，还可以定义RSS等其他事务；而@import属于CSS范畴，只可以加载CSS。
（2）link引用CSS时，在页面载入时同时加载；@import需要页面完全载入以后再加载。
（3）link是XHTML标签，无兼容问题；@import则是在CSS2.1提出的，低版本的浏览器不支持。
（4）link支持使用Javascript控制DOM改变样式；而@import不支持。

##### 页面导入样式时，使用 link 和@import 有什么区别？
Link 属于 html 标签，而@import 是 CSS 中提供的
在页面加载的时候，link 会同时被加载，而@import 引用的 CSS 会在页面加载完成后才会加载引用的 CSS
@import 只有在 ie5 以上才可以被识别，而 link 是 html 标签，不存在浏览器兼容性问题
Link 引入样式的权重大于@import 的引用（@import 是将引用的样式导入到当前的页面中）
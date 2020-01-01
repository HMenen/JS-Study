https://github.com/yisainan/web-interview/blob/master/content/CSS.md
1. 盒子模型: 
包括：外边距（margin）、边框（border）、内边距（padding）、实际内容（content）四个属性

两种盒子模型：IE、W3C盒子模型
IE：content + padding + border
W3C（标准和模型）: content

2. 用css隐藏元素
```
1) opacity: opatity为0时则为透明
2）visibility: hidden
3）display: none
4) position
.hide {
  postion: absolute;
  top: -99999px;
  left: -99999px;
}
```

4. .CSS 清除浮动的几种方法（至少两种）
```
伪元素：在页面上不存在的元素，但是可以通过 css 添加上去
1) 在浮动的盒子下面再放一个标签，使用 clear:both;来清除浮动（不推荐使用）
2) 先找到浮动盒子的父元素，给父元素添加一个属性：overflow:hidden;就会清除子元素对页面的影响（不推荐使用）
3) 使用伪元素清除浮动(用的最多)
clearfix:after{
  content: "";
  height: 0;
  display: block;
  line-height: 0px;
  clear: both;
  visibility: hidden;
}
.clearfix{
  zoom: 1;/_为了兼容 IE6_/
}
```
5. 页面导入样式时，使用 link 和@import 有什么区别？
Link 属于 html 标签，而@import 是 CSS 中提供的
在页面加载的时候，link 会同时被加载，而@import 引用的 CSS 会在页面加载完成后才会加载引用的 CSS
@import 只有在 ie5 以上才可以被识别，而 link 是 html 标签，不存在浏览器兼容性问题
Link 引入样式的权重大于@import 的引用（@import 是将引用的样式导入到当前的页面中）

6. 伪元素和伪类的区别？
```
伪元素：伪元素添加了一个页面中没有的元素（只是从视觉效果上添加了，不是在文档树中添加
::before, ::after, ::section, ::placeholder, ::first-line, ::first-letter

伪类：伪类是给页面中已经存在的元素添加一个类
:hover, :link, :active, :focus, :target
```

7. CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3 新增伪类有那些？
```
1.id选择器（ # myid）
2.类选择器（.myclassname）
3.标签选择器（div, h1, p）
4.相邻选择器（h1 + p）
5.子选择器（ul < li）
6.后代选择器（li a）
7.通配符选择器（ * ）
8.属性选择器（a[rel = "external"]）
9.伪类选择器（a: hover, li: nth - child）

* 可继承： font-size font-family color, UL LI DL DD DT;
* 不可继承 ：border padding margin width height ;

* 优先级就近原则，样式定义最近者为准;
* 载入样式以最后载入的定位为准;

优先级为:
!important >  id > class > tag  
important 比 内联优先级高

CSS3新增伪类举例：
p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。
p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。
:enabled、:disabled 控制表单控件的禁用状态。
:checked，单选框或复选框被选中。
```

8. 行内元素和块级元素的具体区别是什么？行内元素的 padding 和 margin 可设置吗？
```
块级元素(block)特性：
总是独占一行，表现为另起一行开始，而且其后的元素也必须另起一行显示;
宽度(width)、高度(height)、内边距(padding)和外边距(margin)都可控制;

内联元素(inline)特性：
和相邻的内联元素在同一行;
宽度(width)、高度(height)、内边距的 top/bottom(padding-top/padding-bottom)和外边距的 top/bottom(margin-top/margin-bottom)都不可改变（也就是 padding 和 margin 的 left 和 right 是可以设置的），就是里面文字或图片的大小。
那么问题来了，浏览器还有默认的天生 inline-block 元素（拥有内在尺寸，可设置高宽，但不会自动换行），有哪些？
答案：<input> 、<img> 、<button> 、<texterea> 、<label>
```

9. px 和 em 的区别
```
px 和 em 都是长度单位，区别是，px 的值是固定的，指定是多少就是多少，计算比较容易。em 得值不是固定的，并且 em 会继承父级元素的字体大小。
浏览器的默认字体高都是 16px。所以未经调整的浏览器都符合: 1em=16px。那么 12px=0.75em, 10px=0.625em。
```

10. BFC
'''
什么是 BFC
BFC（Block Formatting Context）格式化上下文，是 Web 页面中盒模型布局的 CSS 渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。

形成 BFC 的条件:
浮动元素，float 除 none 以外的值
定位元素，position（absolute，fixed）
display 为以下其中之一的值 inline-block，table-cell，table-caption
overflow 除了 visible 以外的值（hidden，auto，scroll）
BFC 的特性
内部的 Box 会在垂直方向上一个接一个的放置。
垂直方向上的距离由 margin 决定
bfc 的区域不会与 float 的元素区域重叠。
计算 bfc 的高度时，浮动元素也参与计算
bfc 就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。
'''

11. Sass、LESS 是什么？大家为什么要使用他们
'''
Sass、LESS 是什么？大家为什么要使用他们？
答案：他们是 CSS 预处理器。他是 CSS 上的一种抽象层。他们是一种特殊的语法/语言编译成 CSS。

例如 Less 是一种动态样式语言. 将 CSS 赋予了动态语言的特性，如变量，继承，运算， 函数. LESS 既可以在客户端上运行 (支持 IE 6+, Webkit, Firefox)，也可一在服务端运行 (借助 Node.js)。

为什么要使用它们？
结构清晰，便于扩展。
可以方便地屏蔽浏览器私有语法差异。这个不用多说，封装对浏览器语法差异的重复处理，减少无意义的机械劳动。
可以轻松实现多重继承。

完全兼容 CSS 代码，可以方便地应用到老项目中。LESS 只是在 CSS 语法上做了扩展，所以老的 CSS 代码也可以与 LESS 代码一同编译。
'''

12. 怎么让 Chrome 支持小于 12px 的文字？
'''
css3 的 transform 属性，设置值为 scale(x,y) 定义 2D 缩放转换

-webkit-transform: scale(0.50);
'''

13. 超链接访问过后 hover 样式就不出现的问题是什么？如何解决？
'''
答案：被点击访问过的超链接样式不在具有 hover 和 active 了,解决方法是改变 CSS 属性的排列顺序: L-V-H-A（link,visited,hover,active）
'''

14. 边框1px问题
window.devicePixelRatio 
可以直接通过window.devicePixelRatio这个值来获取DRP，打印结果是2个像素
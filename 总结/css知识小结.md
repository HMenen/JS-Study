https://github.com/yisainan/web-interview/blob/master/content/CSS.md
1. 盒子模型: 
包括：外边距（margin）、边框（border）、内边距（padding）、实际内容（content）四个属性

两种盒子模型：IE、W3C盒子模型
IE ：content + padding + border
W3C（标准和模型）: content    可设置box-sizing:border-box; 转为IE盒子模型

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
```
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

```

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

15. position(默认值是static) 
```
static(静态) 没有特别的设定，不脱离文档流，遵循基本的定位规定，不能通过z-index进行层次分级，在普通流中，各个元素默认的属性。
relative(相对定位) 对象不可层叠、不脱离文档流，参考自身静态位置通过 top,bottom,left,right 定位。
absolute(绝对定位) 脱离文档流，通过 top,bottom,left,right 定位。选取其最近一个最有定位设置的父级对象进行绝对定位，如果对象的父级没有设置定位属性，absolute元素将以body坐标原点进行定位。
fixed（固定定位）脱离文档流，这里所固定的参照对像是可视窗口而并非是body或是父级元素。使用了fixed的元素不会随着窗口的滚动而滚动。属于absolute的子集。
```

16. BFC
```
一、何为BFC
BFC（Block Formatting Context）格式化上下文，是Web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。

二、形成BFC的条件
1、浮动元素，float 除 none 以外的值； 
2、定位元素，position（absolute，fixed）； 
3、display 为以下其中之一的值 inline-block，table-cell，table-caption； 
4、overflow 除了 visible 以外的值（hidden，auto，scroll）；

三、BFC的特性
1.内部的Box会在垂直方向上一个接一个的放置。
2.垂直方向上的距离由margin决定
3.bfc的区域不会与float的元素区域重叠。
4.计算bfc的高度时，浮动元素也参与计算
5.bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。

```

17. IFC(Inline Formatting Contexts)
```
直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)
IFC
Inline Formatting Contexts，也就是“内联格式化上下文”。

符合以下任一条件即会生成一个IFC
块级元素中仅包含内联级别元素
形成条件非常简单，需要注意的是当IFC中有块级元素插入时，会产生两个匿名块将父元素分割开来，产生两个IFC，这里不做过多介绍。

IFC布局规则
子元素水平方向横向排列，并且垂直方向起点为元素顶部。
子元素只会计算横向样式空间，【padding、border、margin】，垂直方向样式空间不会被计算，【padding、border、margin】。
在垂直方向上，子元素会以不同形式来对齐（vertical-align）
能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）。行框的宽度是由包含块（containing box）和与其中的浮动来决定。
IFC中的“line box”一般左右边贴紧其包含块，但float元素会优先排列。
IFC中的“line box”高度由 CSS 行高计算规则来确定，同个IFC下的多个line box高度可能会不同。
当 inline-level boxes的总宽度少于包含它们的line box时，其水平渲染规则由 text-align 属性值来决定。
当一个“inline box”超过父元素的宽度时，它会被分割成多个boxes，这些 oxes 分布在多个“line box”中。如果子元素未设置强制换行的情况下，“inline box”将不可被分割，将会溢出父元素。


**BFC的布局规则例如以下：**

1.ifc中的元素会在一行中从左到右排列。
2.在一行上的所有元素会在该区域形成一个行框。
3.行宽的高度为包含框的高度，高度为行框中最高元素的高度。
4.浮动的元素不会在行框中，并且浮动元素会压缩行框的宽度。
5.行框的宽度容纳不下子元素时，子元素会换到下一行显示，并且会产生新的行框。
6.行框的元素内遵循text-align和vertical-align。

```

18. FFC -- Flex Formatting Contexts
```
触发条件
当 display 的值为 flex 或 inline-flex 时，将生成弹性容器（Flex Containers）, 一个弹性容器为其内容建立了一个新的弹性格式化上下文环境（FFC）

布局规则
设置为 flex 的容器被渲染为一个块级元素
设置为 inline-flex 的容器则渲染为一个行内元素
弹性容器中的每一个子元素都是一个弹性项目。弹性项目可以是任意数量的。弹性容器外和弹性项目内的一切元素都不受影响。简单地说，Flexbox 定义了弹性容器内弹性项目该如何布局

```

19. display有哪些值？说明他们的作用?
```
inline（默认）--内联
none--隐藏
block--块显示
table--表格显示
list-item--项目列表
inline-block
```

20. 请解释一下CSS3的flexbox（弹性盒布局模型）,以及适用场景？
```
该布局模型的目的是提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间。在传统的布局方式中，block 布局是把块在垂直方向从上到下依次排列的；而 inline 布局则是在水平方向来排列。弹性盒布局并没有这样内在的方向限制，可以由开发人员自由操作。
试用场景：弹性布局适合于移动前端开发，在Android和ios上也完美支持。

```

21. 实现一个三角形
```

.sanjiao{
  width: 0;
  height: 0;
  border-top: 100px solid transparent;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 100px solid blue;
}

```

22. 常见的兼容性问题？
```
不同浏览器的标签默认的margin和padding不一样。
*{margin:0;padding:0;}

IE6双边距bug：块属性标签float后，又有横行的margin情况下，在IE6显示margin比设置的大。hack：display:inline;将其转化为行内属性。
渐进识别的方式，从总体中逐渐排除局部。首先，巧妙的使用“9”这一标记，将IE浏览器从所有情况中分离出来。接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

{
background-color:#f1ee18;/*所有识别*/
.background-color:#00deff\9; /*IE6、7、8识别*/
+background-color:#a200ff;/*IE6、7识别*/
_background-color:#1e0bd1;/*IE6识别*/
}

设置较小高度标签（一般小于10px），在IE6，IE7中高度超出自己设置高度。hack：给超出高度的标签设置overflow:hidden;或者设置行高line-height 小于你设置的高度。
IE下，可以使用获取常规属性的方法来获取自定义属性,也可以使用getAttribute()获取自定义属性；Firefox下，只能使用getAttribute()获取自定义属性。解决方法:统一通过getAttribute()获取自定义属性。
Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。
超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了。解决方法是改变CSS属性的排列顺序:L-V-H-A ( love hate ): a:link {} a:visited {} a:hover {} a:active {}
```

23. 浏览器是怎样解析CSS选择器的
```
CSS选择器的解析是从右向左解析的。若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面。

而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。在建立 Render Tree 时（WebKit 中的「Attachment」过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果（Style Rules）来确定生成怎样的 Render Tree。
```

24. margin和padding分别适合什么场景使用？
```
何时使用margin：
需要在border外侧添加空白
空白处不需要背景色
上下相连的两个盒子之间的空白，需要相互抵消时。

何时使用padding：
需要在border内侧添加空白
空白处需要背景颜色
上下相连的两个盒子的空白，希望为两者之和。
兼容性的问题：在IE5 IE6中，为float的盒子指定margin时，左侧的margin可能会变成两倍的宽度。通过改变padding或者指定盒子的display：inline解决。

```

25.  怎么让Chrome支持小于12px 的文字？
```
p{font-size:10px;-webkit-transform:scale(0.8);} //0.8是缩放比例
```

26. 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度
```
<div class="outer">
  <div class="A"></div>
  <div class="B"></div>
</div>

.outer{
  position: relative;
  border: yellowgreen 1px solid;
  height: 100%;
}
.A{
  height: 100px; background: #BBE8F2;
}
.B{
  background: #D9C666;
  width: 100%;
  position: absolute;
  top: 100px;
  left: 0;
  bottom: 0;
}
```

##### display、visibility、opacity
```
display: none (不占空间，不能点击)（场景，显示出原来这里不存在的结构）
visibility: hidden（占据空间，不能点击）（场景：显示不会导致页面结构发生变动，不会撑开）
opacity: 0（占据空间，可以点击）（场景：可以跟transition搭配）

总结一下：
结构：
display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击，
visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击
opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击

继承：
display: none和opacity: 0：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。
visibility: hidden：是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式。

性能：
displaynone : 修改元素会造成文档回流,读屏器不会读取display: none元素内容，性能消耗较大
visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少 读屏器读取visibility: hidden元素内容
opacity: 0 ： 修改元素会造成重绘，性能消耗较少

```

##### flex-grow flex-shrink flex-basis
```
这三个属性都是相对于主轴来说的

1. flex-grow 针对放大的情况， 即有剩余空间的情况，分配的是剩余的占据空间, 即比例乘以剩余空间 比如

  <div class="parent">
    <div class="child1"></div> 
    <div class="child2"></div> 
  </div>
  .parent {
    width: 100px;
  }
  .child1 {
    width: 50px;
    height: 10px;
    flex-grow: 3;
    background: green;
  }

  .child2 {
    width: 10px;
    flex-grow: 1;
    background: yellow;
  }
按照上面计算的话就是 .child1 width = 50 + ( 100 - 60 ) * 3 / 4 = 80px .child2 width = 10 + ( 100 - 60 ) * 1 / 4 = 20px;



2. flex-shrink 针对的是缩小的情况，即子大小的和大于父 比如

  <div class="parent">
    <div class="child1"></div> 
    <div class="child2"></div> 
  </div>
  .parent {
    width: 50px;
  }
  .child1 {
    width: 150px;
    height: 10px;
    flex-shrink: 3;
    background: green;
  }

  .child2 {
    width: 50px;
    flex-shrink: 1;
    background: yellow;
  }
注意 flex-shrink的比例是相对于自身大小来说 由于上面 (150 + 50) > 50 所以 flex-shrink起作用 计算公式为 child1的缩小比例为child2的三倍, 即 child1缩小 3x, child2 缩小x 50 = 150 * (1- 3x) + 50 * (1 - x), x = 0.3

child1 width = 150 * (1 - 3 * 0.3) = 15; child2 width = 50 * (1- 0.3) = 35

3. flex-basis 可以理解成用来替代width的
当flex-basis和width属性同时存在时，width属性不生效，flex item的宽度为flex-basis设置的宽度
max-width决定了flex items的最大宽度
max-width决定了flex items的最大宽度
```

##### flex
flex-direction属性决定主轴的方向（即项目的排列方向）。
justify-content属性定义了项目在主轴上的对齐方式。
align-items属性定义项目在交叉轴上如何对齐。
align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
flex-wrap属性：默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
flex-flow：flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
order属性：定义项目的排列顺序。数值越小，排列越靠前，默认为0。
flex属性：是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
align-self属性：允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。


##### rgba和opacity区别
1.opacity属性的值，可以被其子元素继承(不能被继承吧？？？)，给父级div设置opacity属性，那么所有子元素都会继承这个属性，并且，该元素及其继承该属性的所有子元素的所有内容透明度都会改变。而RGBA设置的元素，只对该元素的背景色有改变，并且，该元素的后代不会继承该属性。

##### px、em、rem、vw、vh
px：像素（pixel）相对长度单位，，是相对于屏幕显示器分辨率而言的；
em：em的值并不是固定的，会集成父级元素的字体大小；
　　注意：　　
　　1.body选择其中声明Font-size=62.5%；
　　2.将原来的px数值除以10，然后换上em作为单位；
　　3.重新计算那些被放大的字体的em数值。避免字体大小的重复声明。
　　任何浏览器默认字体大小都是16px，所有未经调整的浏览器都符合1em=16px，南无0.75em=12px，10px=0.625em。为了简化Font-size的换算，需要在css中的body选择器中声明Font-size=62.5%，这就使em的值变为16px*62.5%=10px，这样12px就是1.2em，10px就是1em，也就是将原来的px数值除以10换上em的单位就可以了。
rem：相对单位，（root em 即rem），使用rem为单位设置字体大小时，是相对于HTML根元素的大 小，可通过该根元素就成比例的修改调整所有字体大小，一般用的时候都是写在body或html上面，body{fontsize:625%;}也就是1rem=100px；
vw：视口的最大宽度，1vw=视口宽度的百分之一；
vh：视口得最大高度，1vh=视口高度的百分之一；
vmin/vm：相对于视口的宽度或高度中较小的那个。其中最小的那个被均分为100单位的vmin（即vm）。


##### 
//一行
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
//两行
 text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;



##### DNS预解析具体用法
//用meta信息来告知浏览器, 当前页面要做DNS预解析
<meta http-equiv="x-dns-prefetch-control" content="on">
在页面header中使用link标签来强制对DNS预解析: 
<link rel="dns-prefetch" href="//www.zhix.net">


##### getComputedStyle与style的区别
```
我们使用element.style也可以获取元素的CSS样式声明对象，但是其与getComputedStyle方法还有有一些差异的。
只读与可写
正如上面提到的getComputedStyle方法是只读的，只能获取样式，不能设置；而element.style能读能写，能屈能伸。
获取的对象范围
getComputedStyle方法获取的是最终应用在元素上的所有CSS属性对象（即使没有CSS代码，也会把默认的祖宗八代都显示出来）；而element.style只能获取元素style属性中的CSS样式。因此对于一个光秃秃的元素<p>，getComputedStyle方法返回对象中length属性值（如果有）就是190+(据我测试FF:192, IE9:195, Chrome:253, 不同环境结果可能有差异), 而element.style就是0。
```
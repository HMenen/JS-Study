#### 隐藏div的几种常见方法
'''
1.display:none; 
2.visibility:hidden; 
3.background-color:transparent;或者设成与背景一样的颜色即可 
4.opacity来设置不透明级别，注意兼容性filter… 
5.给div一个margin负值，这个负值恰好等于div自身的高度或宽度 
6.设置两个大小一样的div，第一个左浮动，第二个不浮动，即可将第二个div隐藏 
7.设置一个父div和一个子div，子div绝对定位，父div相对定位，子div的left就是子div的宽度 
8.给父div1设置一个固定的宽度，给子div2设置的宽度远大于父div，并给父div1设置overflow:hidden,并给子div设置margin值即在父div1中没被隐藏的剩余宽度，代码如下： 
#div1{width:100px;height:200px;overflow:hidden;} 
#div2{width:200px;height:200px;background:green;margin-left:100px;} 
9.将div的宽度和高度设置为0
'''
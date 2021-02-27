##### 1px问题
这个默认是移动端的问题了。由于移动端一般都会设置屏幕宽度为设备宽度，width=device-width,initial-scale=1, 而有些屏幕是2倍屏，导致在移动端上设置1px就是看上去的2px。

解决方法：

通过transform将宽度缩小一半，transform:scaleY(0.5)
通过@media媒体查询，查询当前设置的屏幕倍率，统一设置transform, 参考: 移动端(手机)1像素边框真正实现
模仿淘宝(不确定是不是来自淘宝的)，设置屏幕宽度为设计师的设计尺寸(一般为750)。
<meta name="viewport" content="width=750, user-scalable=no">


由于移动端不同设备的dpr不同，所以1px边框的设计如下

dpr:物理像素与设备像素比

```
border-1px($color)
   position: relative
   &::after
     dispaly:block
     position:absolute
     left: 0
     bottom:0//定位到元素下面
     width:100%//相对于父元素是100%宽度
     border-bottom:1px solid $color
     content:''
使用函数：函数所在位置 即为 函数中代码所在位置


以下针对不同dpr进行缩放

@media (-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5)
  .border-1px
    &::after
      -webkit-transform:scaleY(0.7)
      transform:scaleY(0.7)
 
@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2)
  .border-1px
    &::after
      -webkit-transform:scaleY(0.5)
      transform:scaleY(0.5)
```
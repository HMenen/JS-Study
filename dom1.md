#### DOM事件的级别
'''
DOM0写法：
element.onclick = function () {}

DOM2写法：
element.addEventListener('click', function () {

}, false);

DOM3写法：DOM3中，增加了很多事件类型，比如鼠标事件、键盘事件等。
element.addEventListener('keyup', function () {

})
'''
#### DOM事件模型
事件模型：捕获和冒泡
捕获：从外到里
冒泡：从里到外

#### DOM事件流
DOM事件流讲的就是：浏览器在于当前页面做交互时，这个事件是怎么传递到页面上的。  
类似于Android里面的事件传递。  

完整的事件流，分三个阶段：
（1）捕获：从 window 对象传到 目标元素。
（2）目标阶段：事件通过捕获，到达目标元素，这个阶段就是目标阶段。
（3）冒泡：从目标元素传到 Window 对象。

![Alt text](https://camo.githubusercontent.com/8e7c4505699fa3dfc4c9dcac48db3bab022a2f86/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330365f313035382e706e67)
![Alt text](https://camo.githubusercontent.com/945ca040a47378c67f526d88afbee16c4e5afe99/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230345f313231382e6a7067)

#### 描述DOM事件捕获的具体流程
![Alt text](https://camo.githubusercontent.com/40046373eea8996142b6d14025f66f97aafee1d6/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330365f313130332e706e67)

'''
说明：捕获阶段，事件依次传递的顺序是：window --> document --> html--> body --> 父元素、子元素、目标元素。
PS1：第一个接收到事件的对象是 window（有人会说body，有人会说html，这都是错误的）。
PS2：JS中涉及到DOM对象时，有两个对象最常用：window、doucument。它们俩也是最先获取到事件的。
'''

'''
在 js中：
如果想获取 body 节点，方法是：document.body；
但是，如果想获取 html节点，方法是document.documentElement
'''

#### Event对象的常见 api 方法
###### event.preventDefault();  阻止默认事件
###### 阻止冒泡 
'''
w3c的方法：（火狐、谷歌、IE11）
event.stopPropagation();
IE10以下则是：
event.cancelBubble = true;
'''

兼容写法：
'''
function (event) {
    event = event || window.event;
    if(event && event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}
'''

###### 设置事件优先级
event.stopImmediatePropagation();

#### 自定义事件
'''
var myEvent = new Event('clickTest');
element.addEventListener('clickTest', function () {
    
})
//元素注册事件
element.dispatchEvent(myEvent); //注意，参数是写事件对象 myEvent，不是写 事件名 clickTest
'''

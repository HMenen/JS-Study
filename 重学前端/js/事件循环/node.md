https://segmentfault.com/a/1190000018730085
http://caibaojian.com/toutiao/5773/

##### node 和 浏览器 eventLoop的主要区别
两者最主要的区别在于浏览器中的微任务是在每个相应的宏任务中执行的，而nodejs中的微任务是在不同阶段之间执行的。

输入数据阶段(incoming data)->轮询阶段(poll)->检查阶段(check)->关闭事件回调阶段(close callback)->定时器检测阶段(timers)->I/O事件回调阶段(I/O callbacks)->闲置阶段(idle, prepare)->轮询阶段...
##### nodejs执行JS代码过程及事件循环过程
1. node初始化
初始化node环境
执行输入的代码
执行process.nextTick回调
执行微任务(microtasks)

2. 进入事件循环
2.1、进入Timer阶段
检查Timer队列是否有到期的Timer的回调，如果有，将到期的所有Timer回调按照TimerId升序执行
检查是否有process.nextTick任务，如果有，全部执行
检查是否有微任务(promise)，如果有，全部执行
退出该阶段

2.2、进入Pending I/O Callback阶段
检查是否有Pending I/O Callback的回调，如果有，执行回调。如果没有退出该阶段
检查是否有process.nextTick任务，如果有，全部执行
检查是否有微任务(promise)，如果有，全部执行
退出该阶段

2.3、进入idle，prepare阶段
这个阶段与JavaScript关系不大，略过

2.4、进入Poll阶段
首先检查是否存在尚未完成的回调，如果存在，分如下两种情况：
###### 第一种情况：有可执行的回调
执行所有可用回调(包含到期的定时器还有些IO事件等)
检查是否有process.nextTick任务，如果有，全部执行
检查是否有微任务(promise)，如果有，全部执行
退出该阶段
###### 第二种情况：没有可执行的回调
检查是否有immediate回调，如果有，退出Poll阶段。如果没有，阻塞在此阶段，等待新的事件通知
如果不存在尚未完成的回调，退出Poll阶段

2.5、进入check阶段
如果有immediate回调，则执行所有immediate回调
检查是否有process.nextTick任务，如果有，全部执行
检查是否有微任务(promise)，如果有，全部执行
退出该阶段

2.6、进入closing阶段
如果有immediate回调，则执行所有immediate回调
检查是否有process.nextTick任务，如果有，全部执行
检查是否有微任务(promise)，如果有，全部执行
退出该阶段

3. 检查是否有活跃的handles(定时器、IO等事件句柄)
如果有，继续下一轮事件循环
如果没有，结束事件循环，退出程序


###### 注意：事件循环的每一个子阶段退出之前都会按顺序执行如下过程：
检查是否有 process.nextTick 回调，如果有，全部执行。
检查是否有 微任务(promise)，如果有，全部执行。
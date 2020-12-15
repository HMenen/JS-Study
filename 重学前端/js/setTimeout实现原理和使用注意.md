https://mp.weixin.qq.com/s/7qTRSMqaqG8XZ9rpEBhYNQ

浏览器渲染进程中所有运行在主线程上的任务都需要先添加到消息队列，然后事件循环系统再按照顺序执行消息队列中的任务。

在 Chrome 中除了正常使用的消息队列之外，还有另外一个消息队列(我们可以称为延迟队列)，这个队列中维护了需要延迟执行的任务列表，包括了定时器和 Chromium 内部一些需要延迟执行的任务。所以当通过 JavaScript 创建一个定时器时，渲染进程会将该定时器的回调任务添加到延迟队列中。
浏览器中有个函数是专门用来处理延迟执行任务的，暂且称为ProcessDelayTask，它的主要逻辑如下：
```
void ProcessTimerTask(){
  //从delayed_incoming_queue中取出已经到期的定时器任务
  //依次执行这些任务
}

TaskQueue task_queue；
void ProcessTask();
bool keep_running = true;
void MainTherad(){
  for(;;){
    //执行消息队列中的任务
    Task task = task_queue.takeTask();
    ProcessTask(task);

    //执行延迟队列中的任务
    ProcessDelayTask()

    if(!keep_running) //如果设置了退出标志，那么直接退出线程循环
        break; 
  }
}
```
其实就是，当浏览器处理完消息队列中的一个任务之后，就会开始执行 ProcessDelayTask 函数。ProcessDelayTask 函数会根据发起时间和延迟时间计算出到期的任务，然后依次执行这些到期的任务。等到期的任务执行完成之后，再继续下一个循环过程。这样定时器就实现了，从这个过程也可以明显看出，定时器并不一定是准时延后执行的。


##### 注意事项
1.如果当前任务执行时间过久，会延迟到期定时器任务的执行
2.使用 setTimeout 设置的回调函数中的 this 环境不是指向回调函数（重要）
3.setTimeout 存在嵌套调用问题：如果 setTimeout 存在嵌套调用，调用超过5次后，系统会设置最短执行时间间隔为 4 毫秒。
4.未激活的页面，setTimeout 执行最小间隔是 1000 毫秒
5.延时执行时间有最大值
Chrome、Safari、Firefox 都是以 32 个 bit 来存储延时值的，32bit 最大只能存放的数字是 2147483647 毫秒，这就意味着，如果 setTimeout 设置的延迟值大于 2147483647 毫秒（大约 24.8 天）时就会溢出，这导致定时器会被立即执行。
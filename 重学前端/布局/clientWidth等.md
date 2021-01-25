https://segmentfault.com/a/1190000019507352?utm_source=tag-newest

clientLeft = scrollbarWidth + borderLeftWidth

默认情况下(没有滚动条情况下) 
clientWidth = content width + paddingLeftWidth + paddingRightWidth;
对上面示例来说 clientWidth = 200 + 10 + 10;

有滚动条情况下：
clientWidth = (content width + paddingLeftWidth + paddingRightWidth) - scrollbarWidth

可以推断出滚动条计算方式:
scrollbarWidth = (content width + paddingLeftWidth + paddingRightWidth) - clientWidth;
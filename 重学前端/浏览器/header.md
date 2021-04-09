##### Content-Length
Content-Length是HTTP消息长度, 用十进制数字表示的八位字节的数目, 是Headers中常见的一个字段. Content-Length应该是精确的, 否则就会导致异常 (特别地, HTTP1.0中这个字段可有可无).

Content-Length使用十进制的数字表示了消息的长度, 服务端/客户端通过它来得知后续要读取消息的长度.

Content-Length > 实际长度
如果Content-Length比实际的长度大, 服务端/客户端读取到消息结尾后, 会等待下一个字节, 自然会无响应直到超时.

Content-Length < 实际长度
如果这个长度小于实际长度, 首次请求的消息会被截取, 比如参数为param=piaoruiqing, Content-Length为10, 那么这次请求的消息会被截取为: param=piao

不确定Content-Length的值怎么办
Content-Length首部指示出报文中实体主体的字节大小. 但如在请求处理完成前无法获取消息长度, 我们就无法明确指定Content-Length, 此时应该使用Transfer-Encoding: chunked
// use-media-antd-query 查询屏幕大小

/**
 * 该方法用来检查media   query语句。
 * var result = window.matchMedia("(min-width: 600px)");
 * 它返回一个MediaQueryList对象。该对象有以下两个属性。
 * media：查询语句的内容。
 * matches：如果查询结果为真，值为true，否则为false。
 * var result = window.matchMedia("(min-width: 600px)"); 
 * result.media  // (min-width: 600px)
 * result.matches  // true
 * 一个简单的用法，就是根据查询结果，加载相应的样式表。
 */

var result = window.matchMedia("(min-width: 600px)");
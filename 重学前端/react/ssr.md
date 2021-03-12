##### ssr

1. 根据虚拟dom，通过 driver-server 将虚拟dom转换成 server对应的真实dom结构
1）将虚拟dom转换成 server对应的真实dom结构
此时server对应的真实dom结构，如代码所示，node的childNodes是一个数组
``` 
appendChild(node, parent) {
  parent.childNodes.push(node);
  node.parentNode = parent;
}
```
2)递归遍历生成后的dom结构，将dom转换为string类型
3）生成html


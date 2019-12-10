##### native updateChild
1. 遍历nextChildElement所有节点
1）更新prevChild节点
2）prevChild中不可更新的节点则记录为删除（之后进行删除，令unmount=true）
3）对新增的childElement，创建其渲染容器（nextChildren[name] = instantiateComponent(nextElement);）
'''
for (let index = 0, length = nextChildrenElements.length; index < length; index++) 
'''
2. 如果 prevChildren != null
则删除 prevChildren中 无效节点（在1中标记unmount=true的 || !nextChildren[name]的）
注意：prevChildren中 的第一个节点暂时不删除之后便于节点定位插入

3. 如果 nextChildren != null
'''
for (let name in nextChildren)进行遍历
1）let nextChild = nextChildren[name];
   let prevChild = prevChildren && prevChildren[name];
    if (prevChild === nextChild) {
      let prevChildNativeNode = prevChild.getNativeNode();

      if (prevChild._mountIndex !== nextIndex) {
        insertNodes(prevChildNativeNode);
      }
    }
   若prevChild的index值发生了更改则进行顺序的更改，进行插入操作
2）新节点执行插入操作
nextChild.mountComponent(
  parent,
  this._instance,
  context,
  insertNodes // Insert nodes mounter
);
'''

##### native mountComponent
1. 判断是否有孩子节点 props.children，有孩子节点则执行 mountChildren()、this.mountNativeNode(nativeNodeMounter);（注意二者的顺序）
其中mountChildren 生成孩子节点
mountNativeNode 执行新节点的插入操作
'''
if (appendType === TREE) {
  // Should after process children when mount by tree mode
  mountChildren();
  this.mountNativeNode(nativeNodeMounter);
} else {
  // Should before process children when mount by node mode
  this.mountNativeNode(nativeNodeMounter);
  mountChildren();
}
'''

##### native mountChildren
遍历children，针对每一个child生成渲染容器，然后渲染容器mount
'''
let renderedChildrenImage = children.map((element, index) => {
  let renderedChild = instantiateComponent(element);
  let name = getElementKeyName(renderedChildren, element, index);
  renderedChildren[name] = renderedChild;
  renderedChild._mountIndex = index;
  // Mount children
  let mountImage = renderedChild.mountComponent(
    parent,
    this._instance,
    context,
    nativeNodeMounter
  );
  return mountImage;
});
'''
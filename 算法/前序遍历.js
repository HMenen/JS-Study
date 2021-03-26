function preTrack(root) {
  let list = [];
  let path = [];
  let node = root;
  while(path.length > 0 || node) {
    while(node) {
      list.push(node.value);
      path.push(node);
      node = node.leftChild;
    }
    if (path.length > 0) {
      node  = path.pop();
      node = node.rightChild;
    }
  }
  return list;
}
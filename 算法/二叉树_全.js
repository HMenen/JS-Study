/**
 * 树的深度
 * @param {Node} root 
 */
function getDepth(root) {
  let queue = [root];
  let depth = 0;
  if (root === null) return 0;
  while(queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node && node.left) queue.push(node.left);
      if (node && node.right) queue.push(node.right);
    }
    depth++;
  }
  return depth;
}

/**
 * 前序遍历
 * Node{value: String, left: null, right: nul}
 * @param {Node} root 
 */
function preOrder(root) {
  let path = [];
  let result = [];
  let node = root;
  if (root === null) return;
  while(node || path.length) {
    while(node) {
      result.push(node.value);
      path.push(node);
      node = node.left;
    }
    if (path.length) {
      let item = path.pop();
      node = item.right;
    }
  }
  return path;
}

/**
 * 中续遍历
 * @param {Node} root 
 */
function midOrder(root) {
  let path = [];
  let result = [];
  let node = root;
  if (root === null) return;
  while(node || path.length) {
    while(node) {
      path.push(node);
      node = node.left
    }
    if (path.length) {
      let item = path.pop();
      result.push(item.value);
      node = item.right;
    }
  }
  return path;
}

/**
 * 后序遍历
 * @param {Node} root 
 */
function postOrder(root) {
  let stack = [];
  let result = [];
  let node = root;
  let prev;
  if (root === null) return;
  while(node || stack.length) {
    while(node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    if (node.right === null || node.right === prev) {
      result.push(node.value);
      prev = node;
      node = null;
    } else {
      stack.push(node);
      node = node.right;
    }
  }
  return result;
}

/**
 * 广度遍历
 * @param {Node} root 
 * @returns 
 */
function BFS(root) {
  let res = [];
  let queue = [root];
  if (root === null) return;
  while(queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      res.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return res
}

/**
 * 指定路径中的删除无效结点
 * @param {*} list 
 * @param {*} id
 * @returns 
 */
function judgeList(list, id) {
  let p, parent = [];
  let target = search(list, id, parent);
  if (target.children.length) {
    return list;
  }
  if (target) {
    p = parent.pop();
    let index = p.children.indexOf(target);
    p.children.splice(index, 1);
  }
  while(parent.length) {
    p = parent.pop();
    p.children.filter(node => node.children.length > 0)
  }
  return list;
}

function search(list, id, parent = []) {
  for(let i = 0; i < list.length; i++) {
    let item = list[i];
    if (item.id === id) {
      return item;
    } else if (item.children.length > 0) {
      parent.push(item);
      return search(item.children, id, parent);
    }
  }
}

const arr =[
  {id: 1, pid: null, 
    children: [
      {
        id: 2, 
        pid: 1, 
        children: [
          {id: 3, pid: 2, children: []}
        ]
      },
      {
        id: 11, pid: 1, children: [{id: 111, pid: 111, children: []}]
      }
  ]
},
  {id: 6, pid: null, children: []}
]

console.log(filterTree(arr, 3)[0].children);
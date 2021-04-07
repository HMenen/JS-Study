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
 * 生成一棵树
 * @param {Array} arr 
 * @returns 
 */
function generateTree(arr) {
  const map = {};
  const tree = {};
  const roots = [];
  const ret = {};
  arr.forEach(item => {
    map[item.id] = {...item, children: []};
  })
  Object.keys(map).forEach(key => {
    let parentId = map[key]['pid'];
    if (parentId === null) {
      roots.push(map[key].id);
      tree[map[key].id] = {...map[parentId], children: []}
    } else {
      map[parentId].children.push(map[key])
      tree[parentId]
      ? tree[parentId].children.push(map[key])
      : tree[parentId] = map[parentId]
    }
  })
  roots.forEach(id => ret[id] = tree[id]);
  return [ ret ];
}

var arr = [
  {id: 1, pid: null}, {id: 2, pid: 1}, {id: 3, pid: 1},
  {id: 4, pid: 2}, 
  {id: 5, pid: 4},
  {id: 6, pid: null}, {id: 7, pid: 6},
]

console.log(generateTree(arr)[0][1].children[0])
 

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
    p.children = p.children.filter(node => node.children.length > 0)
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
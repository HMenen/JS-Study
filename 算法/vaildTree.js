function buildTree(arr) {
  arr.forEach(item => {
    let children = item.children;
    for(let i = 0; i < children.length; i++) {
      children[i].parent = item;
      buildTree(children);
    }
  });
  return arr;
}

function findLeaf(arr, id) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return arr[i]
    } else {
      return findLeaf(arr[i].children, id);
    }
  }
}

function isNotVaild(nodes) {
  return nodes.children.length === 0
}

function filterTree(tree, id) {
  buildTree(tree);
  let leaf = findLeaf(tree, id);
  while(leaf) {
    if (isNotVaild(leaf)) {
      let index = leaf.parent? leaf.parent.children.indexOf(leaf): tree.indexOf(leaf);
      leaf.parent? leaf.parent.children.splice(index, 1): tree.splice(index, 1);
    }
    leaf = leaf.parent;
  }
  return tree;
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

// console.log(judgeList(arr, 3)[0].children[0])
// console.log(filterTree(arr, 3)[0].children)
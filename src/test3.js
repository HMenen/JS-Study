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
 
function binarySort(arr, start, end, target) {
  if (start > end) return;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) {
    return binarySort(arr, mid + 1, end, target);
  } else if (arr[mid] > target) {
    return binarySort(arr, start, mid - 1, target);
  }
}


// function findUnVaild(arr, num) {
//   arr.forEach((item, index) => {
//     for (let i = 0; i < item.children.length; i++) {
//       let child = item.children[i];
//       if (child.id === num) {
//         const flag = handle(item);
//         if (item.children.length === 0) {
//           arr.split(index, 1)
//         } else {
//           return;
//         }
//       } else {
//         if (child.children.length > 0) {
//           findUnVaild(child.children, num)
//         }
//       }
//     }
//   })
// }
// function handle(item) {
//   if (!isValid(item)) {
//     item.children.split(i, 1);
//     return false;
//   }
// }
// function isValid(data) {
//   if (data.children.length === 0){
//     return false;
//   }
//   return true
// }


[
  {id: 1, pid: null, children: [{id: 2, pid: 1, children: [{id: 3, pid: 2, children: []}]}]},
  {id: 6, pid: null, children: []}
]

function buildTree(parent, nodes) {
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    node.parent = parent;
    buildTree(node, node.children);
  }
}

function findLeaf(nodes, id) {
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (id === node) {
      return node;
    }
    return findLeaf(node, node.children);
  }
  return null;
}

function isValidNode(node) {
  return node.children.length > 0 && node.children.every(isValidNode);
}


function removeInvalidNode(nodes, id) {
  buildTree(nodes);

  const targetNode = findLeaf(nodes, id);

  while (targetNode) {
    if (!isValidNode(targetNode)) {
      const index = targetNode.parent.children.indexOf(targetNode);
      targetNode.parent.children.splice(index, 1);
      targetNode = targetNode.parent;
    }
  }

  return nodes;
}
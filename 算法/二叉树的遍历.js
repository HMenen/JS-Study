/**
 * 前序遍历
 * @param {Node} root 
 */
function preOrder(root) {
  let result = [];
  let path = [];
  let p = root;
  while(p || path.length > 0) {
    while(p) {
      path.push(p);
      result.push(p.value);
      p = p.leftChild;
    }
    if (path.length > 0) {
      p = path.pop();
      p = p.rightChild;
    }
  }
  return result;
}
/**
 * 中序遍历
 * @param {Node} root 
 */
function midOrder(root) {
  let path = [];
  let result = [];
  let p = root;
  while(p || path.length > 0) {
    while(p) {
      path.push(p);
      p = p.leftChild;
    }
    if (path.length > 0) {
      p = path.pop();
      result.push(p.value);
      p = p.rightChild;
    }
  }
  return result;
}
/**
 * 后序遍历
 * @param {Node} root 
 */
function postOrder(root) {
  let path = [];
  let result = [];
  let p = root;
  while(p) {
    while(p) {
      path.push(p);
      if (p.leftChild) {
        path.push(p.leftChild)
      }
      if (p.rightChild) {
        path.push(p.rightChild)
      }
    }
  }
  while(path.length > 0) {
    p = path.pop();
    result.push(p.value)
  }
  return result;
}
/**
 * 广度遍历
 * @param {Node} root 
 * @returns 
 */
function breadthFirstTravel(root) {
  let track = [];
  let result = [];
  let p = root;
  track.push(p);
  while(track.length > 0) {
    let len = track.length;
    for (let i = 0; i < len; i++) {
      result.push(track.shift())
      if(track[i].leftChild) {
        track.push(track[i].leftChild);
      }
      if (track[i].rightChild) {
        track.push(track[i].rightChild);
      }
    }
  }
  return result;
}
/**
 * 深度遍历
 * @param {Node} root 
 * @returns 
 */
function depthFirstTravel(root) {
  let track = [];
  let result = [];
  let p = root;
  track.push(p);
  while(track.length > 0) {
    p = track.pop();
    result.push(p.value);
    if(p.rightChild) {
      track.push(p.rightChild);
    }
    if(p.leftChild) {
      track.push(p.leftChild);
    }
  }
  return result;
}

// 前序遍历
let dfs1 = function (node) {
  if (node) {
      result1.push(node.value);
      dfs1(node.left);
      dfs1(node.right);
  }
}

// 中序遍历
let result2 = [];
let dfs2 = function (node) {
  if(node) {
      dfs2(node.left);
      result2.push(node.value); // 直到该结点无左子树 将该结点存入结果数组 接下来并开始遍历右子树
      dfs2(node.right);
  }
}

// 后序遍历
let result3 = [];
let dfs3  = function(node) {
  if(node) {
      dfs3(node.left);
      dfs3(node.right);
      result3.push(node.value);
  }
}
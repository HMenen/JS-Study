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

function preOrder() {
  
}
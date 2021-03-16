/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let deep = 0;
  let node = root;
  if (node === null) return 0;
  return Math.max(depth(node.left, deep), depth(node.right, deep)) + 1;
};

function depth(node, num) {
  if (node === null) return num;
   num++;
   return Math.max(depth(node.left, num), depth(node.right, num));
}

//非递归 广度优先遍历
var maxDepth = function(root) {
  let queue = [];
  let depth = 0;
  if (root === null) return 0;
  queue.push(root);
  while(queue.length > 0) {
    let len = queue.length;
    for(let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node && node.left) queue.push(node.left);
      if (node && node.right) queue.push(node.right);
    }
    depth++;
  }
  return depth;
};
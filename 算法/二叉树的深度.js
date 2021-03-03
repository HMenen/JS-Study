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
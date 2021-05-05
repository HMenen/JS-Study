// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，
//这条路径上所有节点值相加等于目标和 targetSum 。
// 叶子节点 是指没有子节点的节点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 利用广度遍历
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return 
  let result = [root.val];
  let path = [root];
  while(path.length) {
    let len = path.length;
    for (let i = 0; i < len; i++) {
      let node = path.shift();
      let value = result.shift();
      if (node.left) {
        path.push(node.left);
        result.push(value + node.left.val);
      }
      if (node.right) {
        path.push(node.right);
        result.push(value + node.right.val);
      } 
      if (!node.left && !node.right) {
        if (value === targetSum) {
          return true;
        }
      }
    }
  }
  return false
}
// [1,2,3], targetSum = 5
console.log(hasPathSum([1,2,3], 5))
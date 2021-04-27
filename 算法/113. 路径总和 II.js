// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
  const result = [];
  let sum = targetSum;
  let path = [];
  dfs(root, sum, path, result);
  return result
};

function dfs(node, sum, path, result) {
  if (!node) return;
  if (node.val === sum && !node.left && !node.right) {
    result.push([...path, node.val]);
    return;
  }
  path.push(node.val);
  if (node.left) {
    dfs(node.left, sum - node.val, path, result);
  }
  if (node.right) {
    dfs(node.right, sum - node.val, path, result);
  }
  path.pop();
}
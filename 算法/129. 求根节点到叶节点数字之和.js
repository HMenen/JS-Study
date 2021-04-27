// 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
// 每条从根节点到叶节点的路径都代表一个数字：
// 例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
// 计算从根节点到叶节点生成的 所有数字之和 。
// 叶节点 是指没有子节点的节点。

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
 * @return {number}
 */
 var sumNumbers = function(root) {
  let path = [];
  let allPaths = [];
  let sum = 0;
  dfs(root, path, allPaths);
  console.log(allPaths)
  for(let i = 0; i < allPaths.length; i++) {
    sum += +allPaths[i].join('')
  }
  return sum;
};

function dfs(root, path, allPaths) {
  if (!root) return;
  if (!root.left && !root.right) {
    allPaths.push([...path, root.val]);
    return;
  }
  path.push(root.val);
  if (root.left) {
    dfs(root.left, path, allPaths);
  }
  if (root.right) {
    dfs(root.right, path, allPaths);
  }
  path.pop();
}
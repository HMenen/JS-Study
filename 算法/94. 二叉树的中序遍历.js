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
 * @return {number[]}
 * 递归方法
 */
 var inorderTraversal1 = function(root) {
  let ret = [];
  trackTree(root, ret);
  return ret;
};

function trackTree(root, ret) {
  if(!root) return;
  trackTree(root.left, ret);
  ret.push(root.val);
  trackTree(root.right, ret);
}

/**
 * 
 * @param {TreeNode} root 
 * @returns  {number[]}
 * 非递归
 */
var inorderTraversal2 = function(root) {
  let ret = [];
  let path = [];
  let head = root;
  while(path.length || head) {
    while(head) {
      path.push(head.left);
      head = head.left;
    }
    if(path.length) {
      let node = path.pop();
      ret.push(node.val)
      head = node.right;
    }
  }
  return ret;
};
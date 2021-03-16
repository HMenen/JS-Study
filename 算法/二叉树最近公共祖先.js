//https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/submissions/
var lowestCommonAncestor = function(root, p, q) {
  if (root === null || root === p || root === q) {
      return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
      return root;
  } else if (left && !right) {
      return left;
  } else if (right && !left) {
      return right;
  } else {
      return null;
  }
};
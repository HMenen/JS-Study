/**
请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，
第三行再按照从左到右的顺序打印，其他行以此类推。
例如:
给定二叉树: [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [20,9],
  [15,7]
]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var generateTree = function(list) {
  let root = new Node(list[0]);
  const nodeList = [root]
  for(let i= 1; i < list.length; i+=2) {
    let node = nodeList.shift();
    const leftChild = list[i] !== null? new Node(list[i]): null;
    const rightChild = list[i + 1] !== null? new Node(list[i + 1]): null;
    node.left = leftChild;
    node.right = rightChild;
    nodeList.push(leftChild, rightChild)
  }
  return root;
}

var levelOrder = function(arr) {
  const root = generateTree(arr);
  let stacks = [ root ];
  let result = [];
  let depth = 0;
  while(stacks.length) {
    const len = stacks.length;
    let list = [];
    depth++;
    for (let i = 0; i < len; i++) {
      const node = stacks.shift();
      node && stacks.push(node.left);
      node && stacks.push(node.right);
      node && list.push(node.value);
    }
    if (depth % 2 === 0 && list.length > 0) {
      result.push(list.reverse());
    } else if(list.length > 0) {
      result.push(list)
    }
  }
  return result;
};

var arr = [3,9,20,null,null,15,7]
console.log(levelOrder(arr))
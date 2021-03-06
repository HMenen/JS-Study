/**
 * [19] 删除链表的倒数第N个节点
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let prev = head;
  let len = 0;
  while(prev !== null) {
    prev = prev.next;
    len++;
  }
  prev = head;
  const count = len - n - 1;
  if (count === -1) return head.next;
  for (let i = 0; i < count; i++) {
    prev = prev.next;
  }
  if (prev.next === null) {
      prev.next = null;
  } else {
    prev.next = prev.next.next;
  }
  return head;
};

/**
 * 一次遍历
 * @param {*} head 
 * @param {*} n 
 * @returns 
 */
function removeNthFromEnd (head, n) {
  if (!head) return head;
  let cur = head;
  let count = 0;
  let targetNode = null;
  while(cur) {
    count++;
    if (count > n) {
      targetNode = !targetNode? head: targetNode.next;
    }
    cur = cur.next;
  }
  if (n > count) return null;
  if (targetNode) {
    targetNode.next = targetNode.next.next;
  }
  return targetNode? head: head.next;
}


var hasCycle = function(head) {
  let len = 0;
  let p = head;
  while(p) {
    p = p.next;
    len ++
  }
  for(let i = 0; i < len; i++) {
    head = head.next;
  }
  if (head.next !== null) {
    return true;
  } else {
    return false;
  }
};
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let newL = new ListNode();
  let newHead = newL;
  while(p1 !== null && p2 !== null) {
    if (p1.val <= p2.val) {
      newL.next = p1;
      p1 = p1.next;
    } else {
      newL.next = p2;
      p2 = p2.next;
    }
    newL = newL.next;
  }
  if (p1) {
    newL.next = p1;
  }
  if (p2) {
    newL.next = p2;
  }
  return newHead.next;
};
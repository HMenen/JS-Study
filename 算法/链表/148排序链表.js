/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (64.96%)
 * Likes:    941
 * Dislikes: 0
 * Total Accepted:    131.3K
 * Total Submissions: 193.9K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 
 * 进阶：
 * 
 * 
 * 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [4,2,1,3]
 * 输出：[1,2,3,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [-1,5,3,4,0]
 * 输出：[-1,0,3,4,5]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 5 * 10^4] 内
 * -10^5 
 * 
 * 
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  return mergeSortRec(head);

};

function mergeSortRec(head) {
  if (!head || !head.next) {
    return head;
  }
  let midNode = getMidNode(head);
  let temp = midNode.next;
  midNode.next = null;
  let left = mergeSortRec(head);
  let right = mergeSortRec(temp);
  return mergeTwoList(left, right);
}

function getMidNode(head) {
  let slow = head;
  let fast = head;
  while(fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = slow.next.next;
  }
  return slow;
}

function mergeTwoList(left, right) {
  let head = new ListNode(-1);
  let cur = head;
  while(left && right) {
    if (left.val <= right.val) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next;
  }
  cur.next = left || right;
  return head.next;
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortList;
// @after-stub-for-debug-end
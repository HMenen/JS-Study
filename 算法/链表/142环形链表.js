/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (49.72%)
 * Likes:    810
 * Dislikes: 0
 * Total Accepted:    169.2K
 * Total Submissions: 312.4K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是
 * -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。
 * 
 * 说明：不允许修改给定的链表。
 * 
 * 进阶：
 * 
 * 
 * 你是否可以使用 O(1) 空间解决此题？
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：返回索引为 1 的链表节点
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：返回索引为 0 的链表节点
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 
 * 
 * 输入：head = [1], pos = -1
 * 输出：返回 null
 * 解释：链表中没有环。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目范围在范围 [0, 10^4] 内
 * -10^5 
 * pos 的值为 -1 或者链表中的一个有效索引
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var detectCycle = function(head) {
  if (!head || !head.next) return null;
  while(head) {
    if (head.flag) return head;
    head.flag = true;
    head = head.next
  }
  return null;
};
// @lc code=end


// 解法三：快慢指针（双指针法）
// 设置快慢两个指针，遍历单链表，快指针一次走两步，慢指针一次走一步，如果单链表中存在环，
//则快慢指针终会指向同一个节点，否则直到快指针指向 null 时，快慢指针都不可能相遇。
// 时间复杂度：O(n)
// 空间复杂度：O(1)
let hasCycle = function(head) {
    if(!head || !head.next) {
        return false
    }
    let fast = head.next.next, slow = head.next
    while(fast !== slow) {
        if(!fast || !fast.next) return false
        fast = fast.next.next
        slow = slow.next
    }
    return true
};

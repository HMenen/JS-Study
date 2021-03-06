/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 *
 * https://leetcode-cn.com/problems/lru-cache/description/
 *
 * algorithms
 * Medium (46.94%)
 * Likes:    1294
 * Dislikes: 0
 * Total Accepted:    153.3K
 * Total Submissions: 294.2K
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
 * 实现 LRUCache 类：
 * LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value)
 * 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，
 * 它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 * 进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？
 * 示例：
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 * 
 * 提示：
 * 1 
 * 0 
 * 0 
 * 最多调用 3 * 10^4 次 get 和 put
 */

function Node(key, value) {
  this.key = key || null;
  this.value = value || null;
  this.next = null;
  this.prev = null;
}

var addToHead = function(node, dummyHead) {
  const head = dummyHead.next;
  head.prev = node;
  node.next = head;
  node.prev = dummyHead;
  dummyHead.next = node
}

var removeNode = function(node) {
  node.next.prev = node.prev;
  node.prev.next = node.next;
  node.next = null;
  node.prev = null;
  return node;
}

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.memory = {};
  this.dummyHead = new Node();
  this.dummyTail = new Node();
  this.dummyHead.next = this.dummyTail;
  this.dummyTail.prev = this.dummyHead;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!(key in this.memory)) {
    return -1;
  } else {
    const node = this.memory[key];
    addToHead(removeNode(node), this.dummyHead);
    return node.value;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (key in this.memory) {
    const node = this.memory[key];
    node.value = value;
    addToHead(removeNode(node), this.dummyHead);
  } else {
    if (Object.keys(this.memory).length >= this.capacity) {
      const tailNode = this.dummyTail.prev;
      removeNode(tailNode);
      delete this.memory[tailNode.key];
    }
    const node = new Node(key, value);
    this.memory[key] = node;
    addToHead(node, this.dummyHead)
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4



/**
 * 练习
 * @param {*} key 
 * @param {*} value 
 */
function Node1(key, value) {
  this.key = key || null;
  this.value = value || null;
  this.next = null;
  this.prev = null;
}
function LRUCache(capacity) {
  this.capacity = capacity;
  this.memory = {};
  this.dummyHead = new Node1();
  this.dummyTail = new Node1();
  this.dummyHead.next = this.dummyTail;
  this.dummyTail.prev = this.dummyHead;

  this.get = function(key) {
    if (key in this.memory) {
      const node = this.memory[key];
      addToHead(removeNode(node), this.dummyHead);
      return node.value;
    } else {
      return -1;
    }
  }

  this.put = function(key, value) {
    if (key in this.memory) {
      const node = this.memory[key];
      node.value = value;
      addToHead(removeNode(node), this.dummyHead);
    } else {
      if (Object.keys(this.memory).length >= this.capacity) {
        const lastNode = this.dummyTail.prev;
        removeNode(lastNode);
        delete this.memory[lastNode.key]
      }
      const newNode = new Node1(key, value);
      this.memory[key] = newNode;
      addToHead(newNode, this.dummyHead);
    }
  }
}

function addToHead(node, dummyHead) {
  node.next = dummyHead.next;
  dummyHead.next.prev = node;
  node.prev = dummyHead;
  dummyHead.next = node;
}

function removeNode(node) {
  node.next.prev = node.prev;
  node.prev.next = node.next;
  node.next = null;
  node.prev = null;
  return node;
}


var myArray = [1, 2, 10, 30, 100];
function f() {
  myArray.forEach((item, index) => {
    if (index === 3) {
      return
    }
    console.log(index);
  })
}
f();
/**
 * 实现Event
 * 简略版
 */
class EventEmeitter {
  constructor(_events, _maxListeners) {
    this._events = _events || new Map(); // 储存事件/回调键值对
    this._maxListeners = _maxListeners || 10; // 设立监听上限
  }
}


// 触发名为type的事件
EventEmeitter.prototype.emit = function(type, ...args) {
  let handler;
  // 从储存事件键值对的this._events中获取对应事件回调函数
  console.log('-this._events--------', this._events)
  handler = this._events.get(type);
  if (args.length > 0) {
    handler.apply(this, args);
  } else {
    handler.call(this);
  }
  return true;
};

// 监听名为type的事件
EventEmeitter.prototype.addListener = function(type, fn) {
  // 将type事件以及对应的fn函数放入this._events中储存
  if (!this._events.get(type)) {
    this._events.set(type, fn);
  }
};

//测试========================================================
const myMap = new Map();
myMap.set('a1', () => {console.log('-----a1------')})
const e = new EventEmeitter(myMap);
e.addListener('print', function(a) {
  console.log('-------print--------', a);
})
e.emit('print', 1);
e.emit('a1', 1)
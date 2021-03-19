const { delete } = require("vue/types/umd");

class EventEmit{
  constructor(event) {
    this.__event = event || {}
  }
}

EventEmit.prototype.addEventListener = (type, fn) => {
  this.__event[type]? this.__event[type].push(fn): this.__event[type] = [ fn ];
}

EventEmit.prototype.emit = (type, ...args) => {
  let handler = this.__event[type];
  if (!handler) return;
  handler.forEach(event => {
    event.apply(this, args);
  })
}

EventEmit.prototype.remove = (type, fn) => {
  let handler = this.__event[type];
  let position = -1;
  if (!handler) return;
  if (handler.length === 1) {
    delete this.__event[type];
  } else {
    for(let i = 0; i < handler.length; i++) {
      if (fn === handler[i]) {
        position = i;
        break
      }
    }
  }
  if (position !== -1) {
    handler.splice(position, 1);
  }
}
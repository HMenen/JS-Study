class EventEmeitter1 {
  constructor(event) {
    this.__event = event || {}
  }
}

EventEmeitter1.prototype.addListener = function (type, fn) {
  let handler = this.__event[type];
  if (!handler) {
    this.__event[type] = fn;
  } else {
    if (handler && typeof handler === 'function') {
      this.__event[type] = [ handler, fn ]
    } else {
      this.__event[type].push(fn)
    }
  }
}

EventEmeitter1.prototype.emit = function(type, ...args) {
  let handler = this.__event[type];
  console.log('--handler------', handler, type)
  if (Array.isArray(handler)) {
    for(let i = 0; i < handler.length; i++) {
      if (args.length > 0) {
        handler[i].apply(this, args);
      } else {
        handler[i].call(this);
      }
    }
  } else {
    if (args.length > 0) {
      handler.apply(this, args);
    } else {
      handler.call(this);
    }
  }
}

EventEmeitter1.prototype.removeListener = function(type, fn) {
  let handler = this.__event[type];
  if (handler && typeof handler === 'function') {
    delete this.__event[type];
  } else {
    let position = -1;
    for (let i = 0; i < handler.length; i++) {
      if (handler[i] === fn) {
        position = i;
        break;
      }
    }
    if (position !== -1) {
      handler.splice(position, 1);
      if (handler.length === 1) {
        this.__event[type] = handler;
      }
    } else {
      return this;
    }
  }
}

//测试========================================================
const myMap = {};
myMap['a1'] = (args) => {
  console.log('-----a1------', args);
}
const e = new EventEmeitter1(myMap);
e.addListener('print', function(a) {
  console.log('-------print--------', a);
})
// e.emit('print', 1);

var fn1 = function() {
  console.log('-------222--------', 222);
}
e.addListener('a1', fn1)
e.addListener('a1', function() {
  console.log('-------333--------', 333);
})
e.emit('a1', 111);
e.removeListener('a1', fn1);
e.emit('a1', 11122);
class MyEvent{
  constructor(events) {
    this.__events = {}
    if (Object.keys(events).length > 0) {
      Object.keys(events).forEach(key => {
        this.__events[key] = [ events[key] ];
      })
    }
  }
}

MyEvent.prototype.addListener = function(type, fn) {
  const handler = this.__events[type];
  if (!handler) {
    this.__events[type] = [ fn ];
  } else{
    this.__events[type].push(fn);
  }
}

MyEvent.prototype.emit = function(type, ...args) {
  const handler = this.__events[type];
  if (!handler) {
    throw Error('this is no type event')
  }
  handler.forEach(event => {
    if (args.length > 0 ) {
      event.apply(this, args);
    } else {
      event.apply(this);
    }
  })
}

MyEvent.prototype.removeListener = function(type, fn) {
  const hanlder = this.__events[type];
  if (!hanlder) {
    throw Error('this is no type event')
  }
  const fnIndex = hanlder.indexOf(fn);
  if (fnIndex > -1) {
    hanlder.splice(fnIndex, 1);
  }
  if (hanlder.length === 0) {
    delete this.__events[type];
  }
}

//测试========================================================
function test(...args) {
  console.log('-------test--------', args);
}
const e = new MyEvent({a1: test});
// e.emit('a1', 1);

function a111(a) {
  console.log('-------print111--------', a);
}
e.addListener('print', a111)
e.addListener('print', function(a) {
  console.log('-------print222--------', a);
})
// e.emit('print', 1);
// e.removeListener('print', a111);
// e.emit('print', 111);
e.emit('print', 111);
e.emit('a1', 1, 121212);


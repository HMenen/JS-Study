/**
 * 事件监听
 */
class ValueEmitter {
    constructor(defaultValue) {
      this.handlers = [];
      this.value = defaultValue;
    }
  
    on(handler) {
        this.handlers.push(handler);
    }
  
    off(handler) {
        this.handlers.splice(this.handlers.indexOf(handler), 1);
    }
  
    emit(value) {
        this.handlers.forEach(item => item(value));
    }
  }

  var instance = new ValueEmitter();
  instance.on(() => {console.log('1111111')});
  instance.on(() => {console.log('2222222')});
  instance.on(() => {console.log('3333333')});
  var demo1 = function () {
      console.log('444444444');
  }
  instance.on(demo1);
  instance.emit();
  instance.off(demo1);
  instance.emit();
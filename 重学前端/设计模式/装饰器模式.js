//装饰者(decorator)模式能够在不改变对象自身的基础上，动态的给某个对象添加额外的职责，不会影响原有接口的功能。
var Plane = {
  fire: function () {
    console.log('------发射普通的子弹')
  }
}

function missileDecorator() {
  console.log('------发射超级子弹')
}

var fire = Plane.fire;

Plane.fire = function() {
  fire();
  missileDecorator();
}

console.log(Plane.fire())
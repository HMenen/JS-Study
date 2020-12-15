Object.create(proto, [propertiesObject])
参数：
proto ：新创建对象的原型对象。
propertiesObject ：可选。如果没有指定为 undefined，则是要添加到新创建对象的可枚举属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。这些属性对应Object.defineProperties()的第二个参数。如果propertiesObject参数不是 null 或一个对象，则抛出一个 TypeError 异常。

作者：SaltAir
链接：https://juejin.cn/post/6844903732371685384
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```
var p = {p: 12121}
var o = Object.create(p, {a: {value: 1}}) // 注意第二个参数的写法：{a: {value: 1}}，必须是value

console.log(o) //{a: 1}
console.log(o.__proto__ === p) // true
```
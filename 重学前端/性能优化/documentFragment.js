/**
 * 
 * 1.createDocumentFragment()方法，是用来创建一个虚拟的节点对象，或者说，是用来创建文档碎片节点。
 * 它可以包含各种类型的节点，在创建之初是空的。
 * 2.DocumentFragment节点不属于文档树，继承的parentNode属性总是null。它有一个很实用的特点，
 * 当请求把一个DocumentFragment节点插入文档树时，插入的不是DocumentFragment自身，而是它的所有子孙节点，即插入的是括号里的节点。
 * 这个特性使得DocumentFragment成了占位符，暂时存放那些一次插入文档的节点。它还有利于实现文档的剪切、复制和粘贴操作。 
 * 另外，当需要添加多个dom元素时，如果先将这些元素添加到DocumentFragment中，再统一将DocumentFragment添加到页面，
 * 会减少页面渲染dom的次数，效率会明显提升。
 * 3.如果使用appendChid方法将原dom树中的节点添加到DocumentFragment中时，会删除原来的节点。 
 */
var fragment = document.createDocumentFragment();
for(var i = 0; i < 1000; i++) {
    fragment.appendChild(li);
}
ul.appendChild(fragment);
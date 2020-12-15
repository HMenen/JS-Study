// 看到这里，可能会产生几个疑问：

// 为什么要设置getter？
// export default输出的值怎么没有设置getter？
// 设置getter是为了实现ES6模块的动态绑定，即export的值修改之后能够动态更新到import。但如果export default一个非函数或class，则不会动态绑定。如下：

// name.es.js
export let obj =  {a: 1,b: 2};
export let liveName = 'elson';
export function getName() {return 'elson';};
let deadName;
export default deadName = 'elson'; // default导出

// 3秒后修改导出值
setTimeout(() => {
    liveName = 'peter';  // 会更新
    deadName = 'peter'; // 不会更新
    obj.a = 222; // 会更新
    console.log('changed!!');
}, 3000);

// index.es.js
import * as all from './name.es.js';
console.log(all);
window.all = all;
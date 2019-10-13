##### vue-router
1. vue-router 默认hash模式,使用url的hash来模拟一个完整的url。所以当url改变时，页面不会重新加载。Hash模式通过锚点值的改变，根据不同的值渲染指定DOM位置的不同数据
2. history模式
只需要在配置路由规则时，加入"mode: 'history'",这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
'''
const router = new VueRouter({
    mode: 'history',
    routes: [...]
})
'''
3. 使用路由模块来实现页面跳转的方式
1) 直接修改地址栏  
2) this.$router.push('xxx');
3) <router-link to='路由地址'></router-link>
4. vue-router跳转方法
1) this.$router.raplace('/xxx');
2) this.router.replace({name: 'xxx'});
3) this.$router.push('/xxx');
4) this.$router.push({name: 'xxx'});

5. boolean 、null、undefined、number、string、symbol

6. 生命周期：
beforeCreate
create 实例创建成功，此时 data 中的数据显示出来了 
beforeMounted 数据中的 data 在模版中先占一个位置
mounted 模版中的 data 数据直接显示出来了
beforeUpdate 当 data 数据发生变化调用，发生在虚拟 DOM 重新渲染和打补丁之前
update 数据更改导致的虚拟 DOM 重新渲染和打补丁
beDestory 在 vue 实例销毁之前调用，此时实例任然可用
destory 在 vue 实例销毁之后调用，vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁
'''
1.creating 状态--vue 实例被创建的过程
2.mounting 状态--挂到到真实的 DOM 节点
3.updating 状态--如果 data 中的数据改变就会触发对应组件的重新渲染
4.destroying 状态--实例销毁

 一般情况下我们在 beforecreate 方法中可以加 Loading 事件，在 created 方法中结束 Loading，并且还可以在此方法中做一些初始化操作，在 mounted 方法中进行发起异步服务端请求。当然，如果你想页面没有加载完成就请求数据那么在 created 方法请求数据也没有什么问题，可以在 beforeDestroy 方法中弹出确认删除，destroyed 中清除相关数据达到资源的有效利用
'''

7. Vue数据双向绑定原理
'''
每当被问到Vue数据双向绑定原理的时候，大家可能都会脱口而出：Vue内部通过Object.defineProperty方法属性拦截的方式，把data对象里每个数据的读写转化成getter/setter，当数据变化时通知视图更新
'''

'''
/**
* 把一个对象的每一项都转化成可观测对象
* @param { Object } obj 对象
*/
function observable (obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }
    let keys = Object.keys(obj);
    keys.forEach((key) =>{
        defineReactive(obj,key,obj[key])
    })
    return obj;
}
/**
* 使一个对象转化成可观测对象
* @param { Object } obj 对象
* @param { String } key 对象的key
* @param { Any } val 对象的某个key的值
*/
function defineReactive (obj,key,val) {
    Object.defineProperty(obj, key, {
        get(){
            console.log(`${key}属性被读取了`);
            return val;
        },
        set(newVal){
            console.log(`${key}属性被修改了`);
            val = newVal;
        }
    })
}
'''

8. vue-router中的router-link的active-class
active-class：选中样式

9. 谈谈你对 keep-alive 的了解？
'''
keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：
一般结合路由和动态组件一起使用，用于缓存组件；
提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；
对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。

1.keep-alive 先匹配被包含组件的 name 字段，如果 name 不可用，则匹配当前组件 components 配置中的注册名称。
2.keep-alive 不会在函数式组件中正常工作，因为它们没有缓存实例。
3.当匹配条件同时在 include 与 exclude 存在时，以 exclude 优先级最高(当前vue 2.4.2 version)。比如：包含于排除同时匹配到了组件A，那组件A不会被缓存。
4.包含在 keep-alive 中，但符合 exclude ，不会调用activated和 deactivated。
'''

10. 组件中 data 为什么是一个函数
'''
组件中的data写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果。 
因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题
'''
11. Vue 组件间通信有哪几种方式？
'''
Vue 组件间通信是面试常考的知识点之一，这题有点类似于开放题，你回答出越多方法当然越加分，表明你对 Vue 掌握的越熟练。Vue 组件间通信只要指以下 3 类通信：父子组件通信、隔代组件通信、兄弟组件通信，下面我们分别介绍每种通信方式且会说明此种方法可适用于哪类组件间通信。
1) props / $emit 适用 父子组件通信
 这种方法是 Vue 组件的基础，相信大部分同学耳闻能详，所以此处就不举例展开介绍。
2) ref 与 $parent / $children 适用 父子组件通信
 ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
3) EventBus （$emit / $on） 适用于 父子、隔代、兄弟组件通信
 这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。
4) $attrs/$listeners 适用于 隔代组件通信
 $attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 ( class 和 style 除外 )。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 ( class 和 style 除外 )，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 inheritAttrs 选项一起使用。
 $listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件
5) provide / inject 适用于 隔代组件通信
 祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。 provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。
6) Vuex 适用于 父子、隔代、兄弟组件通信
 Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的 状态 ( state )。
 Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。
'''
12. vuex
'''
vuex中，有默认的五种基本的对象：
state：存储状态（变量）
getters：对数据获取之前的再次编译，可以理解为state的计算属性。我们在组件中使用 $sotre.getters.fun()
mutations：修改状态，并且是同步的。在组件中使用$store.commit('',params)。这个和我们组件中的自定义事件类似。
actions：异步操作。在组件中使用是$store.dispath('')
modules：store的子模块，为了开发大型项目，方便状态管理而使用的。这里我们就不解释了，用起来和上面的一样。
'''

13. 使用过 Vue SSR 吗？说说 SSR？
'''
Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序。
即：SSR大致的意思就是vue在客户端将标签渲染成的整个 html 片段的工作在服务端完成，服务端形成的html 片段直接返回给客户端这个过程就叫做服务端渲染。
'''

14. vue-router 路由模式有几种？
'''
vue-router 有 3 种路由模式：hash、history、abstract，对应的源码如下所示：
switch (mode) {
  case 'history':
	this.history = new HTML5History(this, options.base)
	break
  case 'hash':
	this.history = new HashHistory(this, options.base, this.fallback)
	break
  case 'abstract':
	this.history = new AbstractHistory(this, options.base)
	break
  default:
	if (process.env.NODE_ENV !== 'production') {
	  assert(false, `invalid mode: ${mode}`)
	}
}
其中，3 种路由模式的说明如下：
hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；
history : 依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；
abstract : 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.
'''

15. Vue 怎么用 vm.$set() 解决对象新增属性不能响应的问题 ？
'''
受现代 JavaScript 的限制 ，Vue 无法检测到对象属性的添加或删除。
我们阅读以上源码可知，vm.$set 的实现原理是：

如果目标是数组，直接使用数组的 splice 方法触发相应式；
如果目标是对象，会先判读属性是否存在、对象是否是响应式，最终如果要对属性进行响应式处理，则是通过调用 defineReactive 方法进行响应式处理（ defineReactive 方法就是 Vue 在初始化对象时，给对象属性采用 Object.defineProperty 动态添加 getter 和 setter 的功能所调用的方法）
'''

16. nextTick
'''
注意：Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。$nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM，

什么时候需要用的Vue.nextTick()？？

1、Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中，原因是在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。与之对应的就是mounted钩子函数，因为该钩子函数执行时所有的DOM挂载已完成。
2、当项目中你想在改变DOM元素的数据后基于新的dom做点什么，对新DOM一系列的js操作都需要放进Vue.nextTick()的回调函数中；通俗的理解是：更改数据后当你想立即使用js操作新的视图的时候需要使用它
3、在使用某个第三方插件时 ，希望在vue生成的某些dom动态发生变化时重新应用该插件，也会用到该方法，这时候就需要在 $nextTick 的回调函数中执行重新应用插件的方法。

Vue.nextTick(callback) 使用原理：
原因是，Vue是异步执行dom更新的，一旦观察到数据变化，Vue就会开启一个队列，然后把在同一个事件循环 (event loop) 当中观察到数据变化的 watcher 推送进这个队列。如果这个watcher被触发多次，只会被推送到队列一次。这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和DOm操作。而在下一个事件循环时，Vue会清空队列，并进行必要的DOM更新。
当你设置 vm.someData = 'new value'，DOM 并不会马上更新，而是在异步队列被清除，也就是下一个事件循环开始时执行更新时才会进行必要的DOM更新。如果此时你想要根据更新的 DOM 状态去做某些事情，就会出现问题。。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。
'''
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
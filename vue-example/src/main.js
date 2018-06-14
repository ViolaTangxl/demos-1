// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入Router
import Router from 'vue-router'
// 引入ElementUI
import ElementUI from 'element-ui'
// 单独引入ElementUI的css样式
import 'element-ui/lib/theme-chalk/index.css'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'

Vue.use(ElementUI)
Vue.use(Router)
Vue.config.productionTip = false

const navConfig = [
    {
        path: '/page1',
        name: 'PageOne',
        component: PageOne
    },
    {
        path: '/page2',
        name: 'PageTwo',
        component: PageTwo
    }
]

const router = new Router({
    mode: 'history',
    routes: navConfig
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    data: {
        navConfig: navConfig
    },
    components: { App },
    template: '<App v-bind:navConfig="navConfig" />'
})
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
// 引入Router
import Router from "vue-router"
// 引入ElementUI
import ElementUI from "element-ui"
// 单独引入ElementUI的css样式
import "element-ui/lib/theme-chalk/index.css"
import PageOne from "./components/PageOne"
import PageTwo from "./components/PageTwo"

Vue.use(ElementUI)
Vue.use(Router)
Vue.config.productionTip = false

const navConfig = [
    {
        path: "group1",
        name: "group1",
        alias: "目录组1",
        content: [{
            path: "page1",
            name: "page1",
            alias: "页面1",
            content: PageOne
        }, {
            path: "page2",
            name: "page2",
            alias: "页面2",
            content: PageTwo
        }]
    }
]

const routerList = [];
getRoutes(routerList, navConfig, "");

const router = new Router({
    mode: "history",
    routes: routerList
})

/**
 * 递归获取router数组
 * @param {*} routerList
 * @param {*} navItems
 * @param {*} previous
 */
function getRoutes(routerList, navItems, previous) {
    navItems.map((item) => {
        const path = previous + "/" + item.path;
        if (Array.isArray(item.content)) {
            getRoutes(routerList, item.content, path);
        } else {
            routerList.push({
                path: path,
                name: item.name,
                component: item.content
            });
        }
    });
}

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    data: {
        navConfig: navConfig
    },
    components: { App },
    template: "<App v-bind:navConfig='navConfig' />"
})
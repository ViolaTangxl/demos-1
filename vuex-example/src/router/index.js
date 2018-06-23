import Vue from "vue"
// 引入Router
import Router from "vue-router"
// 引入动态生成的routers
import navConfig from "./navConfig"

Vue.use(Router)

// 生成路由
const routes = [];
getRoutes(routes, navConfig, "");

/**
 * 递归获取router数组
 * @param {*} routes
 * @param {*} navItems
 * @param {*} previous
 */
function getRoutes(routes, navItems, previous) {
  navItems.map((item) => {
    const path = previous + "/" + item.path;
    if (Array.isArray(item.content)) {
      getRoutes(routes, item.content, path);
    } else {
      routes.push({
        path: path,
        name: item.name,
        component: item.content
      });
    }
  });
}

export default new Router({
  mode: "history",
  routes: routes
})
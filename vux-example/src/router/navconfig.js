// 引入components
import VuxPageOne from "@/components/VuxPageOne"
import VuxPageTwo from "@/components/VuxPageTwo"

const navConfig = [{
  path: "group1",
  name: "group1",
  alias: "目录组1",
  icon: "menu",
  content: [{
    path: "page1",
    name: "page1",
    alias: "vuxPageOne",
    icon: "goods",
    content: VuxPageOne
  }, {
    path: "page2",
    name: "page2",
    alias: "vuxPageTwo",
    icon: "goods",
    content: VuxPageTwo
  }]
}];

export const routes = [];
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
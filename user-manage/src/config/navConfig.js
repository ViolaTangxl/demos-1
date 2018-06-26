// 引入UserPage页面
import UserPage from "@/pages/UserPage";
// 引入404页面
import NotFoundPage from "@/pages/NotFoundPage";

export const navConfig = [{
  path: "user",
  name: "user",
  alias: "用户",
  icon: "menu",
  content: [{
    path: "info",
    name: "info",
    alias: "用户信息表",
    icon: "info",
    content: UserPage
  }, {
    path: "manage",
    name: "manage",
    alias: "用户管理",
    icon: "setting",
    content: null
  }]
}];

export const otherConfig = [{
  path: "",
  name: "homepage",
  alias: "主页",
  icon: "",
  content: null
}, {
  path: "404",
  name: "404",
  alias: "404页面",
  icon: "",
  content: NotFoundPage
}];
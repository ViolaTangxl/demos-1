/**
 * File name: navConfig.js
 * Description: Nav content config file
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-06-25
 */

// 引入HomePage页面
import HomePage from "@/pages/HomePage";
// 引入UserPage页面
import UserPage from "@/pages/UserPage";
// 引入ManagePage页面
import ManagePage from "@/pages/ManagePage";
// 引入404页面
import NotFoundPage from "@/pages/NotFoundPage";

export const navConfig = [{
  path: "user",
  name: "user",
  alias: "用户",
  icon: "menu",
  limit: false,
  content: [{
    path: "info",
    name: "info",
    alias: "用户信息表",
    icon: "info",
    limit: false,
    content: UserPage
  }, {
    path: "manage",
    name: "manage",
    alias: "用户管理",
    icon: "setting",
    limit: true,
    content: ManagePage
  }]
}];

export const otherConfig = [{
  path: "/",
  name: "homepage",
  alias: "主页",
  icon: "",
  limit: false,
  content: HomePage
}, {
  path: "404",
  name: "404",
  alias: "404页面",
  icon: "",
  limit: false,
  content: NotFoundPage
}];
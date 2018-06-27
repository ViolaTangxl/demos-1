/**
 * File name: navConfig.js
 * Description: Nav content config file
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-06-25
 */

// 引入UserPage页面
import UserPage from "@/pages/UserPage";
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
    content: null
  }]
}];

export const otherConfig = [{
  path: "",
  name: "homepage",
  alias: "主页",
  icon: "",
  limit: false,
  content: null
}, {
  path: "404",
  name: "404",
  alias: "404页面",
  icon: "",
  limit: false,
  content: NotFoundPage
}];
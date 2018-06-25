// 引入UserPage页面
import UserPage from "@/pages/UserPage";

export const navConfig = [{
  path: "user",
  name: "user",
  alias: "用户管理",
  icon: "menu",
  content: [{
    path: "info",
    name: "info",
    alias: "用户信息表",
    icon: "info",
    content: UserPage
  }]
}];

export const otherConfig = [];
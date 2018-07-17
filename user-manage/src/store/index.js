/**
 * File name: store/index.js
 * Description: Vuex store index file
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-06-25
 */

import Vue from "vue";
import vuex from "vuex";
// 导入公共actions
import actions from "./actions";
// 导入公共getters
import getters from "./getters";
// 导入UserInfo
import UserInfo from "./modules/UserInfo";
// 导入UserManage
import UserManage from "./modules/UserManage";
// 引入Custom
import Custom from "./modules/Custom";
// 引入Evaluate
import Evaluate from "./modules/Evaluate";

Vue.use(vuex);

export default new vuex.Store({
  state: {
    islogin: false,
    username: "未登录",
    isadmin: false
  },
  actions: actions,
  getters: getters,
  modules: {
    UserInfo: UserInfo,
    UserManage: UserManage,
    Custom: Custom,
    Evaluate: Evaluate
  }
});
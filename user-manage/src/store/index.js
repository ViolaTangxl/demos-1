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
// 导入UserTable
import UserTable from "./modules/UserTable";

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
    UserTable: UserTable
  }
});
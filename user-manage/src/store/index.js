import Vue from "vue";
import vuex from "vuex";
// 导入公共actions
import actions from "./actions";
// 导入公共getters
import getters from "./getters";

Vue.use(vuex);

export default new vuex.Store({
  state: {
    islogin: false,
    username: "未登录",
    isadmin: false
  },
  actions: actions,
  getters: getters
});
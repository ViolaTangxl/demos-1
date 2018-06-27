/**
 * File name: actions.js
 * Description: Vuex store common actions file
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-06-25
 */

// 引入cookie
import {
  setCookie,
  getCookie
} from "@/assets/plugins/cookie";

const actions = {
  // 登录
  login({
    state,
    commit,
    dispatch
  }, payload) {
    const {
      username,
      password,
      isadmin
    } = payload;
    setCookie("username", username, 10);
    setCookie("password", password, 10);
    state.username = username;
    state.islogin = true;
    state.isadmin = isadmin;
  },
  // 登出
  logout({
    state,
    commit,
    dispatch
  }, payload) {
    setCookie("username", "");
    setCookie("password", "");
    state.username = "未登录";
    state.islogin = false;
    state.isadmin = false;
  }
};

export default actions;
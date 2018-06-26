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
    setCookie("username", payload.username.trim(), 10);
    setCookie("password", payload.password.trim(), 10);
    state.isLogin = true;
  },
  // 登出
  logout({
    state,
    commit,
    dispatch
  }, payload) {
    setCookie("username", "");
    setCookie("password", "");
    state.isLogin = false;
  }
};

export default actions;
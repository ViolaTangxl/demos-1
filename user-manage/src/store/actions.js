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
      password
    } = payload;
    setCookie("username", username, 10);
    setCookie("password", password, 10);
    state.username = username;
    state.islogin = true;
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
  }
};

export default actions;
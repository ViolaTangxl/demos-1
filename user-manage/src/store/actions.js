const actions = {
  // 登录
  login({
    state,
    commit,
    dispatch
  }, payload) {
    state.isLogin = true;
  },
  // 登出
  logout({
    state,
    commit,
    dispatch
  }, payload) {
    state.isLogin = false;
  }
};

export default actions;
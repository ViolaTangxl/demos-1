const UserTable = {
  namespaced: true,
  state: {
    loading: false
  },
  mutations: {
    controlOverlay(state, payload) {
      state.loading = payload.isShow;
    }
  },
  actions: {
    /**
     * 模拟显示遮罩层（1秒后消失）
     */
    simulateShowOverlay({
      state,
      commit,
      dispatch
    }, payload) {
      commit({
        type: "controlOverlay",
        isShow: true
      });
      const timeOut = setTimeout(() => {
        commit({
          type: "controlOverlay",
          isShow: false
        });
        clearTimeout(timeOut);
      }, 1000);
    }
  }
};

export default UserTable;
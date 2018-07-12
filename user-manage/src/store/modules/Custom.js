const Custom = {
  namespaced: true,
  state: {
    pageLoad: false,
    originState: {
      backgroundColor: "#231f20",
      frontColor: "#ffd04b"
    },
    newState: {
      backgroundColor: "#231f20",
      frontColor: "#ffd04b"
    },
  },
  mutations: {
    /**
     * 控制页面遮罩层显示
     */
    controlOverlay(state, payload) {
      state.pageLoad = payload.isShow;
    },
    /**
     * 重置状态
     */
    resetState(state, payload) {
      state.newState = {
        ...state.originState
      };
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
      return new Promise((resolve, reject) => {
        // 显示遮罩层
        commit({
          type: "controlOverlay",
          isShow: true
        });
        const timeOut = setTimeout(() => {
          // 隐藏遮罩层
          commit({
            type: "controlOverlay",
            isShow: false
          });
          clearTimeout(timeOut);
          resolve();
        }, 1000);
      });
    },
    /**
     * 更改状态
     */
    async confirmState({
      state,
      commit,
      dispatch
    }, payload) {
      await dispatch("simulateShowOverlay");
      return new Promise((resolve, reject) => {
        state.newState = {
          ...payload
        };
        resolve(true);
      });
    }
  }
};

export default Custom;
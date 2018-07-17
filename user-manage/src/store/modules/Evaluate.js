const Evaluate = {
  namespaced: true,
  state: {
    btnLoad: false,
    btnDisable: false,
    evaluateForm: {
      name: "",
      email: "",
      address: "",
      sex: "",
      content: ""
    }
  },
  mutations: {
    /**
     * 控制按钮载入状态
     */
    controlBtnOver(state, payload) {
      state.btnLoad = payload.isLoad;
    },
    /**
     * 重置state
     */
    resetState(state, payload) {}
  },
  actions: {
    /**
     * 模拟显示按钮载入状态（1秒后消失）
     */
    simulateShowOverlay({
      state,
      commit,
      dispatch
    }, payload) {
      return new Promise((resolve, reject) => {
        commit({
          type: "controlBtnOver",
          isLoad: true
        });
        const timeOut = setTimeout(() => {
          commit({
            type: "controlBtnOver",
            isLoad: false
          });
          clearTimeout(timeOut);
          resolve();
        }, 1000);
      });
    },
    /**
     * 确定提交
     */
    async confirmUpload({
      state,
      commit,
      dispatch
    }, payload) {
      await dispatch("simulateShowOverlay");
      return new Promise((resolve, reject) => {
        resolve(true);
      });
    }
  }
};

export default Evaluate;
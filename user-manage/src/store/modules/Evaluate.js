const Evaluate = {
  namespaced: true,
  state: {
    btnLoad: false,
    btnDisable: false,
    btnText: "提交",
    evaluateForm: {
      name: "",
      email: "",
      selectedCity: [],
      detailAdd: "",
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
    }
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
        state.btnLoad = true;
        state.btnDisable = true;
        state.btnText = "提交中...";
        const timeOut = setTimeout(() => {
          commit({
            type: "controlBtnOver",
            isLoad: false
          });
          state.btnLoad = false;
          state.btnDisable = false;
          state.btnText = "提交";
          clearTimeout(timeOut);
          resolve();
        }, 1000);
      });
    },
    /**
     * 重置state
     */
    async resetForm({
      state,
      commit,
      dispatch
    }, payload) {
      await dispatch("simulateShowOverlay");
      return new Promise((resolve, reject) => {
        state.btnLoad = false;
        state.btnDisable = false;
        state.evaluateForm = {
          ...{
            name: "",
            email: "",
            selectedCity: [],
            detailAdd: "",
            sex: "",
            content: ""
          }
        };
        resolve(true);
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
        const formValue = payload.formValue;
        console.log(formValue);
        commit("resetForm");
        resolve(true);
      });
    }
  }
};

export default Evaluate;
const Evaluate = {
  namespaced: true,
  state: {
    resetLoad: false,
    confirmLoad: false,
    btnDisable: false,
    resetText: "重置",
    confirmText: "提交",
    evaluateForm: {
      name: "",
      email: "",
      selectedCity: [],
      detailAdd: "",
      sex: "",
      content: ""
    },
    inputDisabled: false
  },
  mutations: {
    /**
     * 控制重置按钮载入状态
     */
    controlResetBtnOver(state, payload) {
      state.resetLoad = payload.isLoad;
      state.inputDisabled = payload.isLoad;
    },
    /**
     * 控制提交按钮载入状态
     */
    controlConfirmBtnOver(state, payload) {
      state.confirmLoad = payload.isLoad;
      state.inputDisabled = payload.isLoad;
    }
  },
  actions: {
    /**
     * 模拟显示确认按钮的载入状态（1秒后消失）
     */
    simulateShowConfirmOverlay({
      state,
      commit,
      dispatch
    }, payload) {
      return new Promise((resolve, reject) => {
        commit({
          type: "controlConfirmBtnOver",
          isLoad: true
        });
        state.confirmLoad = true;
        state.btnDisable = true;
        state.confirmText = "提交中...";
        const timeOut = setTimeout(() => {
          commit({
            type: "controlConfirmBtnOver",
            isLoad: false
          });
          state.confirmLoad = false;
          state.btnDisable = false;
          state.confirmText = "提交";
          clearTimeout(timeOut);
          resolve();
        }, 1000);
      });
    },
    /**
     * 模拟显示重置按钮的载入状态（1秒后消失）
     */
    simulateShowResetOverlay({
      state,
      commit,
      dispatch
    }, payload) {
      return new Promise((resolve, reject) => {
        commit({
          type: "controlResetBtnOver",
          isLoad: true
        });
        state.resetLoad = true;
        state.btnDisable = true;
        state.resetText = "重置中...";
        const timeOut = setTimeout(() => {
          commit({
            type: "controlResetBtnOver",
            isLoad: false
          });
          state.resetLoad = false;
          state.btnDisable = false;
          state.resetText = "重置";
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
      await dispatch("simulateShowResetOverlay");
      return new Promise((resolve, reject) => {
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
      await dispatch("simulateShowConfirmOverlay");
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
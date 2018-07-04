const UserManage = {
  namespaced: true,
  state: {
    pageLoad: false,
    dialogLoad: false,
    filterData: []
  },
  mutations: {
    /**
     * 控制页面遮罩层
     */
    controlPageOverlay(state, payload) {
      state.pageLoad = payload.isShow;
    },
    /**
     * 控制对话框遮罩层
     */
    controlDialogOverlay(state, payload) {
      state.dialogLoad = payload.isShow;
    },
    /**
     * 设置filterData的值
     */
    setFilterData(state, payload) {
      if (!payload.userData) {
        return;
      }
      state.filterData = payload.userData;
    }
  },
  actions: {
    /**
     * 模拟显示页面遮罩层（1秒后消失）
     */
    simulateShowPageOverlay({
      state,
      commit,
      dispatch
    }, payload) {
      return new Promise((resolve, reject) => {
        // 显示遮罩层
        commit({
          type: "controlPageOverlay",
          isShow: true
        });
        const timeOut = setTimeout(() => {
          // 隐藏遮罩层
          commit({
            type: "controlPageOverlay",
            isShow: false
          });
          clearTimeout(timeOut);
          resolve();
        }, 1000);
      });
    },
    /**
     * 模拟显示对话框遮罩层（1秒后消失）
     */
    simulateShowDialogOverlay({
      state,
      commit,
      dispatch
    }, payload) {
      return new Promise((resolve, reject) => {
        commit({
          type: "controlDialogOverlay",
          isShow: true
        });
        const timeOut = setTimeout(() => {
          // 隐藏遮罩层
          commit({
            type: "controlDialogOverlay",
            isShow: false
          });
          clearTimeout(timeOut);
          resolve();
        }, 1000);
      });
    }
  }
};

export default UserManage;
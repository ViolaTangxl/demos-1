const UserManage = {
  namespaced: true,
  state: {
    loading: false,
    filterData: []
  },
  mutations: {
    /**
     * 控制遮罩层
     */
    controlOverlay(state, payload) {
      state.loading = payload.isShow;
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
    }
  }
};

export default UserManage;
const UserInfo = {
  namespaced: true,
  state: {
    loading: false,
    userData: [],
    filterData: []
  },
  mutations: {
    /**
     * 控制页面遮罩层显示
     */
    controlOverlay(state, payload) {
      state.loading = payload.isShow;
    },
    /**
     * 设置userData的值
     */
    setUserData(state, payload) {
      if (!payload.userData) {
        return;
      }
      state.userData = payload.userData;
    },
    /**
     * 设置filterData的值
     */
    setFilterData(state, payload) {
      if (!payload.filterData) {
        return;
      }
      state.filterData = payload.filterData;
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

export default UserInfo;
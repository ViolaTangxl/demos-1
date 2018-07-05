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
    },
    /**
     * 根据选择过滤用户
     */
    async filtUserBySelect({
      state,
      commit,
      dispatch
    }, payload) {
      const selectedUser = payload.selectedUser;
      await dispatch("simulateShowOverlay");
      return new Promise((resolve, reject) => {
        if (!selectedUser) {
          commit({
            type: "setFilterData",
            filterData: state.userData
          });
          resolve(false);
          return;
        }
        commit({
          type: "setFilterData",
          filterData: state.userData.filter(
            item => item.name === selectedUser
          )
        });
        resolve(true);
      });
    },
    /**
     * 根据时间范围过滤用户
     */
    async filtUserByDateRange({
      state,
      commit,
      dispatch
    }, payload) {
      const dateRange = payload.dateRange;
      await dispatch("simulateShowOverlay");
      return new Promise((resolve, reject) => {
        if (!dateRange || dateRange.length !== 2) {
          commit({
            type: "setFilterData",
            filterData: state.userData
          });
          resolve(false);
          return;
        }
        const startTm = dateRange[0].getTime();
        const endTm = dateRange[1].getTime();
        commit({
          type: "setFilterData",
          filterData: state.userData.filter(item => {
            const dateMark = item.time.split("-");
            const date = new Date(
              parseInt(dateMark[0]),
              parseInt(dateMark[1]) - 1,
              parseInt(dateMark[2])
            );
            if (date.getTime() >= startTm && date.getTime() <= endTm) {
              return item;
            }
          })
        });
        resolve(true);
      });
    }
  }
};

export default UserInfo;
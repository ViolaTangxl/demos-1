const UserManage = {
  namespaced: true,
  state: {
    pageLoad: false,
    dialogLoad: false,
    userData: [],
    filterData: [],
    dialogType: "view",
    dialogVisible: false,
    formItemDisable: false
  },
  getters: {
    /**
     * 获取对话框标题
     */
    getDialogTitle(state) {
      let dialogTitle = "";
      switch (state.dialogType) {
        case "view":
          dialogTitle = "查看用户";
          break;
        case "edit":
          dialogTitle = "编辑用户";
          break;
        case "create":
          dialogTitle = "新建用户";
          break;
      }
      return dialogTitle;
    }
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
    },
    /**
     * 显示对话框
     */
    showDialog(state, payload) {
      const type = payload.type;
      switch (type) {
        case "view":
          state.formItemDisable = true;
          break;
        case "edit":
          state.formItemDisable = false;
          break;
        case "create":
          state.formItemDisable = false;
          break;
      }
      state.dialogType = type;
      state.dialogVisible = true;
    },
    /**
     * 隐藏对话框
     */
    hideDialog(state, payload) {
      state.formItemDisable = false;
      state.dialogType = "view";
      state.dialogVisible = false;
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
      await dispatch("simulateShowPageOverlay");
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
     * 新建用户
     */
    async createUser({
      state,
      commit,
      dispatch
    }, payload) {
      await dispatch("simulateShowDialogOverlay");
      return new Promise((resolve, reject) => {
        const model = payload.model;
        console.log(model);
      });
    },
    /**
     * 编辑用户
     */
    async editUser({
      state,
      commit,
      dispatch
    }, payload) {
      await dispatch("simulateShowDialogOverlay");
      return new Promise((resolve, reject) => {
        const model = payload.model;
        if (!model) {
          reject();
        }
        state.userData.forEach((item, index) => {
          if (model.index === item.index) {
            state.userData.splice(index, 1, {
              ...item,
              ...model
            });
          }
        });
        commit({
          type: "setFilterData",
          filterData: state.userData
        });
        resolve();
      });
    },
    /**
     * 删除
     */
    async deleteUser({
      state,
      commit,
      dispatch
    }, payload) {
      await dispatch("simulateShowPageOverlay");
      return new Promise((resolve, reject) => {
        const row = payload.row;
        if (!row) {
          reject();
        }
        state.userData.forEach((item, index) => {
          if (item.index === row.index) {
            state.userData.splice(index, 1);
          }
        });
        // 重新编号
        commit({
          type: "setFilterData",
          filterData: state.userData.forEach((item, index) => {
            item.index = index + 1;
          })
        });
        resolve();
      });
    }
  }
};

export default UserManage;
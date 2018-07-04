// 导入模拟的用户数据
import {
  userData
} from "@/config/userMana";

const UserManage = {
  namespaced: true,
  state: {
    loading: false,
    filterData: userData,
    userData: userData,
  },
  // 控制遮罩层
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
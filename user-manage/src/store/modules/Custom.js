const Custom = {
  namespaced: true,
  state: {
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
     * 重置状态
     */
    resetState(state, payload) {
      state.newState = {
        ...state.originState
      };
    }
  },
  actions: {}
};

export default Custom;
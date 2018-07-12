const Custom = {
  namespaced: true,
  state: {
    backgroundColor: "#231f20",
    frontColor: "#ffd04b"
  },
  mutations: {
    /**
     * 重置状态
     */
    resetState(state, payload) {
      state.backgroundColor = "#231f20";
      state.frontColor = "#ffd04b"
    }
  },
  actions: {}
};

export default Custom;
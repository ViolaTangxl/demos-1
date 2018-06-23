const vuex2 = {
  namespaced: true,
  state: {
    loading: false,
    count: 0
  },
  mutations: {
    controlOverlay(state, payload) {
      state.loading = payload.isShow;
    }
  },
  actions: {
    addOne({
      state,
      commit,
      dispatch
    }, payload) {
      commit({
        type: "controlOverlay",
        isShow: true
      });
      const timeOut = setTimeout(() => {
        state.count++;
        commit({
          type: "controlOverlay",
          isShow: false
        });
      }, payload.time);
    },
    reduceOne({
      state,
      commit,
      dispatch
    }, payload) {
      commit({
        type: "controlOverlay",
        isShow: true
      });
      const timeOut = setTimeout(() => {
        state.count--;
        commit({
          type: "controlOverlay",
          isShow: false
        });
      }, payload.time);
    }
  }
}

export default vuex2
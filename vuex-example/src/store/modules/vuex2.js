const vuex2 = {
  namespaced: true,
  state: {
    loading: false,
    count: 0
  },
  mutations: {
    addOne(state) {
      state.count++
    },
    reduceOne(state) {
      state.count--
    },
    controlOverlay(state, payload) {
      state.loading = payload.isShow;
    }
  }
}

export default vuex2
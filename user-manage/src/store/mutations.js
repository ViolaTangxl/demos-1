/**
 * File name: mutations.js
 * Description: Vuex store common mutations file
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-07-24
 */

const mutations = {
  // 设置state里面的routePath
  setRoutePath(state, payload) {
    state.routePath = payload.routePath;
  }
};

export default mutations;
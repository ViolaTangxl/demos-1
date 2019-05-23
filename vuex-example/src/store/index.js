import Vue from "vue"
import vuex from "vuex"
// 引入vuex1
import vuex1 from "./modules/vuex1"
// 引入vuex2
import vuex2 from "./modules/vuex2"

Vue.use(vuex);

export default new vuex.Store({
  modules: {
    vuex1: vuex1,
    vuex2: vuex2
  }
})
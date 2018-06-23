import Vue from "vue"
import Enter from "./Enter"
// 引入生成的router
import router from "./router/index"
// 引入ElementUI
import ElementUI from "element-ui"
// 单独引入ElementUI的css样式
import "element-ui/lib/theme-chalk/index.css"
// 引入动态生成的routers
import navConfig from "./router/navConfig"

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: "#main",
  router,
  data: {
    navConfig: navConfig
  },
  components: {
    Enter
  },
  template: "<Enter v-bind:navConfig='navConfig'/>"
})
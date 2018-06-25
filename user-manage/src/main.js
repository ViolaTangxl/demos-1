// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Enter from "@/Enter";
import router from "@/router";
// 引入ElementUI
import ElementUI from "element-ui";
// 单独引入ElementUI的css样式
import "element-ui/lib/theme-chalk/index.css";
// 引入动态生成的routers
import {
  navConfig
} from "@/router/navConfig";

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
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
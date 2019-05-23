/**
 * File name: main.js
 * Description: Create vue file
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-06-25
 */

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
} from "@/config/navConfig";
// 引入store
import store from "@/store/index"

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#main",
  router,
  store,
  data: {
    navConfig: navConfig
  },
  components: {
    Enter
  },
  template: "<Enter v-bind:navConfig='navConfig'/>"
})
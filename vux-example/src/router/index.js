import Vue from "vue"
// 引入Router
import Router from "vue-router"
// 引入动态生成的routers
import {
  routes
} from "./navconfig"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: routes
})
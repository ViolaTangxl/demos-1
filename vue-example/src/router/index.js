/**
 * 路由配置更改到main.js文件中，此js文件暂时废弃
 */

import Vue from "vue"
import Router from "vue-router"
import AddReduceOne from "../components/AddReduceOne"
import AddReduceTwo from "../components/AddReduceTwo"
import TableOne from "../components/TableOne"
import TableTwo from "../components/TableTwo"


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: "/group1/page1",
      name: "page1",
      component: AddReduceOne
    },
    {
      path: "/group1/page2",
      name: "page2",
      component: AddReduceTwo
    },
    {
      path: "/group2/page3",
      name: "page3",
      component: AddReduceTwo
    },
    {
      path: "/group2/page4",
      name: "page4",
      component: AddReduceTwo
    }
  ]
})
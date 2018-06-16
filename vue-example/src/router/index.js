/**
 * 路由配置更改到main.js文件中，此js文件暂时废弃
 */

import Vue from 'vue'
import Router from 'vue-router'
import PageOne from '../components/PageOne'
import PageTwo from '../components/PageTwo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/group1/page1',
      name: 'page1',
      component: PageOne
    },
    {
      path: '/group1/page2',
      name: 'page2',
      component: PageTwo
    }
  ]
})
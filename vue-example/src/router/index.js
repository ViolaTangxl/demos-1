import Vue from 'vue'
import Router from 'vue-router'
import PageOne from '@/components/PageOne'
// 引入ElementUI
import ElementUI from 'element-ui'
// 单独引入ElementUI的css样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/page1',
      name: 'PageOne',
      component: PageOne
    }
  ]
})
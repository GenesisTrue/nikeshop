import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/views/Home'
import shop from '@/views/Shop'
import notFound from '@/views/404'




export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '*',
      name: '404',
      component: notFound
    }
  ]
})
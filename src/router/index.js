import Vue from 'vue'
import Router from 'vue-router'
import register from '@/pages/login/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: register
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/login'
import register from '@/pages/login/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
  ]
})

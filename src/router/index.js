import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/login'
import register from '@/pages/login/register'
import resetpass from '@/pages/login/resetPassword'
import userLayout from "@/pages/layout/userMain"
import layout from "@/pages/layout/layout"
import myInfo from "@/pages/info/myInfo"
import applicationRecord from "@/pages/info/applicationRecord"
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
    {
      path:'/resetpass',
      name: 'resetpass',
      component: resetpass
    },
    {
      path:'/userLayout',
      name: 'userLayout',
      component: userLayout
    },
    {
      path:'/layout',
      name: 'layout',
      component: layout
    },
    {
      path:'/myInfo',
      name: 'myInfo',
      component: myInfo
    },
    {
      path:'/applicationRecord',
      name: 'applicationRecord',
      component: applicationRecord
    }

  ]
})

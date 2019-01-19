import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import notifications from './notifications'
import signedUp from './signedUp'
import me from './me/'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/_error',
      name: 'error',
      component: () => import('@/views/Error')
    },
    {
      path: '/_webview',
      name: 'webview',
      component: () => import('@/views/WebView')
    },
    ...notifications,
    ...signedUp,
    ...me
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

const noLoginNeeded = [
  'app.map',
  'webview'
]

router.beforeEach((to, from, next) => {
  if (!store.state.token && to.name !== 'login') {
    if (noLoginNeeded.includes(to.name)) return next()
    next({
      name: 'login',
      query: {
        'redirectTo': to.path
      }
    })
  }
  next()
})

export default router

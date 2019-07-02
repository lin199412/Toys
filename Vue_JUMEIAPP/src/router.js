import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Group',
      name: 'Group',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Group.vue')
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: () => import( /* webpackChunkName: "about" */ './views/Cart.vue')
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: () => import( /* webpackChunkName: "about" */ './views/Mine.vue')
    },
    // 首页导航栏下的路由，整个页面变化，先不采用路由嵌套的写法
    {
      path: '/Hmiansui',
      name: 'Hmiansui',
      component: () => import( /* webpackChunkName: "about" */ './views/Hmiansui.vue')
    },
    {
      path: '/Hmuying',
      name: 'Hmuying',
      component: () => import( /* webpackChunkName: "about" */ './views/Hmuying.vue')
    },
    {
      path: '/Hqingshe',
      name: 'Hqingshe',
      component: () => import( /* webpackChunkName: "about" */ './views/Hqingshe.vue')
    },
    {
      path: '/Htemai',
      name: 'Htemai',
      component: () => import( /* webpackChunkName: "about" */ './views/Htemai.vue')
    },
    {
      path: '/HomeDetails',
      name: 'HomeDetails',
      component: () => import( /* webpackChunkName: "about" */ './views/HomeDetails.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import( /* webpackChunkName: "about" */ './views/Login.vue')
    }
  ]
})

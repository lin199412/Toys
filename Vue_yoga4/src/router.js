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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/YogaPractice',
    name: 'YogaPractice',
    component: () => import(/* webpackChunkName: "about" */ './views/YogaPractice.vue')
  },
  {
    path: '/YogaUniversity',
    name: 'YogaUniversity',
    redirect: 'Urjp',
    component: () => import(/* webpackChunkName: "about" */ './views/YogaUniversity.vue'),
    children: [{
      path: '/Urgzf',
      name: 'Urgzf',
      component: () => import(/* webpackChunkName: "about" */ './components/Urgzf.vue')
    },
    {
      path: '/Urjp',
      name: 'Urjp',
      component: () => import(/* webpackChunkName: "about" */ './components/Urjp.vue')
    },
    {
      path: '/Urxly',
      name: 'Urxly',
      component: () => import(/* webpackChunkName: "about" */ './components/Urxly.vue')
    },
    {
      path: '/Uryx',
      name: 'Uryx',
      component: () => import(/* webpackChunkName: "about" */ './components/Uryx.vue')
    },
    {
      path: '/Urzscx',
      name: 'Urzscx',
      component: () => import(/* webpackChunkName: "about" */ './components/Urzscx.vue')
    }
    ]
  },
  {
    path: '/Teacher',
    name: 'Teacher',
    component: () => import(/* webpackChunkName: "about" */ './views/Teacher.vue')
  },
  {
    path: '/Mall',
    name: 'Mall',
    component: () => import(/* webpackChunkName: "about" */ './views/Mall.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
  },
  {
    path: '/Admins',
    name: 'Admins',
    component: () => import(/* webpackChunkName: "about" */ './views/Admins.vue')
  },
  {
    path: '/Pbasicdetail',
    name: 'Pbasicdetail',
    component: () => import(/* webpackChunkName: "about" */ './views/Pbasicdetail.vue')
  },
  {
    path: '/Pmasterdetail',
    name: 'Pmasterdetail',
    component: () => import(/* webpackChunkName: "about" */ './views/Pmasterdetail.vue')
  }
  ]
})

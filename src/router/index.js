import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //2種方式引導頁面
    {
      path: '/', 
      name: 'home',
      component: HomeView
    },
    {
      path: '/header',
      name: 'header',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Header.vue')
    },
    {
      path: '/VtextandVmodel',
      name: 'VtextandVmodel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VtextandVmodel.vue')
    },
    {
      path:'/vfor',
      name:'vfor',
      component:() => import('../views/vfor.vue')
    },
    {
      path:'/bs',
      name:'bs',
      component:() => import('../views/bs.vue')
    },
    {
      path:'/von',
      name:'von',
      component:() => import('../views/von.vue')
    },
    {
      path:'/dessert',
      name:'dessert',
      component:() => import('../views/dessert.vue')
    },
    {
      path:'/vbind',
      name:'vbind',
      component:() => import('../views/vbind.vue')
    },
    {
      path:'/waterfall',
      name:'waterfall',
      component:() => import('../views/waterfall.vue')
    },
    {
      path:'/vif',
      name:'vif',
      component:() => import('../views/vif.vue')
    },
    {
      path:'/props',
      name:'props',
      component:() => import('../components/props.vue')
      
    },
    {
      path:'/propsign',
      name:'propsign',
      component:() => import('../views/propsign.vue')
      
    },
  ]
})

export default router

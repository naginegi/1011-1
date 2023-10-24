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
    {
      path:'/emit',
      name:'emit',
      component:() => import('../views/emit.vue')
      
    },
    {
      path:'/pemix',
      name:'pemix',
      component:() => import('../views/propsemit/props.vue')
      
    },
    {
      path:'/ET',
      name:'ET',
      component:() => import('../views/ET/home.vue'),
      children:[
        {
          path:'login',
          component:() => import('../views/ET/login.vue'),
          alias:'',
        },
        {
          path:'signup',
          component:() => import('../views/ET/signup.vue'),
        },
        {
          path:'ET',
          component:() => import('../views/ET/ET.vue'),
        },
      ]
    },
    {
      path:'/provideAndinject',
      name:'provideAndinject',
      component:() => import('../views/provideAndinject/provideAndinject.vue')
      
    },
  ]
})

export default router

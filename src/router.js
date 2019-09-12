import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Landing from './views/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Home,
      children:[
        {
          path:'',
          name:'home',
          component: Landing
        },
        {
          path:'news',
          name:'news',
          component: () => import(/* webpackChunkName: "news" */ './views/News.vue'),
        },
        {
          path:'permits',
          name:'permits',
          component: () => import(/* webpackChunkName: "news" */ './views/Permits.vue'),
        }
      ]
    },
    {
      path: '/auth',
      name: 'Authorization',
      component: () => import(/* webpackChunkName: "auth" */ './views/Auth.vue'),
    },
    {
      path: '/app',
      component: () => import(/* webpackChunkName: "dash" */ './views/Dashboard.vue'),
      children:[
        {
          path:'',
          component:() => import('./views/app/Home')
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

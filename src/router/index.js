import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Global from '@/views/Global.vue'


Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/global',
    component: Global
  },
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

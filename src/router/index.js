import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/biography',
    name: 'Biography',
    component: () => import('@/views/Biography.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/kosoplechev.ru/'),
  routes,
})

export default router

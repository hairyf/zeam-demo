import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import ClientLayout from '@/layout/Client.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/client',
    component: ClientLayout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue')
      }
    ],
    redirect: '/client/home'
  },
  { path: '/:pathMatch(.*)*', redirect: '/login' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

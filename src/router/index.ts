import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import ClientLayout from '@/layout/Client.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录中心' }
  },
  {
    path: '/client',
    component: ClientLayout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '欢迎来到 Zteams' }
      },
      {
        path: 'games',
        component: () => import('@/views/games/index.vue'),
        meta: { title: 'Zteams 中的所有游戏' }
      },
      {
        path: 'game',
        component: () => import('@/views/game/index.vue')
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

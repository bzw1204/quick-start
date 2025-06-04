import { createRouter, createWebHashHistory } from 'vue-router'
import { BaseLayout } from '@/layouts'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: BaseLayout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/index.vue')
        }
      ]
    }
  ]
})
export default router

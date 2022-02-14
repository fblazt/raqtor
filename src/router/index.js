import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('@/views/Home.vue')
    },
    {
      name: 'custom-quote',
      path: '/custom',
      component: () => import('@/views/CustomQuote.vue')
    }
  ]
})

export const routerPush = name => router.push({ name })

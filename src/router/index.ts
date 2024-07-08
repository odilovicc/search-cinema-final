import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/Home.vue')
      },
      {
        path: 'film/:id',
        name: 'film',
        component: () => import('@/views/film/Film.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router

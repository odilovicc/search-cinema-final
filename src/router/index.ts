import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress';


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
      },
      {
        path: 'films',
        name: 'film-list',
        
        component: () => import('@/views/film/list/FilmList.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router


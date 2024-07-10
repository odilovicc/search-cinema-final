import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import { useStore } from 'vuex';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
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
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/search/index.vue')
      },
    ]
  },
  {
    path: '/error',
    name: 'error-page',
    component: () => import('@/views/Error.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const store = useStore();
  const hasError = store.state.cinema.errors.length > 0;
  NProgress.start();

  if (hasError && to.name !== 'error-page') {
    next({ name: 'error-page' });
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;

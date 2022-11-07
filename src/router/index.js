import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('../views/Movies.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../vies/Login.vue')
    }
  ]
});

export default router;
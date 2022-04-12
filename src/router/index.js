import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('../views/Books.vue'),
  },
  {
    path: '/books/:id',
    name: 'BookDetails',
    props: true,
    component: () => import('../views/book/BookDetails.vue'),
  },
  {
    path: '/authors',
    name: 'Authors',
    component: () => import('../views/Authors.vue'),
  },
  {
    path: '/authors/:id',
    name: 'AuthorDetails',
    props: true,
    component: () => import('../views/book/AuthorDetails.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;

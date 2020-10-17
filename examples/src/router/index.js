import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Gallery from './views/Gallery'
import User from './views/User.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
    },
    {
      path: '/user',
      name: 'user',
      component: User,
    },
  ],
})
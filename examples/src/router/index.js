import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../Layout.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/Home'),
        },
        {
          path: 'start',
          name: 'Start',
          component: () => import('../views/Start'),
        },
        {
          path: 'chart',
          name: 'Chart',
          component: () => import('../views/Charts/Chart'),
        },
        {
          path: 'bar',
          name: 'Bar',
          component: () => import('../views/Charts/Bar'),
        },
        {
          path: 'histogram',
          name: 'Histogram',
          component: () => import('../views/Charts/histogram'),
        }
      ]
    }
  ]
})

export default router

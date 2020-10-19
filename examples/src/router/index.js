import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '/@/Layout.vue'

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
          component: () => import('/@/views/Home/Index.vue'),
        },
        {
          path: 'start',
          name: 'Start',
          component: () => import('/@/views/Start/index.vue'),
        },
        {
          path: 'bar',
          name: 'Bar',
          component: () => import('/@/views/Charts/Bar/index.vue'),
        },
        {
          path: 'line',
          name: 'Line',
          component: () => import('/@/views/Charts/Line/index.vue'),
        }
      ]
    }
  ]
})

export default router

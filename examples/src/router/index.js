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
        }
      ]
    }
  ]
})

export default router

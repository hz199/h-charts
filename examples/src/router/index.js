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
          meta: {
            title: '介绍'
          }
        },
        {
          path: 'start',
          name: 'Start',
          component: () => import('../views/Start'),
          meta: {
            title: '开始'
          }
        },
        {
          path: 'chart',
          name: 'Chart',
          component: () => import('../views/Charts/Chart'),
          meta: {
            title: 'chart'
          }
        },
        {
          path: 'histogram',
          name: 'Histogram',
          component: () => import('../views/Charts/histogram'),
          meta: {
            title: '直方图'
          }
        },
        {
          path: 'pie',
          name: 'Pie',
          component: () => import('../views/Charts/pie'),
          meta: {
            title: '饼状图'
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - *￣︶￣*'
  next()
})

export default router

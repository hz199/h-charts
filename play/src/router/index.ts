import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
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
          component: () => import('../views/Home/index.vue'),
          meta: {
            title: '介绍'
          }
        },
        {
          path: 'start',
          name: 'Start',
          component: () => import('../views/Start/index.vue'),
          meta: {
            title: '开始'
          }
        },
        {
          path: 'chart',
          name: 'Chart',
          component: () => import('../views/Charts/Chart/index.md'),
          meta: {
            title: 'chart'
          }
        },
        // {
        //   path: 'histogram',
        //   name: 'Histogram',
        //   component: () => import('../views/Charts/Histogram/index.vue'),
        //   meta: {
        //     title: '直方图'
        //   }
        // },
        // {
        //   path: 'pie',
        //   name: 'Pie',
        //   component: () => import('../views/Charts/Pie/index.vue'),
        //   meta: {
        //     title: '饼状图'
        //   }
        // },
        // {
        //   path: 'radar',
        //   name: 'Radar',
        //   component: () => import('../views/Charts/Radar/index.vue'),
        //   meta: {
        //     title: '雷达图'
        //   }
        // }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - *￣︶￣*'
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router

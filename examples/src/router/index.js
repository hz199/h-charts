import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import User from './views/User.vue'

const descComponent = () => {
  return import('./views/Desc.vue')
}

export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [{
    path: '/home',
    name: 'home',
    component: Home,
  }, {
    path: '/about',
    name: 'about',
    component: About,
  }, {
    path: '/desc',
    name: 'desc',
    component: descComponent
  }, {
    path: '/user/:id',
    name: 'user',
    component: User,
    props: true
  }]
})

router.beforeEach((to, from, next) => {
  console.log('from:', from)
  console.log('to:', to)
  next()
})
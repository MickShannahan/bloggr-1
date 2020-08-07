import { authGuard } from '@bcwdev/auth0-vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Profile from '../pages/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: authGuard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

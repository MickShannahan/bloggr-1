import { Auth0Provider } from '@bcwdev/auth0provider-client'
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
    beforeEnter: Auth0Provider.authGuard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

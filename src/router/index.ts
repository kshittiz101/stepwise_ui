import { createRouter, createWebHistory } from 'vue-router'
// import components
import MainLayout from '@/layout/MainLayout.vue'
import LandingView from '@/views/LandingView.vue'
import AboutView from '@/views/AboutView.vue'
// 1. define route
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: LandingView,
      },

      {
        path: '/about',
        name: 'about',
        component: AboutView,
      },
    ],
  },
]

// 2. create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

// 3. export router instance
export default router

import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Order from '../views/Order.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
  ]
})

export default router

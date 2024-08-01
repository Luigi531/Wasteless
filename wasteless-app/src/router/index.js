import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Accueil.vue'
import Stocks from '../views/Stocks.vue'
import Repas from '../views/Repas.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: Home
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: Stocks
  },
  {
    path: '/repas',
    name: 'repas',
    component: Repas
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Calendar from '@/components/Calendar'
import Data from '@/components/Data'
import Ranking from '@/components/Ranking'
import Team from '@/components/Team'
import Shop from '@/components/Shop'
import VueAnalytics from 'vue-analytics'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/Team',
      name: 'Team',
      component: Team
    },
    {
      path: '/Data',
      name: 'Data',
      component: Data
    },
    {
      path: '/Ranking',
      name: 'Ranking',
      component: Ranking
    }
  ]
})

export default router

Vue.use(VueAnalytics, {
  id: 'UA-107705544-1',
  router
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SecureFundsView from '../views/SecureFundsView.vue'
import VerifyView from '../views/VerifyView.vue'
import CampaignView from '../views/CampaignView.vue'
import ProfileView from '../views/ProfileView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crowdfunding',
    name: 'SecureFundsView',
    component: SecureFundsView
  },
  {
    path: '/verify',
    name: 'VerifyView',
    component: VerifyView
  },
  {
    path: '/campaign',
    name: 'CampaignView',
    component: CampaignView
  },
    
  {
    path: '/profile',
    name: 'ProfileView',
    component: ProfileView
  },

  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


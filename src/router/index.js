import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AccountInfo from '../views/AccountInfo.vue'
import Profile from '../views/Profile.vue'
import Safety from '../views/Safety.vue'
import Friends from '../views/Friends.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    children:[
      {
        path: 'account',
        name: 'account',
        component: AccountInfo
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'safety',
        name: 'safety',
        component: Safety
      },
      {
        path: 'friends',
        name: 'friends',
        component: Friends
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

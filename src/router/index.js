import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AccountInfo from '../views/AccountInfo.vue'
import Profile from '../views/SelfProfile.vue'
import Safety from '../views/SafetySet.vue'
import Friends from '../views/FriendsList.vue'
import Message from '../views/MessageCenter'
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
        component: Safety,
        meta:{
          requireAuth: true
        }
      },
      {
        path: 'friends',
        name: 'friends',
        component: Friends
      },
      {
        path: 'message',
        name: 'message',
        component: Message
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

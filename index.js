import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Publishgame from "@/views/publishgame.vue";
import Discountgame from "@/views/discountgame.vue";
import Selectgame from "@/views/selectgame.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    children:[
      {
        path: 'selectgame',
        name: 'selectgame',
        component: Selectgame
      },
      {
        path: 'discountgame',
        name: 'discountgame',
        component: Discountgame
      },
      {
        path: 'publishgame',
        name: 'publishgame',
        component: Publishgame
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Equips from './views/equips/Equips.vue'
import HeroList from './views/heroes/HeroList.vue'
import Wapons from './views/wapons/Wapons.vue'

export default new Router({
  linkActiveClass:'active',
  routes: [
    {name:'home',path:'/',redirect:'heroes'},
    {name:'heroes',path:'/heroes',component:HeroList},
    {name:'equips',path:'/equips',component:Equips},
    {name:'wapons',path:'/wapons',component:Wapons},
  ]
})

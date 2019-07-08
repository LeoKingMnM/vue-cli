import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Equips from './views/equips/Equips.vue'
import HeroList from './views/heroes/HeroList.vue'
import Wapons from './views/wapons/Wapons.vue'

import HeroAdd from './views/heroes/HeroAdd.vue'
import HeroChange from './views/heroes/HeroChange.vue'


export default new Router({
  linkActiveClass:'active',
  routes: [
    {name:'home',path:'/',redirect:'heroes'},
    {name:'heroes',path:'/heroes',component:HeroList},
    {name:'equips',path:'/equips',component:Equips},
    {name:'wapons',path:'/wapons',component:Wapons},
    {name:'add',path:'/heroes/add',component:HeroAdd},
    {name:'change',path:'/heroes/change/:id',component:HeroChange,props:true},
  ]
})

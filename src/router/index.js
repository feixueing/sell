import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import Hello from '@/components/Hello'
import foods from '../components/foods/foods'

Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/foods'
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/foods',
      name: 'foods',
      component: foods
    }
  ]
})

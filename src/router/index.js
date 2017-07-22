import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import Hello from '@/components/Hello'

Vue.use(Router)
Vue.use(vueResource)

const word = { template: '<div>word</div>' }

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/word',
      name: 'word',
      component: word
    }
  ]
})

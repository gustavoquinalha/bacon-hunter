import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Bacon from '@/components/Bacon'
import erro from '@/components/erro'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/bacon-hunter',
      name: 'Bacon',
      component: Bacon
    },
    {
      path: '*',
      name: '404',
      component: erro
    }
  ]
})

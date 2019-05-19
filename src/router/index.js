import Vue from 'vue'
import Router from 'vue-router'
import showresume from '@/components/showresume/ShowResume.vue'
import resumemain from '@/components/resumemain/resumemain.vue'

Vue.use(Router)

export default new Router({
  history: true,
  routes: [
    {
      path: '/',
      name: 'resumemain',
      component: resumemain
    },
    {
      path: '/re',
      name: 'showresume',
      component: showresume
    }
  ]
})

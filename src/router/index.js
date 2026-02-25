import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import CarWashPoster from '../components/CarWashPoster.vue'
import SelfServiceCarWash from '../components/SelfServiceCarWash.vue'
import RegistrationAgreement from '../components/RegistrationAgreement.vue'
import FAQ from '../components/FAQ.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: CarWashPoster
    },
    {
      path: '/self-service',
      name: 'SelfService',
      component: SelfServiceCarWash
    },
    {
      path: '/registration-agreement',
      name: 'RegistrationAgreement',
      component: RegistrationAgreement
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    }
  ]
})

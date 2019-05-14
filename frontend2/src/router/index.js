import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Login from '../components/Login'
import Departments from '../components/Departments'
import Employees from '../components/Employees'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  beforeCreate () {
    console.log('teste')
  },
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Departments',
      name: 'Departments',
      component: Departments
    },
    {
      path: '/Employees',
      name: 'Employees',
      component: Employees
    }
  ]
})
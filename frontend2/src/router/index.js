import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Login from '../components/Login'
import Main from '../components/Main'
import Departments from '../components/Departments'
import DepartmentDetail from '../components/DepartmentDetail'
import Employees from '../components/Employees'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: ':name',
          name: 'Departments',
          component: Departments,
        },
        {
          path: ':name',
          name: 'DepartmentDetail',
          component: DepartmentDetail
        },
        {
          path: ':name',
          name: 'Employees',
          component: Employees
        }    
      ]  
    }
  ]
})
import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Login from '../components/Login'
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
      path: '/Departments',
      component: Departments,
      name: 'departments',
      children: [
        {path: ':name', name: 'departmentDetails', component: DepartmentDetail}
      ]
    },
    {
      path: '/Employees',
      component: Employees,
      name: 'employees'
    }
  ]
})
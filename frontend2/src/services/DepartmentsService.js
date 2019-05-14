import HttpService from './HttpService'

export default {
  department: {
    id: '',
    name: ''
  },
  getDepartments: function () {
    return HttpService.request(
      'GET',
      'http://localhost:3001/department'
    )
  },
  setDepartment: function (department) {
    this.department = department
  },
  unsetDepartment: function (department) {
    this.department = {
      id: '',
      name: ''
    }
  },
  getDepartment: function () {
    return this.department
  }
}

import HttpService from './HttpService'

export default {
  department: {
    id: '',
    name: ''
  },
  departments: [],
  getDepartments: function () {
    return HttpService.request(
      'GET',
      'http://localhost:3001/department'
    )
  },
  saveDepartment: function (data) {
    let type = 'POST'
    let param = ''
    this.departments.map(function(department) {
      if(data.id == department.id) {
        type = 'PUT'
      }
    })
    param = type == 'PUT' ? data.id : ''
    return HttpService.request(
      type,
      'http://localhost:3001/department/' +  param,
      data
    )
  },
  deleteDepartment: function (id) {
    return HttpService.request(
      'DELETE',
      'http://localhost:3001/department/' + id,
    )
  },
  setDepartment: function (department) {
    this.department = department
  },
  setDepartments: function (departments) {
    this.departments = departments
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

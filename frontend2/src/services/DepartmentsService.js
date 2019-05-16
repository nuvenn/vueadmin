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
    this.departments.map(function(department) {
      if(data.id == department.id) {
        return HttpService.request(
          'PUT',
          'http://localhost:3001/department/' + data.id
        )
      }
    })
    return HttpService.request(
      'POST',
      'http://localhost:3001/department',
      data
    )
  },
  deleteDepartment: function (id) {
    return HttpService.request(
      'DELETE',
      'http://localhost:3001/department/' + id,
      data
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

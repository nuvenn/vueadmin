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
  saveDepartment: function (data) {
    if(data.id) {
      return HttpService.request(
        'POST',
        'http://localhost:3001/department',
        data
      )
    } else {
      return HttpService.request(
        'PUT',
        'http://localhost:3001/department/' + id
      )
    }
  },
  deleteDepartment: function (id) {
    return HttpService.request(
      'DELETE',
      'http://localhost:3001/department/' + id
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

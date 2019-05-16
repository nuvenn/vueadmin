import HttpService from './HttpService'

export default {
  employee: {
    id: '',
    name: '',
    email: '',
    senha: '',
    department: '',
    admin: false
  },
  employees: [],
  getEmployees: function () {
    return HttpService.request(
      'GET',
      'http://localhost:3001/employee'
    )
  },
  saveEmployee: function (data) {
    let type = 'POST'
    let param = ''
    this.employees.map(function(employee) {
      if(data.id == employee.id) {
        type = 'PUT'
      }
    })
    param = type == 'PUT' ? data.id : ''
    return HttpService.request(
      type,
      'http://localhost:3001/employee/' +  param,
      data
    )
  },
  deleteEmployee: function (id) {
    return HttpService.request(
      'DELETE',
      'http://localhost:3001/employee/' + id,
    )
  },
  setEmployee: function (employee) {
    this.employee = employee
  },
  setEmployees: function (employees) {
    this.employees = employees
  },
  unsetEmployee: function (employee) {
    this.employee = {
      id: '',
      name: ''
    }
  },
  getEmployee: function () {
    return this.employee
  }
}

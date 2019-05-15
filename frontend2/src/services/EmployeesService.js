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
  getEmployees: function () {
    return HttpService.request(
      'GET',
      'http://localhost:3001/employee'
    )
  },
  setEmployee: function (employee) {
    this.employee = employee
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

import HttpService from './HttpService'

export default {
    loginAccess: function () {
        return HttpService.request(
            'GET',
            'http://localhost:3001/employee'
        )
    }
}
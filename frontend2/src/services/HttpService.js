import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  request: function (method, url, data) {
    let instance = {
      method: method,
      url: url,
      data: data
    }
    return axios(instance)
  }
}

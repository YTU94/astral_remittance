import fly from './server'

export default {
  login: function (params) {
    return fly.request('/rest/login/onLogin', params, {
      method: 'GET'
    })
  }
}

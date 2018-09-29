import fly from './server'

export default {
  login: function (params) {
    return fly('/rest/login/onLogin', params, {
      method: 'GET'
    })
  }
}

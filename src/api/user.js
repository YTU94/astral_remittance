import fly from './server'

export default {
  login: function (params) {
    return fly('/rest/login/onLogin', params, {
      method: 'GET'
    })
  },
  getPhoneNumber: function (params) {
    return fly('/rest/client/fillMobile', params, {
      method: 'POST'
    })
  }
}

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
  },
  // 根据城市id,保存用户最近登录地址
  fillAddressByCityId: function (params) {
    return fly('/rest/client/fillAddressByCityId', params, {
      method: 'POST'
    })
  },
  // 根据用户详细经纬度,保存用户最近登录地址
  fillAddressByDetail: function (params) {
    return fly('/rest/client/fillAddressByDetail', params, {
      method: 'POST'
    })
  },
  // 查询用户信
  getUserInfo: function (params) {
    return fly('/rest/client/find', params, {
      method: 'GET'
    })
  }
}

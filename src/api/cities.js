import fly from './server'

export default {
  getCityList: function (params) {
    return fly.request('/rest/city/listPagination', params, {
      method: 'POST'
    })
  },
  findCity: function (params) {
    return fly.request('/rest/city/findCity', params, {
      method: 'POST'
    })
  }
}

import fly from './server'

export default {
  getCompanyList: function (params) {
    return fly.request('/rest/company/listPagination', params, {
      method: 'POST'
    })
  }
}

import fly from './server'

export default {
  getCompanyList: function (params) {
    return fly('/rest/company/listPagination', params, {
      method: 'POST'
    })
  }
}

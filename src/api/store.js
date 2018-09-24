import fly from './server'

export default {
  getStoreList: function (params) {
    return fly.request('/rest/store/listPagination', params, {
      method: 'POST'
    })
  }
}

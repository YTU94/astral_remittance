import fly from './server'

export default {
  getStoreList: function (params) {
    return fly('/rest/store/listPagination', params, {
      method: 'POST'
    })
  }
}

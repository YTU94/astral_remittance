import fly from './server'

export default {
  getCoachList: function (params) {
    return fly.request('/rest/coach/listPagination', params, {
      method: 'POST'
    })
  }
}

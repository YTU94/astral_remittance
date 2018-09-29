import fly from './server'

export default {
  getCoachList: function (params) {
    return fly('/rest/coach/listPagination', params, {
      method: 'POST'
    })
  }
}

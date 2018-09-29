import fly from './server'

export default {
  // 提交返利
  submitRebate: function (params) {
    return fly.request('/rest/rebate/create', params, {
      method: 'POST'
    })
  }
}

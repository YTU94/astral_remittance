import fly from './server'

export default {
  // 提交返利
  submitRebate: function (params) {
    return fly('/rest/rebate/create', params, {
      method: 'POST'
    })
  },
  // 提交返利图片
  uploadImage: function (params) {
    return fly('/rest/rebate/weChat/uploadImage', params, {
      method: 'POST'
    })
  },
  // 用户返利订单列表
  getUserRebateOrderList: function (params) {
    return fly('/rest/rebate/listPagination', params, {
      method: 'POST'
    })
  }
}

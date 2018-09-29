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
  }
}

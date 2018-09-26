import fly from './server'

export default {
  getCouponList: function (params) {
    return fly.request('/rest/coupon/listPagination', params, {
      method: 'POST'
    })
  }
}

import fly from './server'

export default {
  getCouponList: function (params) {
    return fly('/rest/coupon/listPagination', params, {
      method: 'POST'
    })
  },
  // 领取优惠券
  collectCoupons: function (params) {
    return fly('/rest/clientCoupon/receiveCoupon', params, {
      method: 'POST'
    })
  },
  // 获取客户优惠券
  getClientCouponList: function (params) {
    return fly('/rest/clientCoupon/listPagination', params, {
      method: 'POST'
    })
  }
}

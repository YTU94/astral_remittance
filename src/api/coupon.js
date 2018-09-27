import fly from './server'

export default {
  getCouponList: function (params) {
    return fly.request('/rest/coupon/listPagination', params, {
      method: 'POST'
    })
  },
  // 领取优惠券
  collectCoupons: function (params) {
    return fly.request('/rest/clientCoupon/receiveCoupon', params, {
      method: 'POST'
    })
  }
}
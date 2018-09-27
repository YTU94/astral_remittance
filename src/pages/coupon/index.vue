<template>
  <div class="coupon">
    <!-- 优惠券列表 -->
    <div class="coupon-item" v-if="couponList" v-for="(coupon, index) in couponList" :key="index">
      <div class="item-line">
        <div class="line-left coupon-price">
          {{coupon.content}}
        </div>
        <div class="line-right coupon-btn" @click="collectCoupons(coupon.id)">领取</div>
      </div>
      <div class="item-line">
        <div class="line-left use-range">
          使用范围：{{coupon.couponApplyScope}}
        </div>
        <div class="line-right effective-date">
          有效日期：{{1537892636000}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'

export default {
  components: {},

  data () {
    return {
      logs: [],
      couponList: []
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const data = {
        pageNumber: 1,
        pageSize: 10
      }
      this.$http.coupon.getCouponList(data).then(res => {
        console.log(res)
        this.couponList = res.pageList.list
      })
    },
    // 领取优惠券
    collectCoupons (id) {
      this._collectCoupons(id)
    },
    _collectCoupons (id) {
      debugger
      this.$http.coupon.collectCoupons({couponId: id}).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less">
@import '../../assets/style/variable.less';
.coupon{
  padding: 20px;
  box-sizing: border-box;
  .coupon-item{
    border-radius: 10px;
    padding: 64px 30px 20px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
    margin-bottom: 40px;
    .item-line{
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:first-child{
        margin-bottom: 10px;
      }
      .line-left{
        flex: 1;
        overflow: hidden;
      }
      .line-right{
        flex: 0 0 auto;
      }
      .coupon-price{
        font-size: 72px;
        color: #F37014;
      }
      .coupon-btn{
        font-size: 24px;
        width: 80px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #555060;
        color: #555060;
        text-align: center;
        border-radius: 20px;
      }
      .use-range{
        font-size: 24px;
        color: @font-color-gray;
      }
      .effective-date{
        font-size: 24px;
        color: #999999;
      }
  }
  }
  
}
</style>

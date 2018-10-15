<template>
    <!-- 优惠券列表 -->
    <div class="coupon-item">
      <slot></slot>
      <img class="coupone-item__img" src="../../assets/img/coupons-bg.png" alt="" mode="widthFix">
      <div class="coupone-item__c" v-if="couponItem">
        <div class="item-line">
          <!-- <div class="line-left coupon-price">
            {{couponItem.content}}
          </div> -->
          <div class="line-left coupon-price" v-if="couponItem.contentList && couponItem.contentList.length > 0">
            满{{couponItem.contentList[0]}}减{{couponItem.contentList[1]}}
          </div>
          <div class="line-right coupon-btn" v-if="couponItem.operation" @click="collectCoupons(couponItem)">{{couponItem.operation}}</div>
          <div class="line-right coupon-btn" v-else-if="couponItem.isUesdName">{{couponItem.isUesdName}}</div>
        </div>
        <div class="item-line">
          <div class="line-left use-range">
            使用范围：{{couponItem.applyScopeContent || ''}}
          </div>
          <div class="line-right effective-date">
            有效日期：{{couponItem.eTime || ''}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// import { formatTime } from '@/utils/index'

export default {
  components: {},
  props: {
    couponItem: {
      type: Object
    }
  },
  data () {
    return {
      logs: [],
      couponList: []
    }
  },
  mounted () {
    // this.init()
  },
  methods: {
    // 领取优惠券
    collectCoupons (obj) {
      this.$emit('operateCoupons', obj)
    }
  }
}
</script>

<style lang="less">
@import '../../assets/style/variable.less';

.coupon-item{
  border-radius: 10px;
  padding: 0 0 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
  margin-bottom: 40px;
  .coupone-item__img{
    width: 100%;
    margin-bottom: 30px;
  }
  .coupone-item__c{
    padding: 0 30px;
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
        font-size: 56px;
        color: #F37014;
      }
      .coupon-btn{
        font-size: 24px;
        width: auto;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        border: 1px solid #555060;
        color: #555060;
        text-align: center;
        border-radius: 20px;
      }
      .use-range{
        font-size: 24px;
        color: @font-color-gray;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .effective-date{
        font-size: 24px;
        color: #999999;
      }
    }
  }
  
}
</style>

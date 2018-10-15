<template>
  <div class="order-list">
    <div class="order-item" v-if="rebateOrderList.length > 0" v-for="(item, index) in rebateOrderList" :key="index">
      <img class="order-item__img" src="../../../../assets/img/coupons-bg.png" alt="" mode="widthFix">
      <div class="order-item__c">
        <div class="item-line">
          <div class="line-left rebate-price">
            {{item.returnMoney}}元
            <span class="consume-price">(总金额：{{item.consumeMoney}}元)</span>
          </div>
          <div class="line-right creat-time" v-if="item.storeVo">{{item.storeVo.name}}</div>
        </div>
        <div class="item-line">
          <div class="line-left status">状态：{{item.statusName}}</div>
          <div class="line-right creat-time">创建时间：{{item.createdTimeFormated}}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'

// SUBMITED("已提交"),
// DONE("已领");
import couponItem from '@/components/list/couponItem'
import blankModel from '@/components/base/blankModel'

export default {
  components: {
    couponItem,
    blankModel
  },
  data () {
    return {
      rebateOrderList: []
    }
  },
  created () {
    console.log('created---------->')
  },
  beforeMount () {
    this.rebateOrderList = this.$mp.query.orderList ? JSON.parse(this.$mp.query.orderList) : []
  },
  mounted () {
    console.log('mounted---------->')
  },
  onShow () {
    console.log('Onshow---------->')
    // this._getUserRebateOrderList()
  },
  methods: {
  }
}
</script>
<style lang="less">
@import '../../../../assets/style/variable.less';
.order-list{
  position: relative;
  padding: 0 30px;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  .order-item{
    border-radius: 10px;
    padding: 0 0 20px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
    margin-bottom: 40px;
    .order-item__img{
      width: 100%;
      margin-bottom: 20px;
    }
    .order-item__c{
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
        .rebate-price{
          font-size: 56px;
          color: #F37014;
          .consume-price{
            font-size: 22px;
            color: @font-color-gray;
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
        }
        
        .status{
          font-size: 24px;
          color: @font-color-gray;
        }
        .creat-time{
          font-size: 24px;
          color: #999999;
        }
      }
    }
    
  }
  

}




.info{
  width: 100%;
  .info-item{
    height: 78rpx;
    text-align: left;
    font-size:32rpx;
    font-family:PingFangSC-Regular;
    color:#1A1A1A;
    line-height:44rpx;
    margin-bottom: 34rpx;
    border-bottom: 2rpx solid #E1E1E1;
    .info-item-content{
      float: right;
      font-size:28rpx;
      color: @font-color-gray;
    }
    // &:last-child{
    //   border-bottom:0rpx;
    // }
  }
}
</style>

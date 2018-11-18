<template>
  <div class="person">
    <div class="header">
      <div class="user-msg-card">
        <div class="top">
          <div class="organ-name">
            <open-data type="userNickName"></open-data>
          </div>
          <div class="avatar">
            <open-data class="avavtao-img" type="userAvatarUrl"></open-data>
          </div>
        </div>
      </div>
    </div>
    <div class="user">
      <ul class="info">
        <!-- <li class="info-item">姓名<span class="info-item-content">{{userInformation.name || ' '}}</span></li> -->
        <li class="info-item">手机号<span class="info-item-content">{{userInformation.mobile || ' '}}</span></li>
        <li class="info-item" @click="goCouponList">
          我的优惠卷
          <span class="info-item-content">{{couponListTotal}}</span>
        </li>
        <li class="info-item" @click="goOrderList">
          我的返利订单
          <span class="info-item-content">{{rebateOrderTotal}}</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { formatTime } from '@/utils/index'

import couponItem from '@/components/list/couponItem'
import blankModel from '@/components/base/blankModel'

export default {
  components: {
    couponItem,
    blankModel
  },
  data () {
    return {
      userInfo: {
        isOrgan: false,
        isRealname: false,
        avatar: '',
        name: ''
      },
      userInformation: {},
      couponList: [],
      couponListTotal: 0,
      rebateOrderList: [],
      rebateOrderTotal: 0,
      showCouponModel: false
    }
  },
  created () {
    console.log('created---------->')
  },
  mounted () {
    console.log('mounted---------->')
  },
  onShow () {
    console.log('Onshow---------->')
    this._getClientCouponList()
    this._getUserRebateOrderList()
    this.userInformation = wx.getStorageSync('userInfo')
  },
  methods: {
    goCouponList () {
      let couponList = JSON.stringify(this.couponList)
      wx.navigateTo({
        url: `./couponList/main?couponList=${couponList}`
      })
    },
    goOrderList () {
      let orderList = JSON.stringify(this.rebateOrderList)
      wx.navigateTo({
        url: `./orderList/main?orderList=${orderList}`
      })
    },
    _getClientCouponList () {
      this.$http.coupon.getClientCouponList({}).then(res => {
        this.couponListTotal = res.pageList.count
        this.couponList = res.pageList.list
        res.pageList.list.forEach(e => {
          if (e.hasOwnProperty('couponVo')) {
            e.couponVo.isUesdName = e.isUsed ? '已使用' : '未使用'
            e.couponVo.eTime = formatTime(e.couponVo.effectTime, true)
          }
        })
        console.log('this.couponList', this.couponList)
      })
    },
    _getUserRebateOrderList (data) {
      this.$http.rebate.getUserRebateOrderList(data).then(res => {
        res.pageList.list.forEach(e => {
          if (e.hasOwnProperty('createdTime')) {
            e.statusName = e.status === 'SUBMITED' ? '已提交' : (e.status === 'INACTIVE' ? '已作废' : (e.status === 'DONE' ? '已领取' : '无'))
            e.createdTimeFormated = formatTime(e.createdTime, true)
          }
        })
        this.rebateOrderList = res.pageList.list
        this.rebateOrderTotal = res.pageList.count
      })
    }
  }
}
</script>
<style lang="less">
@import '../../../assets/style/variable.less';
.person{
  position: relative;
  .header{
    position: relative;;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 40px 40px 20px;
    box-sizing: border-box;
    // background-color: @bg-color;
    .user-msg-card{
      width: 100%;
      height: auto;
      position: relative;
      top: 0;
      left: 0;
      padding: 48px 40px 30px;
      box-sizing: border-box;
      box-shadow:0px 2px 8px 0px rgba(0,0,0,0.1);
      border-radius: 8px;
      height: 242px;
      background: #555060;
      .top{
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        justify-content: space-around;
        align-items: flex-start;
          
        .organ-name{
          flex: 1 1 auto;
          text-align: left;
          font-size: 40px!important;
          font-family:PingFangSC-Medium;
          color:#fff;
        }
        .avatar{
          flex: 0 0 100px;
          text-align: right;
          .avavtao-img{
            display: inline-block;
            width: 100px;
            height: 100px;
            border-radius: 4px;
          }
        }
      }
    }
  }

  .user{
    position: relative;;
    left:0;
    top:0;
    width: 100%;
    box-sizing:border-box;
    padding:40px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  .blank-model{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    background: #fff;
    z-index: 10001;
    padding:50px 30px 30px;
    box-sizing: border-box;
    line-height: 1;
    .model-close__icon{
      position: absolute;
      top: 0px;
      right: 30px;
      padding: 5px 10px;
      width: auto;
      height: auto;
       .close-icon{
        position: relative;
        top: 0;
        left: 0;
        width: 25px;
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

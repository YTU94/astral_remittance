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
        <li class="info-item">姓名<span class="info-item-content">{{userInformation.name || ' '}}</span></li>
        <li class="info-item">手机号<span class="info-item-content">{{userInformation.phone || ' '}}</span></li>
        <li class="info-item" @click="showCouponModel = true">
          我的优惠卷
          <span class="info-item-content" v-if="couponList && couponList.length > 0" >{{couponList.length || '0'}}</span>
        </li>
      </ul>
    </div>

    <div class="blank-model" v-show="showCouponModel">
      <img class="close-icon" @click="closeModel" src="../../assets/img/close-icon.png" alt="" mode="widthFix">
      <coupon-item :couponItem="item" v-if="item" v-for="(item, index) in couponList" :key="index"></coupon-item>
    </div>

  </div>
</template>

<script>
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
      userInformation: {
        name: '',
        idno: '',
        phone: ''
      },
      couponList: null,
      showCouponModel: false
    }
  },
  mounted () {
    this._getClientCouponList()
  },
  methods: {
    closeModel () {
      this.showCouponModel = false
    },
    _getClientCouponList () {
      this.$http.coupon.getClientCouponList({}).then(res => {
        this.couponList = res.pageList.list
      })
    }
  }
}
</script>
<style lang="less">
@import '../../assets/style/variable.less';
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
    .close-icon{
      position: absolute;
      top: 30px;
      right: 30px;
      width: 20px;
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
    &:last-child{
      border-bottom:0rpx;
    }
  }
}
</style>

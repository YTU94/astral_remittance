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
        <li class="info-item">姓名<span class="info-item-content">{{userInformation.name || '1'}}</span></li>
        <li class="info-item">手机号<span class="info-item-content">{{userInformation.phone || '2'}}</span></li>
        <li class="info-item">我的优惠卷<span class="info-item-content">{{userInformation.idno || '3'}}</span></li>
      </ul>
    </div>
    <blank-model :showModel="1">
      <coupon-item v-if="coupons"></coupon-item>
    </blank-model>
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
      coupons: null
    }
  },
  mounted () {
    this._getClientCouponList()
  },
  methods: {
    _getClientCouponList () {
      this.$http.coupon.getClientCouponList({}).then(res => {
        this.coupons = res
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

<template>
  <div>
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
      <div class="user-realname">
        <ul class="info">
          <li class="info-item">姓名<span class="info-item-content">{{userInformation.name || '1'}}</span></li>
          <li class="info-item">手机号<span class="info-item-content">{{userInformation.phone || '2'}}</span></li>
          <li class="info-item">我的优惠卷<span class="info-item-content">{{userInformation.idno || '3'}}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import userInfoCard from 'tsign-ui/package/user-info-card/user-info-card.vue'
// import 'tsign-ui/package/user-info-card/style/index.js'
export default {
  components: {
    // userInfoCard
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
      realname: false
    }
  },
  beforeMount () {
    const userInfo = JSON.parse(wx.getStorageSync('userInfo'))
    if (userInfo.realname) {
      this.userInfo.isRealname = true
      this.userInfo.name = this.userInformation.name = userInfo.name
      this.userInformation.idno = userInfo.idno
      this.userInformation.phone = userInfo.mobile
      this.userInfo.avatar = ''
    } else {
      let that = this
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function (res) {
                that.userInfo.avatar = res.userInfo.avatarUrl
                that.userInfo.name = res.userInfo.nickName
              }
            })
          }
        }
      })
    }
  },
  methods: {
    identification: function () {
      console.log('已认证')
      wx.navigateTo({
        url: '../../realname/main'
      })
    }
  }
}
</script>
<style lang="less">
@import '../../assets/style/variable.less';

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
.card{
  display: inline-block;
  width:100%;
  height:240rpx;
  background:rgba(255,255,255,1);
  box-shadow:0rpx 4rpx 16rpx 0rpx rgba(0,0,0,0.1);
  border-radius:8rpx;
}
.card-content{
  display: inline-block;
  position:fixed;
  margin:40rpx;
  width:75%;
}
.image-head{
    float:right;
}
.user{
  position: relative;;
  left:0;
  top:0;
  width: 100%;
  box-sizing:border-box;
  padding:40px;
}
.user .user-realname{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.user-realname .realname-item{
  flex: 0 0 auto;
  text-align: left;
  font-size:32rpx;
  font-family:PingFangSC-Regular;
  color:rgba(26,26,26,1);
  line-height:44rpx;
}
.user-realname .realname-item:last-child{
  margin-left:430rpx;
  text-align: right;
  font-size:28rpx;
  font-family:PingFangSC-Regular;
  color:rgba(255,0,21,1);
  line-height:40rpx;
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

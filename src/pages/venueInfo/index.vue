<template>
  <div class="venue-info">

    <div class="info-card">
      <img class="info-card__img" :src="venueInfo.imgUrl" mode="widthFix">
      <div class="info-card__msg">
        <span class="msg-city">{{venueInfo.cityName || curCity.name }}</span>
        <span class="msg-name">{{venueInfo.name}}</span>
      </div>
    </div>

    <div class="info-msg">
      <div class="msg-line">
        <div class="msg-line__lable">馆长</div>
        <div class="msg-line__content">{{venueInfo.contactName}}</div>
      </div>
      <div class="msg-line">
        <div class="msg-line__lable">联系电话</div>
        <div class="msg-line__content">{{venueInfo.contactPhone}}</div>
      </div>
      <div class="msg-line">
        <div class="msg-line__lable">星级</div>
        <div class="msg-line__content">
          <span class="star">{{venueInfo.starLevel}}★</span>
        </div>
      </div>
      <div class="msg-line">
        <div class="msg-line__lable">距离</div>
        <div class="msg-line__content">{{venueInfo.distance}}/km</div>
      </div>
      
      <div class="msg-line">
        <div class="msg-line__lable">学员规模</div>
        <div class="msg-line__content">{{venueInfo.inStuNums}}</div>
      </div>
      <div class="msg-line">
        <div class="msg-line__lable">地址</div>
        <div class="msg-line__content">{{venueInfo.address}}</div>
      </div>
      
    </div>

  </div>
</template>

<script>
// Use Vuex
import store from './store'
import selectBar from '@/components/base/selectBar'
import swiperBanner from '@/components/swiper-banner'
import venueItem from '@/components/list/venueItem'

export default {
  components: {
    selectBar,
    venueItem,
    swiperBanner
  },
  data () {
    return {
      curCity: '',
      venueInfo: '',
      // list
      total: 0,
      pageSize: 10,
      curPageNumber: 1,
      noMore: false
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  created () {
  },
  mounted () {
    this.curCity = wx.getStorageSync('curCity')
    this.venueInfo = JSON.parse(this.$mp.query.venueInfo)
    this.init()
  },
  methods: {
    init () {},
    onReachBottom (e) {
      if (this.checkLoadmore()) {
        const data = {
          pageSize: this.pageSize,
          pageNumber: this.curPageNumber + 1
        }
        this._getCoachList(data, true)
      } else {
        this.noMore = true
      }
    },
    navigateToNews (id) {
      wx.navigateTo({
        url: `../newsInfo/main?id=${id}`
      })
    },
    /*
    * 功能 fun
    */
    checkLoadmore () {
      if (this.pageSize * this.curPageNumber > this.total) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="less">
@import '../../assets/style/variable.less';

.venue-info{
  background-color: @bg-color;
  padding: 0;
  box-sizing: border-box;
  padding-top: 25px; 
  .info-card{
    display: flex;
    padding: 25px;
    margin: 0 25px 25px 25px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow:0px 2px 8px 0px rgba(0,0,0,0.1);
    background-color: #fff;
    &__msg{
      flex: 1;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: flex-end;
      border-radius: 5px;
      .msg-city{
        font-size: 28px;
        color: @font-color-gray;
      }
      .msg-name{
        font-size: 32px;
      }
    }
    &__img{
      flex: 0 0 auto;
      display: inline-block;
      width: 240px;
      height: auto;
      border-radius: 5px;
    }
  }
  .info-msg{
    margin-top: 30px;
    background-color: #fff;
    padding:0 25px;
    .msg-line{
      display: flex;
      justify-content: space-between;
      padding: 34px 0;
      border-bottom: 1px solid @border-color;
      font-size: 28px;
      &:last-child{
        border-bottom: 0;
      }
      &__lable{
        flex: 0 0 200px;
      }
      &__content{
        .star{
          color: #FFC600;
        }
      }
    }
  }
}

</style>

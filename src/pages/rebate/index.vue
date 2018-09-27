<template>
  <div class="rebate">
    <!-- swiper -->
    <swiper-banner></swiper-banner> 
    <!-- 热门推荐 -->
    <slider-banner :imgWidth="100" :imgHeight="100"></slider-banner>
    <!-- 选择门店 -->
    <select-bar text="选择门店"></select-bar>
    <!-- 门店列表 -->
    <div class="venue-list">
      <div class="venue-item">
        <div class="item-left">
          <p class="item-name">1111111</p>
          <p class="item-offer">22222222</p>
          <p class="item-address">333333333</p>
        </div>
        <div class="item-right">
          <div class="right-btn" @click="goSubmit">拿返利 > </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'
import selectBar from '@/components/base/selectBar'
import swiperBanner from '@/components/swiper-banner'
import sliderBanner from '@/components/slider-banner'

export default {
  components: {
    card,
    selectBar,
    swiperBanner,
    sliderBanner
  },

  data () {
    return {
      logs: [],
      venueList: [
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'}
      ]
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
    // const data = {}
    // this.$http.company.getCompanyList(data).then(res => {
    //   console.log(res)
    // })
  },
  mounted () {
    this.init()
  },
  methods: {
    goSubmit () {
      wx.navigateTo({
        url: './../submitRebate/main'
      })
    },
    init () {
      this.$http.store.getStoreList({}).then(res => {
        this.sliderList = res.pageList.list
        this.sliderList.forEach(obj => {
          obj.imgUrl = 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
          obj.name1 = obj.name
          obj.name2 = obj.address
        })
      })
    }
  }
}
</script>

<style lang="less">
@import '../../assets/style/variable.less';

.rebate{
  .venue-list{
    position: relative;
    top:0;
    left: 0;
    padding-left: 20px;
    box-sizing: border-box;
    .venue-item{
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      border-bottom: 1px solid @border-color;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      .item-left{
        flex: 1;
        .item-name{
          color: @font-color-black;
          font-size: 40px;
        }
        .item-offer{
          color: red;
          font-size: 26px;
        }
        .item-addres{
          color: @font-color-gray;
          font-size: 24px;
        }
      }
      .item-right{
        flex: 0 0 auto;
        display: inline-block;
        padding: 5px 20px;
        margin-right: 20px;
        border: 1px solid #ccc;
        font-size: 32px;
        color: blue;
      }
    }
  }
}
</style>

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
          <p class="item-name">1</p>
          <p class="item-">2</p>
          <p class="item-address">3</p>
        </div>
        <div class="right">
          <div class="right-btn">拿返利</div>
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
  }
}
</script>

<style lang="less">
// @import '~assets/style/variable.less';

.rebate{
  .venue-list{
    position: relative;
    top:0;
    left: 0;
    padding-left: 20px;
    .venue-item{
      position: relative;
      top: 0;
      left: 0;
      border-bottom: 1px solid
    }
  }
}
</style>

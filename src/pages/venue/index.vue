<template>
  <div class="venue">
    <!-- swiper -->
    <swiper-banner></swiper-banner> 
    <!-- 热门推荐 -->
    <slider-banner :sliderList="sliderList" :imgWidth="100" :imgHeight="100"></slider-banner>
    <!-- 选择门店 -->
    <select-bar text="选择门店"></select-bar>

    <venue-item v-for="(obj, index) in venueList" :key="index" :venueItem="obj"></venue-item>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'
import selectBar from '@/components/base/selectBar'
import swiperBanner from '@/components/swiper-banner'
import sliderBanner from '@/components/slider-banner'
import venueItem from '@/components/list/venueItem'

export default {
  components: {
    card,
    selectBar,
    swiperBanner,
    sliderBanner,
    venueItem
  },

  data () {
    return {
      logs: [],
      sliderList: []
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
      this.$http.store.getStoreList({}).then(res => {
        this.sliderList = res.pageList.list
        this.sliderList.forEach(obj => {
          obj.imgUrl = 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
          obj.name1 = obj.name
          obj.name2 = obj.address
        })
        console.log(this.sliderList, '-------')
      })
    }
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>

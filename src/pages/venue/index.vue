<template>
  <div class="venue">
    <!-- swiper -->
    <div class="top-banner">
      <swiper-banner></swiper-banner>
    </div>
    <!-- 热门推荐 -->
    <slider-banner :sliderList="venueList" :imgWidth="100" :imgHeight="100"></slider-banner>
    <!-- 选择门店 -->
    <div class="select-venue">
      <select-bar text="选择门店"></select-bar>
    </div>
    <div class="venue-list">

      <venue-item v-for="(obj, index) in venueList" :key="index" :venueItem="obj"></venue-item>
    </div>
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
      total: null,
      logs: [],
      venueList: []
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
        this.total = res.pageList.count
        this.venueList = res.pageList.list
        this.venueList.forEach(obj => {
          obj.imgUrl = 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
          obj.name1 = obj.name
          obj.name2 = obj.address
        })
        console.log(this.venueList, '-------')
      })
    }
  },
  onReachBottom (obj) {
    console.log('监听用户上拉触底事件。', obj)
  }
}
</script>

<style lang="less">
@import '../../assets/style/variable.less';

.venue{
  background-color: @bg-color;
  .top-banner{
    background: #fff;
    padding-bottom: 30px;
    margin-bottom: 20px;
  }
  .select-venue{
    margin-top: 20px;
    padding: 17px 30px;
    border: 1px solid @border-color;
    background-color: #fff;
  }
  .venue-list{
    background-color: #fff;
    padding: 0 30px;
  }
}

</style>

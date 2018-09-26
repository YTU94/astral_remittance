<template>
  <div class="mews-list">
    <swiper-banner></swiper-banner> 
    <div class="list">
      <venue-item v-for="(obj, index) in venueList" :key="index" :venueItem="obj" @guideTo="toNewsInfo"></venue-item>
    </div>

    <div class="new-item">
      <img src="" alt="" class="">
      <div class=""></div>
    </div>
  </div>
</template>

<script>
import swiperBanner from '@/components/swiper-banner'
import venueItem from '@/components/list/venueItem'

export default {
  components: {
    swiperBanner,
    venueItem
  },
  data () {
    return {
      venueList: [
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'}
      ]
    }
  },
  methods: {
    toNewsInfo (obj) {
      wx.navigateTo({
        url: '../newsInfo/main'
      })
    }
  }
}
</script>

<style lang="less">
.mews-list{
  .list{
    padding: 20px;
  }
}
</style>

<template>
  <div class="mews-list">
    <div class="top-banner" >
      <p class="hot">热门推荐</p>
      <swiper-banner></swiper-banner>
    </div>
    <div class="list">
      <venue-item v-for="(obj, index) in venueList" :key="index" :venueItem="obj" @guideTo="toNewsInfo"></venue-item>
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
        {
          imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          name: 'title',
          address: 'asd',
          distance: '2018-10-12'
        },
        {
          imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          name: 'title',
          address: 'asd',
          distance: '2018-10-12'},
        {
          imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          name: 'title',
          address: 'asd',
          distance: '2018-10-12'},
        {
          imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          name: 'title',
          address: 'asd',
          distance: '2018-10-12'},
        {
          imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          name: 'title',
          address: 'asd',
          distance: '2018-10-12'}
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
@import '../../assets/style/variable.less';

.mews-list{
  position: relative;
  background: @bg-color;
  .top-banner{
    background: #fff;
    padding-bottom: 30px;
    margin-bottom: 20px;
    .hot{
      font-size: 36px;
      color: #333333;
      padding: 0 30px 30px;
    }
  }
  .list{
    padding: 20px;
    background-color: #fff;
  }
}
</style>

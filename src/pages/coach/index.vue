<template>
  <div class="coach">
    <!-- swiper -->
    <swiper-banner></swiper-banner>
    <h2>金牌教练</h2>

    <scroll-view  class="best-coach-list" scroll-x="true" style="width: 100%; height:200px; white-space:nowrap;">
      <view v-if="sliderList" class="slider-item" v-for="(item, index) in sliderList" :key="index">
        <img class="slider-item__img" :src="item.imgUrl" v-bind:style="{width: imgWidth + 'px', height: imgHeight + 'px'}">
        <!-- <img class="slider-item__img" :src="item.imgUrl" :width="imgWidth + 'rpx'" :height="imgHeight + 'rpx'"> -->
        <p class="slider-item__msgOne">{{item.name1}}</p>
        <p class="slider-item__msgTwo">{{item.name2}}</p>
      </view>
    </scroll-view>
    <!-- 选择门店 -->
    <select-bar text="选择门店"></select-bar>
    <!-- coach list -->
    <coach-item v-for="(obj, index) in coachList" :key="index" :coachItem="obj"></coach-item>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import selectBar from '@/components/base/selectBar'
import swiperBanner from '@/components/swiper-banner'
import coachItem from '@/components/list/coachItem'

export default {
  components: {
    selectBar,
    coachItem,
    swiperBanner
  },
  data () {
    return {
      coachList: []
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.$http.coach.getCoachList({}).then(res => {
        this.coachList = res.pageList.list
        this.coachList.forEach(obj => {
          obj.imgUrl = 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
          obj.name1 = obj.name
          obj.name2 = obj.address
        })
        console.log(this.coachList, '-------')
      })
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style lang="less">
.coach {
  .best-coach-list{
    overflow-x: scroll;
    overflow-y: hidden;
    .coach-item{
      width: 200px;
      height: 200px;
    }
  }
}

</style>

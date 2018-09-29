<template>
  <div class="coach">
    <!-- swiper -->
    <div class="top-banner">
      <swiper-banner></swiper-banner>
    </div>

    <!-- <h2>金牌教练</h2>
    <scroll-view  class="best-coach-list" scroll-x="true" style="width: 100%; height:200px; white-space:nowrap;">
      <view v-if="sliderList" class="slider-item" v-for="(item, index) in sliderList" :key="index">
        <img class="slider-item__img" :src="item.imgUrl" v-bind:style="{width: imgWidth + 'px', height: imgHeight + 'px'}">
        <p class="slider-item__msgOne">{{item.name1}}</p>
        <p class="slider-item__msgTwo">{{item.name2}}</p>
      </view>
    </scroll-view> -->

    <!-- 选择门店 -->
    <div class="filter-coach">
      <select-bar text="选择门店"></select-bar>
    </div>

    <!-- coach list -->
    <div class="coach-list">
      <coach-item v-for="(obj, index) in coachList" :key="index" :coachItem="obj"></coach-item>
    </div>
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
  },
  mounted () {
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
          obj.info = 'asdasdasd'
          obj.tags = ['123123', '金牌打手']
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
@import '../../assets/style/variable.less';

.coach {
  background-color: @bg-color;
  .top-banner{
    padding: 0 0 30px;
    margin-bottom: 20px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .filter-coach{
    margin-top: 20px;
    padding: 17px 30px;
    border: 1px solid @border-color;
    background-color: #fff;
  }
  .coach-list{
    background-color: #fff;
    padding: 0 30px;
  }
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

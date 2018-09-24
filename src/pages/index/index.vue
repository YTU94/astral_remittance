<template>
  <div class="home" @click="clickHandle('test click', $event)">
    <!-- 定位 -->
    <location text="123"></location>
    <!-- slide banner -->
    <swiper-banner></swiper-banner> 
    <div class="main-list">
      <div class="list-item" v-for="(item, index) in mainTipList" :key="index">
        <div class="for-bg" @click="goTo(item.name)">
          <p class="title">{{item.name}}</p>
          <p class="content"></p>
        </div>
      </div>
    </div>
    <!-- 热门推荐 -->
    <slider-banner :sliderList="sliderList"  :imgWidth="100" :imgHeight="100"></slider-banner> 
  </div>
</template>

<script>
import swiperBanner from '@/components/swiper-banner'
import sliderBanner from '@/components/slider-banner'
import location from '@/components/location'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      mainTipList: [
        {name: '找场馆', value: ''},
        {name: '找教练', value: ''},
        {name: '找优惠', value: ''},
        {name: '拿返利', value: ''}
      ],
      sliderList: []
    }
  },

  components: {
    sliderBanner,
    swiperBanner,
    location
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
    },
    goTo (name) {
      if (name === '找场馆') {
        wx.navigateTo({
          url: './../venue/main'
        })
      } else if (name === '找教练') {
        wx.navigateTo({
          url: './../coach/main'
        })
      } else if (name === '找优惠') {
        wx.navigateTo({
          url: './../index/main'
        })
      } else if (name === '拿返利') {
        wx.navigateTo({
          url: './../rebate/main'
        })
      }
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    this.init()
  }
}
</script>

<style lang="less" scoped>

.home {
  position: relative;
  .main-list{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    .list-item{
      flex: 0 0 50%;
      box-sizing: border-box;
      padding: 20px;
      box-sizing: border-box;
      .for-bg{
        border: 1px solid blue;
        height: 176px;
      }
    }
  }
}
</style>

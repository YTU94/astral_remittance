<template>
  <div class="home" @click="clickHandle('test click', $event)">
    <!-- 定位 -->
    <location text="123"></location>
    <!-- slide banner -->
    <swiper-banner></swiper-banner> 
    <div class="main-list">
      <div class="list-item" v-for="(item, index) in mainTipList" :key="index">
        <div class="for-bg">
          <p class="title">{{item.name}}</p>
          <p class="content"></p>
        </div>
      </div>
    </div>
    <!-- 热门推荐 -->
    <slider-banner :imgWidth="100" :imgHeight="100"></slider-banner> 
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
      ]
    }
  },

  components: {
    sliderBanner,
    swiperBanner,
    location
  },

  methods: {
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

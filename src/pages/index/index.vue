<template>
  <div class="home" @click="clickHandle('test click', $event)">
    <!-- 定位 -->
    <div class="top-location">
      <location  text="123" @refresh="refresh" @resolve="resolve"></location>
    <!-- slide banner -->
    </div>
    <div class="top-banner" >
      <swiper-banner :swiperList="articleList" @navigateTo="navigateToNews"></swiper-banner>
    </div>

    <!-- <div class="" @click="toAllNews">全部</div> -->
    <div class="main-list">
      <div class="list-item" @click="goTo('找场馆')">
          <img class="bg-img" src="../../assets/img/venue-bg.png" alt="">
          <p class="title">找场馆</p>
      </div>
      <div class="list-item" @click="goTo('找教练')">
          <img class="bg-img" src="../../assets/img/coach-bg.png" alt="">
          <p class="title">找教练</p>
      </div>
      <div class="list-item" @click="goTo('找优惠')">
          <img class="bg-img" src="../../assets/img/coupon-bg.png" alt="">
          <p class="title">找优惠</p>
      </div>
      <div class="list-item" @click="goTo('拿返利')">
          <img class="bg-img" src="../../assets/img/rebate-bg.png" alt="">
          <p class="title">拿返利</p>
      </div>
    </div>
    <!-- 热门推荐 -->
    <slider-banner :sliderList="sliderList"  @guideTo="guideTo" :imgWidth="100" :imgHeight="100"></slider-banner> 
  </div>
</template>

<script>
import swiperBanner from '@/components/swiper-banner'
import sliderBanner from '@/components/slider-banner'
import location from '@/components/location'

export default {
  data () {
    return {
      articleList: [],
      motto: 'Hello World',
      userInfo: {},
      sliderList: []
    }
  },

  components: {
    sliderBanner,
    swiperBanner,
    location
  },
  created () {
    // 调用应用实例的方法获取全局数据
    console.log('index created')
  },
  mounted () {
    this.getUserInfo()
    // this.init()
  },
  methods: {
    init () {
      const data = {
        pageSize: 4,
        pageNumber: 1,
        isHot: true,
        cityId: wx.getStorageSync('curCity').id || ''
      }
      this.$http.store.getStoreList(data).then(res => {
        this.sliderList = res.pageList.list
        this.sliderList.forEach(obj => {
          obj.name1 = obj.name
          obj.name2 = obj.address
        })
      })
      this._getArticleList({ pageSize: 3, pageNumber: 1 })
    },
    resolve () {
      this.init()
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
          url: './../coupon/main'
        })
      } else if (name === '拿返利') {
        wx.navigateTo({
          url: './../rebate/main'
        })
      }
    },
    guideTo () {
      wx.navigateTo({
        url: './../venue/main'
      })
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
    },
    toAllNews () {
      wx.navigateTo({
        url: './../newsList/main'
      })
    },
    navigateToNews (id) {
      wx.navigateTo({
        url: `../newsInfo/main?id=${id}`
      })
    },
    // 刷新
    refresh (e) {
      this.init()
    },
    _getArticleList (data, merge) {
      this.$http.article.getArticleList(data).then(res => {
        console.log(res)
        if (merge) {
          this.articleList = this.articleList.concact(res.pageList.list)
        } else {
          this.articleList = res.pageList.list
        }
      })
    }
  }

}
</script>

<style lang="less" scoped>
@import '../../assets/style/variable.less';

.home {
  position: relative;
  background: @bg-color;
  .top-location{
    background: #fff;
    padding: 0 30px;
    overflow: hidden;
    box-sizing: border-box;
  }
  .top-banner{
    background: #fff;
    padding-bottom: 30px;
    margin-bottom: 20px;
  }
  .main-list{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 30px 10px;
    box-sizing: border-box;
    background: #fff;
    margin-bottom: 20px;
    .list-item{
      flex: 0 0 50%;
      box-sizing: border-box;
      padding: 20px;
      box-sizing: border-box;
      position: relative;
      top: 0;
      left: 0;
      .bg-img{
        width: 100%;
        height: 176px;
        display: inline-block;
      }
      .title{
        display: inline-block;
        position: absolute;
        top: 56px;
        left: 55px;
        color: #fff;
        line-height: 1;
      }
    }
  }
}
</style>

<template>
  <div class="venue">
    <!-- swiper -->
    <div class="top-banner">
      <swiper-banner :swiperList="articleList" @navigateTo="navigateToNews"></swiper-banner>
    </div>
    <!-- 热门推荐 -->
    <slider-banner :sliderList="hotVenueList" @clickHandle="sliderClickHandle" :imgWidth="100" :imgHeight="100"></slider-banner>
    <!-- 选择门店 -->
    <div class="select-venue">
      <select-bar text="选择门店" operation="搜索" @toOPreate="toOPreate"></select-bar>
    </div>
    <div class="search-input" v-show="showSearch">
      <search @confirm="confirm" @cancel="cancel"></search>
    </div>
    <div class="venue-list">
      <venue-item v-for="(obj, index) in venueList" :key="index" @guideTo="sliderClickHandle" :venueItem="obj"></venue-item>
    </div>
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'
import search from '@/components/search'
import card from '@/components/card'
import selectBar from '@/components/base/selectBar'
import swiperBanner from '@/components/swiper-banner'
import sliderBanner from '@/components/slider-banner'
import venueItem from '@/components/list/venueItem'

export default {
  components: {
    search,
    card,
    selectBar,
    swiperBanner,
    sliderBanner,
    venueItem
  },

  data () {
    return {
      showSearch: false,
      articleList: [],
      logs: [],
      venueList: [],
      hotVenueList: [],
      // list
      total: 0,
      pageSize: 5,
      curPageNumber: 1,
      noMore: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const data = { // eslint-disable-line
        pageSize: 4,
        pageNumber: 1,
        cityId: wx.getStorageSync('curCity').id || ''
      }
      const dataOther = {
        isHot: true,
        cityId: wx.getStorageSync('curCity').id || ''
      }
      this.$http.store.getStoreList(dataOther).then(res => {
        res.pageList.list.forEach(obj => {
          obj.name1 = obj.name
          obj.name2 = obj.address
        })
        this.hotVenueList = res.pageList.list
      })
      this._getArticleList({ pageSize: 3, pageNumber: 1 })
      this._getStoreList(data)
    },
    toOPreate (e) {
      this.showSearch = true
    },
    confirm (e) {
      const data = {
        fuzzyContent: e.mp.detail.value,
        cityId: wx.getStorageSync('curCity').id || ''
      }
      this.showSearch = false
      this._getStoreList(data)
    },
    cancel () {
      this.showSearch = false
    },
    navigateToNews (id) {
      wx.navigateTo({
        url: `../newsInfo/main?id=${id}`
      })
    },
    sliderClickHandle (e) {
      console.log('sliderClickHandle', e)
      wx.navigateTo({
        url: `./../venueInfo/main?venueInfo=${JSON.stringify(e)}`
      })
    },
    _getStoreList (data, merge) {
      this.$http.store.getStoreList(data).then(res => {
        this.total = res.pageList.count
        res.pageList.list.forEach(obj => {
          obj.name1 = obj.name
          obj.name2 = obj.address
          obj.unit = true
          obj.starList = parseInt(obj.starLevel)
        })
        if (merge) {
          this.venueList = this.venueList.concat(res.pageList.list)
        } else {
          this.venueList = res.pageList.list
        }
      })
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
    },
    /*
    * 功能 fun
    */
    checkLoadmore () {
      console.log(this.total, this.curPageNumber)
      if (this.pageSize * this.curPageNumber >= this.total) {
        return false
      } else {
        return true
      }
    }
  },
  onReachBottom (e) {
    if (this.checkLoadmore()) {
      this.curPageNumber++
      const data = {
        pageSize: this.pageSize,
        pageNumber: this.curPageNumber,
        cityId: wx.getStorageSync('curCity').id || ''
      }
      this._getStoreList(data, true)
    } else {
      this.noMore = true
    }
  },
  onHide () {
    console.log('当前页置1')
    this.curPageNumber = 1
  },
  onUnload () {
    console.log('当前页置1')
    this.curPageNumber = 1
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
  .search-input{
    width: 100%;
    padding: 5rpx 20px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .venue-list{
    background-color: #fff;
    padding: 0 30px;
  }
}

</style>

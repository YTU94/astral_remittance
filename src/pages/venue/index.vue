<template>
  <div class="venue">
    <!-- swiper -->
    <div class="top-banner">
      <swiper-banner :swiperList="articleList" @navigateTo="navigateToNews"></swiper-banner>
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
// import { formatTime } from '@/utils/index'
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
      articleList: [],
      logs: [],
      venueList: [],
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
      const data = {
        pageSize: 4,
        pageNumber: 1
      }
      this._getStoreList(data)
      this._getArticleList({ pageSize: 3, pageNumber: 1 })
    },
    navigateToNews (id) {
      wx.navigateTo({
        url: `../newsInfo/main?id=${id}`
      })
    },
    _getStoreList (data, merge) {
      this.$http.store.getStoreList(data).then(res => {
        this.total = res.pageList.count
        res.pageList.list.forEach(obj => {
          obj.name1 = obj.name
          obj.name2 = obj.address
          obj.unit = true
        })
        if (merge) {
          this.venueList = this.venueList.concact(res.pageList.list)
        } else {
          this.venueList = res.pageList.list
        }
        this.venueList = res.pageList.list
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
      if (this.pageSize * this.curPageNumber > this.total) {
        return false
      } else {
        return true
      }
    }
  },
  onReachBottom (e) {
    if (this.checkLoadmore()) {
      const data = {
        pageSize: this.pageSize,
        pageNumber: this.curPageNumber + 1
      }
      this._getStoreList(data, true)
    } else {
      this.noMore = true
    }
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

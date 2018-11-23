<template>
  <div class="coach">
    <!-- swiper -->
    <div class="top-banner">
      <swiper-banner :swiperList="articleList" @navigateTo="navigateToNews"></swiper-banner>
      <!-- <swiper-banner :swiperList="swiperList"></swiper-banner> -->
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
      <select-bar text="全部教练" operation="搜索" @toOPreate="toOPreate"></select-bar>
    </div>
    <div class="search-input" v-show="showSearch">
      <search @confirm="confirm" @cancel="cancel"></search>
    </div>
    <!-- coach list -->
    <div class="coach-list">
      <coach-item v-for="(obj, index) in coachList" :key="index" @guideTo="guideTo" :coachItem="obj"></coach-item>
      <!-- nomore -->
      <p v-show="noMore" class="noMore">- 没有更多了 -</p>
    </div>
    
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import search from '@/components/search'
import selectBar from '@/components/base/selectBar'
import swiperBanner from '@/components/swiper-banner'
import coachItem from '@/components/list/coachItem'

export default {
  components: {
    search,
    selectBar,
    coachItem,
    swiperBanner
  },
  data () {
    return {
      articleList: [],
      coachList: [],
      swiperList: [
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', msg: '金牌教练'}
      ],
      showSearch: false,
      // list
      total: 0,
      pageSize: 5,
      curPageNumber: 1,
      noMore: false
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
      const data = {
        pageSize: 5,
        pageNumber: 1,
        cityId: wx.getStorageSync('curCity').id || ''
      }
      this._getCoachList(data)
      this._getArticleList({ pageSize: 3, pageNumber: 1 })
    },
    navigateToNews (id) {
      wx.navigateTo({
        url: `../newsInfo/main?id=${id}`
      })
    },
    // 搜索相关
    toOPreate (e) {
      this.showSearch = true
    },
    confirm (e) {
      const data = {
        fuzzyContent: e.mp.detail.value,
        cityId: wx.getStorageSync('curCity').id || ''
      }
      this.showSearch = false
      this._getCoachList(data)
    },
    cancel () {
      this.showSearch = false
    },
    guideTo (e) {
      console.log('coachInfo', e)
      wx.navigateTo({
        url: `./../coachInfo/main?coachInfo=${JSON.stringify(e)}`
      })
    },
    _getCoachList (data, merge) {
      this.$http.coach.getCoachList(data).then(res => {
        this.total = parseInt(res.pageList.count)
        try {
          res.pageList.list.forEach(obj => {
            obj.name1 = obj.name
            obj.name2 = obj.address
            obj.info = obj.speciality
            obj.tags = obj.speciality.split(',')
          })
        } catch (error) {
          console.log(error)
        }
        if (merge) {
          this.coachList = this.coachList.concat(res.pageList.list)
        } else {
          this.coachList = res.pageList.list
        }
        console.log('coachList', this.coachList)
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
      this.curPageNumber++
      const data = {
        pageSize: this.pageSize,
        pageNumber: this.curPageNumber,
        cityId: wx.getStorageSync('curCity').id || ''
      }
      this._getCoachList(data, true)
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
  .noMore{
    text-align: center;
    font-size: 24px;
    background: #fff;
    line-height: 2.0;
  }
}

</style>

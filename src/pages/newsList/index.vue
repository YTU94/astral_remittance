<template>
  <div class="mews-list">
    <div class="top-banner" >
      <p class="hot">热门推荐</p>
      <swiper-banner></swiper-banner>
    </div>
    <div class="list">
      <venue-item v-for="(obj, index) in articleList" :key="index" :venueItem="obj" @guideTo="toNewsInfo"></venue-item>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'

import swiperBanner from '@/components/swiper-banner'
import venueItem from '@/components/list/venueItem'

export default {
  components: {
    swiperBanner,
    venueItem
  },
  data () {
    return {
      articleList: [
        {
          imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          name: 'title',
          address: 'asd',
          distance: '2018-10-12'
        }
      ],
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
    toNewsInfo (obj) {
      wx.navigateTo({
        url: `../newsInfo/main?id=${obj.id}`
      })
    },
    init () {
      const data = {
        pageSize: 10,
        pageNumber: 1
      }
      this._getArticleList(data)
    },
    _getArticleList (data, merge) {
      this.$http.article.getArticleList(data).then(res => {
        console.log(res)
        res.pageList.list.forEach(e => {
          e.name = e.title
          e.isHotArt = e.isHot
          e.distance = formatTime(e.createdTime)
        })
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
      this._getArticleList(data, true)
    } else {
      this.noMore = true
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

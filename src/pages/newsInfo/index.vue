<template>
  <div class="mews-info">
    <p class="info-title">{{newsInfo.title}}</p>
    <div class="line-msg">
      <span class="info-user">{{newsInfo.creator || 'admin'}}</span>
      &nbsp;&nbsp;
      <span class="info-date">{{newsInfo.createdTime}}</span>
    </div>

    <div class="info-img">
      <img :src="newsInfo.imgUrl" alt="" mode="widthFix">
    </div>
    <!-- <div class="info-msg">{{newsInfo.cosntent}}</div> -->
    <!-- content -->
    <wxParse :content="newsInfo.content" @preview="preview" @navigate="navigate" />
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
import { formatTime } from '@/utils/index'

export default {
  components: {
    wxParse
  },
  data () {
    return {
      id: '',
      newsInfo: {},
      venueList: [
        {imgUrl: '', name: 'title', address: 'asd', distance: '4444'}
      ],
      hContent: ''
    }
  },
  beforeMount () {
    this.id = this.$mp.query.id
  },
  mounted () {
    this.init()
    // this.hContent = '<h2>title1</h2><blockquote><p>...1234</p ></blockquote><hr /><h2>title2</h2><p><img src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="" />'
  },
  methods: {
    init () {
      this._getNewsInfo()
    },
    preview () {},
    navigate () {},
    _getNewsInfo () {
      this.$http.article.findArticle({ id: this.id }).then(res => {
        this.newsInfo = res.vo
        if (this.newsInfo.createdTime) {
          this.newsInfo.createdTime = formatTime(this.newsInfo.createdTime, true)
        }
      })
    }
  }
}
</script>

<style lang="less">
@import url("~mpvue-wxparse/src/wxParse.css");

.mews-info{
  padding: 40px 20px;
  .info-title{
    font-size: 48px;
    color: #000;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .line-msg{
    padding: 30px 0;
    .info-user{
      font-size: 24px;
      color:#2d8cf0;
    }
    .info-date{
      font-size: 24px;
      color: #777;
    }
  }
  .info-img{
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    overflow: hidden;
    img{
      width: 100%;
      height: auto;
    }
  }
  .info-text{
    font-size: 28px;
    color: #1a1a1a;
  }
}
</style>

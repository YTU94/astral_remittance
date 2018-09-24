<template>
  <div class="mews-info">
    <h1>{{newsInfo.title}}</h1>
    <div class="line-msg">
      <span class="info-user">{{newsInfo.user}}</span>
      <span class="info-date">{{newsInfo.date}}</span>
    </div>

    <div class="info-img">
      <img src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
    </div>

    <div class="info-msg">{{newsInfo.text}}</div>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      newsInfo: {},
      venueList: [
        {imgUrl: '', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'}
      ]
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.newsInfo = this._getNewsInfo()
    },
    _getNewsInfo () {
      return {
        title: '他曾远赴边疆山东省反倒是水电费水电费第三方第三方第三方递四方速递，撒打撒打算的 ',
        user: '渣渣辉',
        date: '10-10',
        text: 'qwewq'
      }
    }
  }
}
</script>

<style lang="less">
.mews-info{
  padding: 40px 20px;
  .line-msg{
    padding: 30px 0;
    .info-user{
      font-size: 28px;
      color: blue;
    }
    .info-date{
      font-size: 28px;
      color: #777;
    }
  }
  .info-img{
    width: 100%;
    height: 200px;
    border: 1px solid red;
    margin-bottom: 30px;
    overflow: hidden;
  }
  .info-text{
    font-size: 28px;
    color: #1a1a1a;
  }
}
</style>

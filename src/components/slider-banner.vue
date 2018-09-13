<template>
  <div class="slider-banner">

    <!-- title -->
    <div class="slider-banner__title">
        <div class="title-msg">热门推荐</div>
        <div class="title-text">全部</div>
    </div>
    <!-- slide bannber -->

    <scroll-view class="slider-banner__slider" scroll-x="true" style="width: 100%; height:200px; white-space:nowrap;">
      <view class="slider-item" v-for="(item, index) in imgUrls" :key="index">
        <img class="slider-item__img" :src="item.imgUrl" v-bind:style="{width: imgWidth + 'px', height: imgHeight + 'px'}">
        <!-- <img class="slider-item__img" :src="item.imgUrl" :width="imgWidth + 'rpx'" :height="imgHeight + 'rpx'"> -->
        <p class="slider-item__msgOne">{{item.name1}}</p>
        <p class="slider-item__msgTwo">{{item.name2}}</p>
      </view>
    </scroll-view>
    
  </div>
</template>

<script>
export default {
  props: {
    text: '',
    imgWidth: {
      default: 100
    },
    imgHeight: {
      default: 100
    }
  },
  data () {
    return {
      imgUrls: [
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name1: 'name1', name2: 'name2'},
        {imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', name1: 'name1', name2: 'name2'},
        {imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', name1: 'name1', name2: 'name2'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name1: 'name1', name2: 'name2'},
        {imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', name1: 'name1', name2: 'name2'},
        {imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', name1: 'name1', name2: 'name2'}
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      // slider
      toView: 'red',
      scrollTop: 100,
      order: ['red', 'yellow', 'blue', 'green', 'red']
    }
  },
  methods: {
    upper (e) {
      console.log(e)
    },
    lower (e) {
      console.log(e)
    },
    scroll (e) {
      console.log(e)
    },
    tap (e) {
      for (var i = 0; i < this.order.length; ++i) {
        if (this.order[i] === this.toView) {
          this.toView = this.order[i + 1]
          break
        }
      }
    },
    tapMove (e) {
      this.scrollTop = this.scrollTop + 10
    }
  }
}
</script>

<style lang="less">

.slider-banner{
  position: relative;
  width: 100%;
  height: auto;
  padding: 0 25px;
  background: #fff;
  box-sizing: border-box;
  .slider-banner__title{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    .title-msg{
      color: #000000;
      font-size: 36px;
    }
    .title-text{
      color: #363636;
      font-size: 24px;
    }
  }
  .slider-banner__slider{
    .slider-item{
      display: inline-block;
      width: auto;
      margin: 0 10px;
      &__img{
        border-radius: 10px;
      }
      &__msgOne{
        color: #000000;
        font-size: 26px;
        margin-top: 10px;
      }
      &__msgTwo{
        color: #ccc;
        font-size: 24px;
      }
    }
  }
}
</style>
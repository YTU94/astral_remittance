<template>
  <div class="slider-banner">

    <!-- title -->
    <div class="slider-banner__title">
        <div class="title-msg">1</div>
        <div class="title-text">2</div>
    </div>
    <!-- slide bannber -->

    <scroll-view class="slider-banner__slider" scroll-x="true" style="width: 100%; height:200px; white-space:nowrap;">
      <view class="slider-item" v-for="(item, index) in imgUrls" :key="index">
        <img class="slider-item__img" :src="item.imgUrl" >
        <h1>{{item.name1}}</h1>
        <h1>{{item.name2}}</h1>
      </view>
    </scroll-view>
    
  </div>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      imgUrls: [
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
  // width: 100%;
  height: auto;
  padding: 0;

  .slider-banner__slider{
    .slider-item{
      display: inline-block;
      width: 500px;
      &__img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
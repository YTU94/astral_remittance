<template>
  <div class="slider-banner">

    <!-- title -->
    <div class="slider-banner__title">
        <div class="title-msg">热门推荐</div>
        <div class="title-text" @click="guideTo">全部门店</div>
    </div>
    <!-- slide bannber -->
    <scroll-view  class="slider-banner__slider" scroll-x="true">
      <view v-if="sliderList" class="slider-item" v-for="(item, index) in sliderList" :key="index">
        <img class="slider-item__img" :lazy-load="true" :src="item.imgUrl" alt="图片拍摄中" v-bind:style="{width: imgWidth + 'px', height: imgHeight + 'px'}">
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
    },
    sliderList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
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
    },
    guideTo () {
      this.$emit('guideTo', {})
    }
  }
}
</script>

<style lang="less">
@import '../assets/style/variable.less';

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
    padding: 25px 0;
    .title-msg{
      color: #000;
      font-size: 32px;
    }
    .title-text{
      color: #999999;
      font-size: 24px;
    }
  }
  .slider-banner__slider{
    width: 100%;
    height: auto; 
    white-space:nowrap;
    margin: 0 -10px;
    .slider-item{
      display: inline-block;
      width: auto;
      margin: 0 10px;
      &__img{
        border-radius: 10px;
      }
      &__msgOne{
        color: #333333;
        font-size: 24px;
        margin-top: 10px;
      }
      &__msgTwo{
        color: #999999;
        font-size: 20px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
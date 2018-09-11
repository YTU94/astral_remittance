<template>
  <div class="swiper-banner">
    <swiper class="swiper-comp" :indicator-dots="indicatorDots"
      :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <img :src="item" class="slide-image" />
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000
    }
  }
}
</script>

<style lang="less">
.swiper-banner{
  position: relative;
  width: 100%;
  height: auto;
  padding: 0;
  .swiper-comp{
    .slide-image{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
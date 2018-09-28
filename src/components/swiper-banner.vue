<template>
    <swiper class="swiper-comp" :indicator-dots="indicatorDots"
      :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
            <div class="for-padding">
              <img :src="item" class="slide-image" />

            </div>
        </swiper-item>
      </block>
    </swiper>
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
  .swiper-comp{
    .for-padding{
      padding: 0 30px;
      width:100%;
      height: 100%;
      box-sizing: border-box;
      .slide-image{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        box-sizing: border-box;
      }
    }
    
  }

</style>
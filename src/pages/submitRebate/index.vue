<template>
  <div class="rebate-order">
    <!-- 选择门店 -->
    <select-bar text="选择门店"></select-bar>
    <!-- name && rebate -->
    <div class="order-line">
      <span class="order-line__name">**闯关</span>
      <span class="order-line__rebate">返利7%</span>
    </div>
    <!-- order price -->
    <div class="order-price">
      <div class="order-price__label"></div>
      <div class="order-price__line">
        <input type="text" class="order-price__priceInput">
        <div class="order-price__close"></div>
      </div>
      <div class="order-price__line">
        <span class="line-label">可用优惠</span>
        <span class="line-c">1张可用></span>
      </div>
      <div class="order-price__line">
        <span class="line-label">上传病症</span>
        <span class="line-c">></span>
      </div>
    </div>

    <!-- img input priview-->
    <div class="img-preview"></div>
    <!-- footer operation -->
    <div class="footer">
      <div class="footer-label">*980</div>
      <div class="footer-btn">确认递交</div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
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
      logs: [],
      venueList: [
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', address: 'asd', distance: '4444'}
      ]
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style lang="less">
@import '../../assets/style/variable.less';
.rebate-order {
  .order-line{
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: blue;
    &__name, &__rebate{
      flex: 0 0 auto;
    }
    &__name{
      color: @font-color-black;
      font-size: 36px;
    }
    &__rebate{
      color: red;
      font-size: 28px;
    }
  }
  .order-price{
    position: relative;
    top: 0;
    left: 0;
    padding: 20px;
    box-sizing: border-box;
    &__label{
      color: red;
      font-size: 28px;
    }
    &_line{
      line-height: 1.6;
      border-bottom: 1px solid @border-color;
      position: relative;
      width: 100%;
      .order-line__priceInput{
        font-size: 48px;
        color: @font-color-black;
      }
      .order-line__close, .line-c{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(-50%, 0);
      }
    }
  }
}

</style>

<template>
  <div class="rebate-order">
    <!-- 选择门店 -->
    <!-- <select-bar text="选择门店"></select-bar> -->
    <!-- name && rebate -->
    <div class="order-content">
      <div class="order-line order-line__select">
        <span class="order-line__name ">选择门店</span>
        <!-- <span class="order-line__rebate">返利7%</span> -->
      </div>
      <div class="order-line">
        <span class="order-line__name">阿斯达所多</span>
        <!-- <span class="order-line__rebate">返利7%</span> -->
      </div>
    </div>
    
    <!-- order price -->
    <div class="order-content">
      <div class="order-line">
        <span class="order-line__name">返利</span>
        <span class="order-line__rebate color-gold">7%</span>
      </div>
      
      <div class="order-line">
        <span class="order-line__name">可用优惠</span>
        <span class="order-line__rebate">1张可用></span>
      </div>
      <div class="order-line">
        <div class="order-line__name">消费金额</div>
        <div class="order-line__rebate">
          <input type="text" class="line-priceInput" style="text-align:right;" placeholder="请输入金额">
          <div class="line-close"></div>
        </div>
      </div>
    </div>
    

    <!-- img input priview-->
    <div class="order-content">
      <div class="order-line">
        <span class="order-line__name">上传病症</span>
      </div>
      <div class="order-line">
        <div class="order-line__img"></div>
      </div>
    </div>
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
  width: 100%;
  height: 100%;
  background-color: rgba(239,242,245,1);
  .order-content{
    background-color: #fff;
    padding-left: 40px;
    margin-bottom: 20px;
    .order-line{
      position: relative;
      top: 0;
      left: 0;
      display: flex;
      height: 100px;
      color: #333333;
      padding-right: 40px;
      font-size: 30px;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid @border-color;
      &__name, &__rebate{
        flex: 0 0 auto;
        font-size: inherit;
        color: inherit;
      }
      .color-gold{
        color: #ED5826;
      }
      &__select{
        height: 70px;
        font-size: 24px;
        color: #666666;
      }
      &_img{
        width: 300px;
        height: 175px;
        border: 1px solid red;
        position: relative;
        top: 0;
        margin: 0 auto;
      }
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
    &__line{
      line-height: 1.6;
      border-bottom: 1px solid @border-color;
      position: relative;
      width: 100%;
      height: 90px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .line-priceInput{
        flex: 1;
        font-size: 36px;
        text-align: right;
        color: @font-color-black;
      }
      .line-close{
        flex: 0 0 auto;
        border: 1px solid RED;
        width: 16px;
        height: 16px;
      }
      .line-lable, .line-c{
        flex: 0 0 auto;
      }
    }
  }

  

  .footer{
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 90px;
    align-items: center;
    justify-content: center;
    .footer-label{
      flex: 1;
      background: blue;
      color: red;
      height: inherit;
      display: flex;
      align-items: center;
    }
    .footer-btn{
      flex: 0 0 auto;
      height: inherit;

      padding: 0px 20px;
      background: green;
      color: #fff;
      display: flex;
      align-items: center;
    }
  }
}

</style>

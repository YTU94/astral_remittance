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
        <span class="order-line__name">{{store.name}}</span>
        <!-- <span class="order-line__rebate">返利7%</span> -->
      </div>
    </div>
    
    <!-- order price -->
    <div class="order-content">
      <div class="order-line">
        <span class="order-line__name">返利</span>
        <span class="order-line__rebate color-gold">{{store.discount}}%</span>
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
      <div class="order-line line-height-auto" style="height:auto;">
        <img v-if="imgUrl" :src="imgUrl" alt="" class="order-line__img" @click="selectImg">

        <div v-else class="order-line__img"  @click="selectImg">
          选择图片
        </div>
      </div>
    </div>
    <!-- footer operation -->
    <div class="footer">
      <div class="footer-label">¥980</div>
      <div class="footer-btn">确认递交</div>
    </div>
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'
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
      store: {
        id: '',
        name: '',
        discount: ''
      },
      imgUrl: null,
      logs: []
    }
  },
  created () {
    // const logs = (wx.getStorageSync('logs') || [])
    // this.logs = logs.map(log => formatTime(new Date(log)))
  },
  beforeMount () {
    this.store.id = this.$mp.query.id
    this.store.name = this.$mp.query.name
    this.store.discount = this.$mp.query.id
  },
  mounted () {
    console.log(this.store, 'store')
  },
  methods: {
    selectImg () {
      let that = this
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          that.imgUrl = tempFilePaths[0]
          console.log('tempFilePaths', tempFilePaths)
        }
      })
    }
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
      .line-height-auto{
        height: auto!important;
      }
      &__select{
        height: 70px;
        font-size: 24px;
        color: #666666;
      }
      &__img{
        width: 100%;
        height: 334px;
        line-height: 334px;
        border: 1px solid red;
        position: relative;
        top: 0;
        text-align: center;
        margin: 30px auto 40px;
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
      background: #333333;
      color: #fff;
      height: inherit;
      display: flex;
      align-items: center;
      padding-left: 40px;
    }
    .footer-btn{
      flex: 0 0 auto;
      height: inherit;
      padding: 0px 40px;
      background: #2BC68C;
      color: #fff;
      display: flex;
      align-items: center;
      line-height: 1;
    }
  }
}

</style>

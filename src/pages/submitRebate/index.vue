<template>
  <div class="rebate-order">
    <!-- 选择门店 -->
    <!-- <select-bar text="选择门店"></select-bar> -->

    <!-- name && rebate -->
    <div class="order-content">
      <div class="order-line order-line__select">
        <span class="order-line__name ">选择门店</span>
      </div>
      <div class="order-line">
        <span class="order-line__name">{{store.name}}</span>
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
        <span class="order-line__rebate coupon-canUesd" v-if="curSelectCoupon && curSelectCoupon.type === 'FULL_REDUCTION' && curSelectCoupon.contentList && curSelectCoupon.contentList.length > 0" @click="showCouponModel=!showCouponModel">
          满{{curSelectCoupon.contentList[0]}}减{{curSelectCoupon.contentList[1]}}
        </span>
        <span class="order-line__rebate coupon-canUesd" v-else-if="curSelectCoupon && curSelectCoupon.type === 'RATE' && curSelectCoupon.content" @click="showCouponModel=!showCouponModel">
          {{curSelectCoupon.content}}%
        </span>
        <span v-else class="order-line__rebate coupon-canUesd" @click="showCouponModel=!showCouponModel">
          <img class="order-line__rebate-icon" src="../../assets/img/coupon-icon.png" alt="" mode="widthFix">&nbsp;{{couponList.length}}张可用
        </span>
      </div>
      
      
      <div class="order-line">
        <div class="order-line__name">消费金额</div>
        <div class="order-line__rebate">
          <input type="digit" class="line-priceInput" @input="inputPrice" style="text-align:right;" v-model="consumeMoney" placeholder="请输入金额" auto-focus/>
          <!-- <input type="text"  @input="inputPrice"  placeholder=""> -->
          <!-- <div class="line-close"></div> -->
        </div>
      </div>
    </div>
    
    <!-- img input priview-->
    <div class="order-content">
      <div class="order-line">
        <span class="order-line__name">上传凭证</span>
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
      <div class="footer-label">¥{{returnMoney}}</div>
      <div class="footer-btn" @click="submitRebate">确认递交</div>
    </div>
    <!-- coupon model -->
    <div class="blank-model" v-show="showCouponModel">
      <div class="model-close__icon" @click="showCouponModel = false">
        <img class="close-icon"  src="../../assets/img/close-icon.png" alt="" mode="widthFix">
      </div>
      <coupon-item :couponItem="item.couponVo" v-if="item" v-for="(item, index) in couponList" :key="index" @operateCoupons="operateCoupons"></coupon-item>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import selectBar from '@/components/base/selectBar'
import swiperBanner from '@/components/swiper-banner'
import sliderBanner from '@/components/slider-banner'
import venueItem from '@/components/list/venueItem'
import couponItem from '@/components/list/couponItem'

export default {
  components: {
    selectBar,
    swiperBanner,
    sliderBanner,
    venueItem,
    couponItem
  },

  data () {
    return {
      showCouponModel: false,
      store: {
        id: '',
        name: '',
        discount: '',
        attachment: '' // 附件 img
      },
      consumeMoney: '200', // 消费金额
      imgUrl: null,
      couponList: [],
      curSelectCoupon: null // 当前选中优惠
    }
  },
  computed: {
    returnMoney () {
      if (this.curSelectCoupon) {
        // 满减
        if (this.curSelectCoupon.contentList && this.consumeMoney) {
          if (parseFloat(this.consumeMoney) >= parseFloat(this.curSelectCoupon.contentList[0])) {
            return (parseFloat(this.consumeMoney) - parseInt(this.curSelectCoupon.contentList[1])) * parseFloat(this.store.discount) / 100 + parseInt(this.curSelectCoupon.contentList[1])
          } else {
            return parseFloat(this.consumeMoney) * parseFloat(this.store.discount) / 100
          }
        }
        // 折扣
        if (this.curSelectCoupon.content && this.consumeMoney) {
          return (parseFloat(this.consumeMoney) - parseFloat(this.consumeMoney) * parseInt(this.curSelectCoupon.content) / 100) * parseFloat(this.store.discount) / 100 + parseFloat(this.consumeMoney) * parseFloat(this.curSelectCoupon.content) / 100
        }
      } else {
        return parseFloat(this.consumeMoney) * parseFloat(this.store.discount) / 100 || 0
      }
    }
  },
  created () {
    // const logs = (wx.getStorageSync('logs') || [])
    // this.logs = logs.map(log => formatTime(new Date(log)))
  },
  beforeMount () {
    this.store.id = this.$mp.query.id
    this.store.name = this.$mp.query.name
    this.store.discount = this.$mp.query.discount
  },
  mounted () {
    console.log(this.store, 'store')
  },
  onShow () {
    this._getClientCouponList()
  },
  methods: {
    inputPrice (v) {
      console.log(v.target.value, this.returnMoney)
      this.checkConpon(v.target.value)
    },
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
          wx.uploadFile({
            url: 'https://xthapi-prod.isagr.com/rest/rebate/weChat/uploadImage', // 仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              imgType: 'rebate' // store, coach, rebate, level, default
            },
            // header: {
            //   'third-session': wx.getStoregeSync('thirdSession')
            // },
            success (res) {
              const data = res.data
              // do something
              that.store.attachment = JSON.parse(data).vo
              console.log('图片放回地址', that.store.attachment)
            }
          })
        }
      })
    },
    submitRebate () {
      if (!this.consumeMoney) {
        wx.showToast({
          title: '请输入消费金额',
          icon: 'none',
          mask: true
        })
        return false
      }
      // if (!this.store.attachment) {
      //   wx.showToast({
      //     title: '请上传凭证图片',
      //     icon: 'none',
      //     mask: true
      //   })
      //   return false
      // }
      const id = this.curSelectCoupon ? this.curSelectCoupon.id : ''
      this._submitRebate(this.store.id, id, this.consumeMoney, this.returnMoney, this.store.attachment)
    },
    operateCoupons (obj) {
      console.log('操作 coupon', obj)
      this.showCouponModel = false
      this.curSelectCoupon = obj
    },
    _uploadImage (imgUrl) {
      this.$http.rebate.uploadImage({imgUrl}).then(res => {
        console.log(res)
      })
    },
    // 获取用户的优惠卷
    _getClientCouponList () {
      const data = {
        isUsed: false,
        available: true
      }
      this.$http.coupon.getClientCouponList(data).then(res => {
        this.couponList = res.pageList.list
        res.pageList.list.map(e => {
          if (e.hasOwnProperty('couponVo')) {
            e.couponVo.eTime = formatTime(e.couponVo.effectTime)
            e.couponVo.operation = '使用'
          }
        })
      })
    },
    // 提交返利
    _submitRebate (storeId, couponId, consumeMoney, returnMoney, attachment) {
      const data = {
        storeId,
        couponId,
        consumeMoney,
        returnMoney,
        attachment
      }
      this.$http.rebate.submitRebate(data).then(res => {
        console.log(res)
        wx.showToast({
          title: '提交成功',
          icon: 'success', // loading
          duration: 1500,
          mask: true
        })
        wx.switchTab({
          url: '../tabBar/index/main'
        })
      })
    },
    // 计算优惠券后的金额
    checkConpon (v) {}
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
        &-icon{
          width: 24px;
          height: auto;
          position: relative;
          top: 2px;
        }
      }
      .color-gold{
        color: #ED5826;
      }
      .coupon-canUesd{
        background: linear-gradient(to right, red, #ED5826);
        color: #fff;
        font-size: 24px;
        padding: 5px 10px;
        border-radius: 5px;
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
        border: 1px solid @border-color;
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

  .blank-model{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    background: #fff;
    z-index: 10001;
    padding:50px 30px 30px;
    box-sizing: border-box;
    line-height: 1;
    .model-close__icon{
      position: absolute;
      top: 0px;
      right: 30px;
      padding: 5px 10px;
      width: auto;
      height: auto;
       .close-icon{
        position: relative;
        top: 0;
        left: 0;
        width: 25px;
      }
    }
  }
}

</style>

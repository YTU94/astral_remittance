<template>
  <div class="rebate">
    <!-- swiper -->
    <div class="top-banner" >
      <swiper-banner></swiper-banner>
    </div>
    <!-- 选择门店 -->
    <div class="select-venue">
      <select-bar text="选择门店"></select-bar>
    </div>
    <!-- 门店列表 -->
    <div class="revate-list">
      <div class="revate-item" v-for="(store, index) in storeList" :key="index">
        <div class="item-name textOverflow">{{store.name}}</div>
        <div class="item-offer textOverflow">{{store.discountContentMessage}}</div>
        <div class="item-line">
          <p class="item-address textOverflow">{{store.address}}</p>
          <button v-if="needMobile" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="right-btn" @click="goSubmit(store)">
            拿返利&nbsp;&nbsp;<img class="right-btn__icon" src="../../assets/img/turn-right.png" alt="" mode="widthFix">
          </button>
          <button v-else class="right-btn" @click="goSubmit(store, true)">
            拿返利&nbsp;&nbsp;<img class="right-btn__icon" src="../../assets/img/turn-right.png" alt="" mode="widthFix">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'
import selectBar from '@/components/base/selectBar'
import swiperBanner from '@/components/swiper-banner'
import sliderBanner from '@/components/slider-banner'

export default {
  components: {
    card,
    selectBar,
    swiperBanner,
    sliderBanner
  },

  data () {
    return {
      logs: [],
      storeList: [],
      // list
      total: 0,
      pageSize: 5,
      curPageNumber: 1,
      noMore: false
    }
  },
  computed: {
    needMobile () {
      if (wx.getStorageSync('userInfo')) {
        if (wx.getStorageSync('userInfo').mobile) {
          return false
        } else {
          return true
        }
      } else {
        return true
      }
    }
  },
  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  },
  mounted () {
    this.init()
  },
  methods: {
    goSubmit (store, navigate) {
      this.curStore = store
      if (navigate) {
        wx.redirectTo({
          url: `./../submitRebate/main?id=${this.curStore.id}&name=${this.curStore.name}&discount=${this.curStore.discountContent}`
        })
      }
    },
    init () {
      const data = {
        pageSize: 4,
        pageNumber: 1,
        cityId: wx.getStorageSync('curCity').id || ''
      }
      this._getStoreList(data)
    },
    getPhoneNumber (e) {
      const data = {
        encryptedData: e.mp.detail.encryptedData,
        iv: e.mp.detail.iv
      }
      this.$http.user.getPhoneNumber(data).then(res => {
        wx.redirectTo({
          url: `./../submitRebate/main?id=${this.curStore.id}&name=${this.curStore.name}&discount=${this.curStore.discountContent}`
        })
      })
    },
    _getStoreList (data, merge) {
      this.$http.store.getStoreList(data).then(res => {
        this.total = res.pageList.count
        if (merge) {
          this.storeList = this.storeList.concact(res.pageList.list)
        } else {
          this.storeList = res.pageList.list
        }
      })
    }
  },
  onReachBottom (e) {
    if (this.checkLoadmore()) {
      const data = {
        pageSize: this.pageSize,
        pageNumber: this.curPageNumber + 1,
        cityId: wx.getStorageSync('curCity').id || ''
      }
      this._getStoreList(data, true)
    } else {
      this.noMore = true
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/style/variable.less';

.rebate{
  background-color: @bg-color;
  .top-banner{
    background: #fff;
    padding-bottom: 30px;
    margin-bottom: 20px;
  }
  .select-venue{
    margin-top: 20px;
    padding: 17px 30px;
    border: 1px solid @border-color;
    background-color: #fff;
  }
  .revate-list{
    position: relative;
    top:0;
    left: 0;
    padding-left: 30px;
    box-sizing: border-box;
    background-color: #fff;
    .revate-item{
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      padding: 38px 0 29px;
      border-bottom: 1px solid @border-color;
      .item-name{
        color: #333333;
        font-size: 30px;
        padding-right: 30px;
        box-sizing: border-box;
      }
      .item-offer{
        color: #ED5826;
        font-size: 24px;
        padding-right: 30px;
        box-sizing: border-box;
      }
      .item-line{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        .item-address{
          flex: 1 1 1;
          color: @font-color-gray;
          font-size: 24px;
          margin-top: 32px;
          padding-right: 30px;
          box-sizing: border-box;
        }
        .right-btn{
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          height: 50px;
          line-height: 50px;
          padding: 0 25px;
          margin-right: 30px;
          font-size: 24px;
          color: #fff;
          background-color: #2BC68C;
          border-radius: 25px;
          border: 0;
          &__icon{
            width: 24px;
            height: auto;
            background: #fff;
            border-radius: 12px;
            position: relative;
            flex: 0 0 auto;
          }
        }
      }
    }
  }
}
</style>

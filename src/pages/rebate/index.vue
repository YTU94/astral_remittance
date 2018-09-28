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
      <div class="revate-item">
        <div class="item-name textOverflow">店1111111111111111111111111111111111111111名</div>
        <div class="item-offer textOverflow">返利111111111111111111111111111111111111111111111117%</div>
        <div class="item-line">
          <p class="item-address textOverflow">dizh1111111111111111111111111111111111111111i</p>
          <div class="right-btn" @click="goSubmit">拿返利&nbsp;&nbsp;<span>></span></div>
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
    // const data = {}
    // this.$http.company.getCompanyList(data).then(res => {
    //   console.log(res)
    // })
  },
  mounted () {
    this.init()
  },
  methods: {
    goSubmit () {
      wx.navigateTo({
        url: './../submitRebate/main'
      })
    },
    init () {
      this.$http.store.getStoreList({}).then(res => {
        this.sliderList = res.pageList.list
        this.sliderList.forEach(obj => {
          obj.imgUrl = 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
          obj.name1 = obj.name
          obj.name2 = obj.address
        })
      })
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
          height: 50px;
          line-height: 50px;
          padding: 0 20px;
          margin-right: 30px;
          font-size: 24px;
          color: #fff;
          background-color: #2BC68C;
          border-radius: 25px;
          span{
            display: inline-block;
            width: 24px;
            height: 24px;
            line-height: 1;
            text-align: center;
            color: #2BC68C;
            height: auto;
            border-radius: 12px;
            background-color: #fff;
          }
        }
      }
    }
  }
}
</style>

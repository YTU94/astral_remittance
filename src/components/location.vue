<template>
<div>
  <div class="location">
    <div class="location-body">
      <picker class="location-picker" mode="region" @change="bindRegionChange" :value="region" :custom-item="customItem">
        <img class="picker-icon" src="" alt="">
        <span class="picker-msg">
          {{region[1]}}
        </span>
      </picker>
      <input type="text" class="location-search" placeholder="搜索位置">
    </div>
  </div>
  <!-- seach result -->
  <div class="search-res" v-show="showSeachres">
    <div class="res-line">123</div>
    <div class="res-line">123</div>
  </div>
</div>
  
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      region: ['广东省', '广州市', '海珠区'],
      customItem: '全部',
      showSeachres: false
    }
  },
  mounted () {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log('经纬度', latitude, longitude)
      }
    })
    this.getCityList()
  },
  methods: {
    bindRegionChange (e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.region = e.mp.detail.value
    },
    getCityList () {
      this.$http.cities.getCityList({}).then(res => {
        console.log('cities', res)
      })
    }
  }
}
</script>

<style lang="less">
.location {
  position: relative;
  width: 100%;
  height: 84px;
  padding: 10px;
  box-sizing: border-box;
  &-body{
    width: 100%;
    height: 64px;
    background-color: rgb(242, 244, 247);
    border-radius: 32px;
    display: flex;
    align-items: center;
    font-size: 26px;
    .location-picker{
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      position: relative;
      justify-content: space-between;
      align-items: center;
      .picker-icon{
        display: inline-block;
        flex: 0 0 auto;
        width: 26px;
        height: 26px;
        border: 1px solid red;
        margin:0 20px;
      }
      .picker-msg{
        display: inline-block;
        flex: 0 0 auto;
        border-right: 1px solid #ccc;
        padding-right: 20px;
        margin-right: 20px;
      }
    }
    .location-search{
      display: inline-block;
      flex: 1 1 auto;
    }
  }
}
.search-res{
    position: relative;
    background-color: #fff;
    border-top: 1px solid #eee;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .2);
    .res-line{
      position: relative;
      border-bottom: 1px solid #eee;
      padding: 20px;
    }
  }
</style>
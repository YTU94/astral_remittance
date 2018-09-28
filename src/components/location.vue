<template>
<div>
  <div class="location">
    <span @click="showSeachres = true">
      <!-- <img src="" alt="logo" > -->
      {{curCity}}
    </span>
    <span v-if="showSeachres" @click="showSeachres = false">close</span>
  </div>
  <!-- seach result -->
  <div class="search-res" v-show="showSeachres">
    <div class="res-line" v-for="(city, index) in citiesList" :key="index" @click="selectCity(city)">{{city.name}}</div>
  </div>
</div>
  
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      curCity: '杭州',
      citiesList: [],
      customItem: '全部',
      showSeachres: false
    }
  },
  mounted () {
    let that = this
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log('经纬度', latitude, longitude)
        that._findCity()
      }
    })
    this.getCityList()
  },
  methods: {
    bindRegionChange (e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.region = e.mp.detail.value
    },
    selectCity (city) {
      this.curCity = city.name
      this.showSeachres = false
      wx.setStorageSync('curCity', {name: city.name, id: city.id})
    },
    getCityList () {
      this.$http.cities.getCityList({}).then(res => {
        this.citiesList = res.pageList.list
      })
    },
    _findCity () {
      this.$http.cities.findCity({}).then(res => {
        this.citiesList = res.pageList.list
      })
    }
  }
}
</script>

<style lang="less">
.location {
  display: flex;
  position: relative;
  width: 100%;
  height: 54px;
  padding: 0;
  box-sizing: border-box;
  font-size: 24px;
  justify-content: space-between;
}
.search-res{
    position: absolute;
    top: 54px;
    left: 0;
    padding-left: 30px;
    width: 100%;
    z-index: 10001;
    background-color: #fff;
    border-top: 1px solid #eee;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .2);
    .res-line{
      font-size: 24px;
      position: relative;
      border-bottom: 1px solid #eee;
      padding: 20px 0;
    }
  }
</style>
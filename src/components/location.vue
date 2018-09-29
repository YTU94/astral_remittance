<template>
<div>
  <div class="location">
    <span class="location-msg" @click="showSeachres = !showSeachres">
      {{curCity}}
      <img class="triangle-icon" src="../assets/img/triangle-icon.png" mode="widthFix"   alt="logo" >
    </span>
    <span class="location-close" v-if="showSeachres" @click="showSeachres = false">
      <img class="close-icon" src="../assets/img/close-icon.png" mode="widthFix"   alt="logo" >
    </span>
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
    // let that = this
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log('经纬度', latitude, longitude)
        // that._findCity(longitude, latitude)
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
    _findCity (longitude, latitude) {
      let that = this
      const data = {
        longitude,
        latitude
      }
      this.$http.cities.findCity(data).then(res => {
        if (res.vo.name) {
          wx.showModal({
            title: '城市定位',
            content: `当前城市定位为${res.vo.name}，是否需要切换至该城市`,
            success: function () {
              that.curCity = res.vo.name
            },
            fail: function (err) {
              console.log(err)
            }
          })
        }
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
  .location-msg{
    .triangle-icon{
      width: 12px;
      position: relative;
      top: -4px;
    }
  }
  .location-close{
      padding: 0 0 0 10px;
    .close-icon{
      width: 18px;
    }
  }
  
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
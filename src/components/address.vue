<template>
  <div>
    <picker mode="region" @change="bindRegionChange" :value="region" :custom-item="customItem">
    <view class="picker">
      当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
    </view>
  </picker>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      region: ['广东省', '广州市', '海珠区'],
      customItem: '全部'
    }
  },
  mounted () {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(latitude, longitude)
      }
    })
  },
  methods: {
    bindRegionChange (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        region: e.detail.value
      })
    }
  }
}
</script>

<style lang="less">
.card {
  padding: 10px;
}
</style>
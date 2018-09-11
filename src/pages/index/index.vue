<template>
  <div class="home" @click="clickHandle('test click', $event)">
    <!-- 定位 -->
    <location text="123"></location>
    <!-- slide banner -->
    <div class="main-list">
      <div class="list-item">
        <div class="for-bg">
          <p class="title">找场馆</p>
          <p class="content"></p>
        </div>
        
      </div>
      <div class="list-item">
        <p class="title">找教练</p>
        <p class="content"></p>
      </div>
      <div class="list-item">
        <p class="title">找优惠</p>
        <p class="content"></p>
      </div>
      <div class="list-item">
        <p class="title">拿返利</p>
        <p class="content"></p>
      </div>
    </div>
    <!-- 热门推荐 -->

  </div>
</template>

<script>
import card from '@/components/card'
import location from '@/components/address'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card,
    location
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>

.home {
  position: relative;
  .main-list{
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    .list-item{
      flex: 0 0 50%;
      border: 1px solid red;
      box-sizing: border-box;
      padding: 10px;
      .for-bg{
        border: 1px solid blue;
      }
    }
  }
}
</style>

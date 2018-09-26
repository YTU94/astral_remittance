<template>
  <div class="venue-item" @click="guideTo">
    <div class="left">
      <img :src="venueItem.imgUrl" alt="alt" v-bind:style="{width: imgWidth + 'rpx', height: imgHeight + 'rpx'}">
    </div>
    <div class="right">
      <div class="line-name">
        <slot name="title">
          <span class="name-msg">{{venueItem.name}}</span>
          <img v-if="true" class="name-icon" src="" alt="">
        </slot>
      </div>
      <div class="line-address">{{venueItem.address}}</div>
      <div class="line-star"></div>
      <div class="line-distance">
        <slot name="diatance">
          <span class="name-msg">{{venueItem.distance}}</span>
          <img class="name-icon" src="" alt="">
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgWidth: {
      default: 180
    },
    imgHeight: {
      default: 180
    },
    venueItem: {}
  },
  data () {
    return {}
  },
  mounted () {},
  methods: {
    guideTo () {
      this.$emit('guideTo', this.venueItem)
    }
  }
}
</script>

<style lang="less">
@import '../../assets/style/variable.less';

.venue-item {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid @border-color;
  margin-bottom: 20px;
  align-items: stretch;
  .left{
    flex:  0 0 auto;
    font-size: 28px;
    img{
      border-radius: 10px;
    }
  }
  .right{
    flex: 1 1 100%;
    padding-left: 20px;
    box-sizing: border-box;
    position: relative;
    .line-name, .line-distance{
      width: 100%;
      display: flex;
      justify-content: space-between;
      .name-icon{
        width: 16px;
        height: 16px;
        border: 1px solid red;
      }
    }
    .line-name{
      color: #000000;
      font-size: 36px;
      font-weight: bold;      
    }
    .line-address{
      color: @font-color-default;
    }
    .line-star{
      color: yellow;
    }
    .line-distance{
      font-size: 24px;
      color: @font-color-gray;
      position: absolute;
      bottom: 0;
      left: 0;
      padding-left: 20px;
      box-sizing: border-box;
    }
  }
}
</style>
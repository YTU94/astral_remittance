<template>
  <div class="venue-item" @click="guideTo">
    <div class="left">
      <img :src="venueItem.imgUrl" alt="alt" v-bind:style="{width: imgWidth + 'rpx', height: imgHeight + 'rpx'}">
    </div>
    <div class="right">
      <div class="line-name">
        <slot name="title">
          <span class="name-msg">{{venueItem.name}}</span>
          <!-- <img v-if="true" class="name-icon" src="" alt=""> -->
        </slot>
      </div>
      <div class="line-address">{{venueItem.address}}</div>
      <div class="line-star" v-if="venueItem.starList && venueItem.starList > 0 && venueItem.starList < 10">
        <span class="star" v-for="(item, index) in venueItem.starList" :key="index">★</span>
      </div>
      <div class="line-distance">
        <slot name="distance">
          <span class="hot-tag" v-if="venueItem.isHotArt">热门</span>
          <span class="name-msg">{{venueItem.distance}}<span v-if="venueItem.unit">Km</span></span>
          <!-- <img class="name-icon" src="" alt=""> -->
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
  padding: 30px 0;
  border-bottom: 1px solid @border-color;
  align-items: stretch;
  &:last-child{
    border: 0;
  }
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
      .hot-tag{
        color: #FF3F49;
        font-size: 20px;
        border: 1px solid #FF3F49;
        padding: 0 4px;
        border-radius: 4px;
      }
    }
    .line-name{
      color: #333333;
      font-size: 30px;
      font-weight: bold;
      line-height: 1.6;     
    }
    .line-address{
      font-size: 24px;
      color: #999999;
      line-height: 1.6;     
    }
    .line-star{
      color: #FFC600;
    }
    .line-distance{
      font-size: 20px;
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
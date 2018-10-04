<template>
  <div class="venue-item">
    <div class="left">
      <img :src="coachItem.imgUrl" alt="alt" v-bind:style="{width: imgWidth + 'rpx', height: imgHeight + 'rpx'}">
    </div>
    <div class="right">
      <div class="line-name">
          {{coachItem.name}}
      </div>
      <div class="line-star">
        <span class="star" v-for="(item, index) in coachItem.starLevel" :key="index">★</span>
         / 累计上课{{}}节</div>
      <div class="line-info" v-if="coachItem.speciality">{{coachItem.speciality}}</div>

      <div class="line-tag">
          <span class="tag-item" v-for="(tag, index) in coachItem.tags" :key="index">{{tag}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgWidth: {
      default: 120
    },
    imgHeight: {
      default: 120
    },
    coachItem: {}
  },
  data () {
    return {}
  },
  mounted () {}
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
      border-radius: 90px;
    }
  }
  .right{
    flex: 1 1 100%;
    padding-left: 20px;
    box-sizing: border-box;
    position: relative;
    .line-name{
      color: #333333;
      font-size: 30px;
      font-weight: bold;
      
    }
    
    .line-star{
      color: @font-color-gray;
      font-size: 20px;
      .star{
        color: #FFC600;
      }
    }
    .line-info{
      color: @font-color-default;
      font-size: 24px;
      padding-bottom: 20px;
      margin-bottom: 20px;
    }
    .line-tag{
      font-size: 20px;
      color: @font-color-default;
      position: absolute;
      bottom: 0;
      left: 0;
      padding-left: 20px;
      box-sizing: border-box;
      overflow: hidden;
      white-space: nowrap;
      .tag-item{
        color: #666666;
        background:rgba(239,239,239,1);
        line-height: 1.6;
        padding: 0 10px;
        margin-right: 15px;
        &:last-child{
          margin-right: 0;
        }
      }
    }
  }
}
</style>
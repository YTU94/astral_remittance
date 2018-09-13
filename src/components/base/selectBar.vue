<template>
  <div class="select-bar">
    <div class="left">
      <img src="" alt="alt">
      {{text}}
    </div>
    <div class="right">
      筛选
      <img src="" alt="alt">
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="less">
.select-bar {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left, .right{
    flex:  0 0 auto;
    font-size: 28px;
    img{
      width: 16px;
      height: 16px;
    }
  }
}
</style>
<template>
  <div class="search">
    <input type="text" class="search-input">
    <button class="search-btn">取消</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less">
.search{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  .search-input{
    border: 1px solid #eee;
    flex: 1;
  }
  .search-btn{
    flex: 0 0 auto;
    display: inline-block;
    width: 92rpx;
    margin-left: 20rpx;
    font-size: 20rpx;
    line-height: auto;
  }
}
</style>

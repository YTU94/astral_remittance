<template>
  <div class="search">
    <input type="text" v-model="value" class="search-input" @confirm="confirm">
    <button class="search-btn" @click="cancel">取消</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    confirm (e) {
      this.$emit('confirm', e)
    },
    cancel () {
      this.$emit('cancel', this.value)
    },
    onHide () {
      this.value = ''
    }
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
  padding: 10rpx 20rpx;
  box-sizing: border-box;
  .search-input{
    border: 1px solid #eee;
    flex: 1;
    background: #fff;
    border-radius: 10rpx;
  }
  .search-btn{
    flex: 0 0 auto;
    display: inline-block;
    width: 100rpx;
    margin-left: 20rpx;
    font-size: 20rpx;
  }
}
</style>

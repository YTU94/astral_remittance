<template>
  <div class="blank-model" v-show="!show">
    <div class="close-icon" @click="show = false">X</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    showModel: {
      type: [String, Number, Boolean]
    }
  },
  data () {
    return {
      show: this.showModel
    }
  }
}
</script>

<style lang="less">
.blank-model{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background: #fff;
  z-index: 10001;
}
</style>


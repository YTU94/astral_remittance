<template>
  <div class="blank-model" v-show="showModel">
    <img class="close-icon" @click="closeModel" src="../../assets/img/close-icon.png" alt="" mode="widthFix">
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
  },
  methods: {
    closeModel () {
      this.$emit('closeModel', '')
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
  .close-icon{
    position: absolute;
    top: 30px;
    right: 30px;
    width: 20px;
  }
}
</style>


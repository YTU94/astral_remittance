<template>
  <div class="select-bar">
    <div class="select-bar__left">
      <img class="flag-img" src="../../assets/img/flag.png" alt="alt" mode="widthFix">&nbsp;{{text}}
    </div>
    <div class="select-bar__right" @click="toOPreate">{{operation}}</div>
  </div>
</template>

<script>
export default {
  props: ['text', 'operation'],
  data () {
    return {}
  },
  methods: {
    toOPreate () {
      this.$emit('toOPreate', this.operation)
    }
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
  .select-bar__left, .select-bar__right{
    flex:  0 0 auto;
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #666666;
    .flag-img{
      flex: 0 0 auto;
      width: 20px;
      height: auto;
    }
  }
}
</style>
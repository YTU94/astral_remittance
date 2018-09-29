<template>
  <div class="select-bar">
    <div class="select-bar__left">
      <img class="flag-img" src="../../assets/img/flag.png" alt="alt">&nbsp;{{text}}
    </div>
    <div class="select-bar__right">{{operation}}</div>
  </div>
</template>

<script>
export default {
  props: ['text', 'operation'],
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
  .select-bar__left, .select-bar__right{
    flex:  0 0 auto;
    font-size: 28px;
    line-height: 1;
    .flag-img{
      width: 24px;
      height: 24px;
    }
  }
}
</style>
<template>
  <div class="coupon-list" v-if="couponList.length > 0">

    <coupon-item :couponItem="item.couponVo" v-if="item" v-for="(item, index) in couponList" :key="index">
      {{item.couponVo}}
    </coupon-item>
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'

// SUBMITED("已提交"),
// DONE("已领");
import couponItem from '@/components/list/couponItem'

export default {
  components: {
    couponItem
  },
  data () {
    return {
      couponList: []
    }
  },
  created () {
    console.log('created---------->')
  },
  beforeMount () {
    this.couponList = this.$mp.query.couponList ? JSON.parse(this.$mp.query.couponList) : []
    console.log('created---------->', this.couponList)
  },
  mounted () {
    console.log('mounted---------->')
  },
  onShow () {
    console.log('Onshow---------->')
  },
  methods: {
  }
}
</script>
<style lang="less">
@import '../../../../assets/style/variable.less';
.coupon-list{
  position: relative;
  padding: 0 30px;
  box-sizing: border-box;
  width: 100%;
  height: auto;
}

</style>

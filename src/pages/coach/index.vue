<template>
  <div class="coach">
    <!-- swiper -->
    <swiper-banner></swiper-banner>
    <!-- 选择门店 -->
    <select-bar text="选择门店"></select-bar>
    <!-- coach list -->
    <coach-item v-for="(obj, index) in coachList" :key="index" :coachItem="obj"></coach-item>
    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import selectBar from '@/components/base/selectBar'
import swiperBanner from '@/components/swiper-banner'
import coachItem from '@/components/list/coachItem'

export default {
  components: {
    selectBar,
    coachItem,
    swiperBanner
  },
  data () {
    return {
      coachList: [
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', info: 'asd', tags: ['4444', '4444', '4444']},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', info: 'asd', tags: ['4444', '4444', '4444']},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', info: 'asd', tags: ['4444', '4444', '4444']},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', info: 'asd', tags: ['4444', '4444', '4444']},
        {imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', name: 'title', info: 'asd', tags: ['4444', '4444', '4444']}
      ]
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style>
.coach {
}

</style>

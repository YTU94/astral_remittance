<template>
  <div class="coach-info">

    <div class="info-card">
      <img class="info-card__img" :src="coachInfo.imgUrl">
      <div class="info-card__msg">
        <span class="msg-city" :class="{'isGold': coachInfo.isGold}">{{coachInfo.isGold ? '金牌教练' : '专业教练'}}</span>
        <span class="msg-name">{{coachInfo.name}}</span>
      </div>
    </div>

    <div class="info-msg">
      <div class="msg-line">
        <div class="msg-line__lable">性别</div>
        <div class="msg-line__content">{{coachInfo.gender}}</div>
      </div>
      <div class="msg-line">
        <div class="msg-line__lable">星级</div>
        <div class="msg-line__content">
          <span class="star">{{coachInfo.starLevel}}★</span>
        </div>
      </div>
      <div class="msg-line">
        <div class="msg-line__lable">联系电话</div>
        <div class="msg-line__content">{{coachInfo.phone}}</div>
      </div>
      <div class="msg-line">
        <div class="msg-line__lable">特长</div>
        <div class="msg-line__content">{{coachInfo.speciality}}</div>
      </div>
      <div class="msg-line">
        <div class="msg-line__lable">标签</div>
        <div class="msg-line__content">
          <span class="msg-line__content-tag" v-for="(item, index) in coachInfo.tags" :key="index" >{{item}}</span>
        </div>
      </div>
      <div class="msg-line">
        <div class="msg-line__lable">详细介绍</div>
        <div class="msg-line__content">{{coachInfo.info}}</div>
      </div>
      
    </div>

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
      curCity: '',
      coachInfo: '',
      // list
      total: 0,
      pageSize: 10,
      curPageNumber: 1,
      noMore: false
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  created () {
  },
  mounted () {
    this.curCity = wx.getStorageSync('curCity')
    this.coachInfo = JSON.parse(this.$mp.query.coachInfo)
    this.init()
  },
  methods: {
    init () {
      // const data = {
      //   pageSize: 5,
      //   pageNumber: 1
      // }
      // this._getCoachList(data)
      // this._getArticleList({ pageSize: 3, pageNumber: 1 })
    },
    onReachBottom (e) {
      if (this.checkLoadmore()) {
        const data = {
          pageSize: this.pageSize,
          pageNumber: this.curPageNumber + 1
        }
        this._getCoachList(data, true)
      } else {
        this.noMore = true
      }
    },
    navigateToNews (id) {
      wx.navigateTo({
        url: `../newsInfo/main?id=${id}`
      })
    },
    _getCoachList (data, merge) {
      this.$http.coach.getCoachList(data).then(res => {
        this.total = parseInt(res.pageList.count)
        res.pageList.list.forEach(obj => {
          obj.name1 = obj.name
          obj.name2 = obj.address
          obj.info = 'asdasdasd'
          obj.tags = ['123123', '金牌打手']
        })
        if (merge) {
          this.coachList = this.coachList.concact(res.pageList.list)
        } else {
          this.coachList = res.pageList.list
        }
      })
    },
    _getArticleList (data, merge) {
      this.$http.article.getArticleList(data).then(res => {
        console.log(res)
        if (merge) {
          this.articleList = this.articleList.concact(res.pageList.list)
        } else {
          this.articleList = res.pageList.list
        }
      })
    },
    /*
    * 功能 fun
    */
    checkLoadmore () {
      if (this.pageSize * this.curPageNumber > this.total) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="less">
@import '../../assets/style/variable.less';

.coach-info{
  background-color: @bg-color;
  padding: 0;
  box-sizing: border-box;
  padding-top: 25px; 
  .info-card{
    display: flex;
    padding: 25px;
    margin: 0 25px 25px 25px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow:0px 2px 8px 0px rgba(0,0,0,0.1);
    background-color: #fff;
    &__msg{
      flex: 1;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: flex-end;
      border-radius: 5px;
      .msg-city{
        font-size: 28px;
        color: @font-color-gray;
      }
      .msg-name{
        font-size: 36px;
        color: #FF3F49;
      }
      .isGold{
        color: #FFC600;
      }
    }
    &__img{
      flex: 0 0 auto;
      display: inline-block;
      width: 240px;
      height: 240px;
      border-radius: 120px;
    }
  }
  .info-msg{
    margin-top: 30px;
    background-color: #fff;
    padding:0 25px;
    .msg-line{
      display: flex;
      justify-content: space-between;
      padding: 34px 0;
      border-bottom: 1px solid @border-color;
      font-size: 28px;
      &:last-child{
        border-bottom: 0;
      }
      &__lable{
        flex: 0 0 200px;
      }
      &__content{
        .star{
          color: #FFC600;
        }
        &-tag{
          font-size: 24px;
          background: #eee;
          padding: 5px 8px;
          border-radius: 4px;
          margin-right: 10px;
        }
      }
    }
  }
}

</style>

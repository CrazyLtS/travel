<template>
    <div class="header">
      <div class="header-left">
          <div class="iconfont back-icon">&#xe600;</div>
      </div>
      <div class="header-input">内容</div>
      <router-link to="/city">
      <div class="header-right">
          <span>{{this.currentCity}}</span><span class="iconfont arrow-icon">&#xe602;</span>
      </div>
      </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  props: {
    city: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .header
    display: flex
    height: .86rem
    line-height .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex: 1
      height: .64rem
      margin-top: .12rem
      margin-left .24rem
      padding-left .2rem
      background: #ffffff
      color #ccc
      line-height .64rem
      border-radius: .1rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        font-size .2rem
</style>

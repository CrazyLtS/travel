<template>
    <div class="header">
      <div class="header-left">
          <span class="iconfont back-icon">&#xe6ac;</span>
      </div>
      <div class="header-input">内容</div>
      <div class="header-right">
          <span>城市</span><span class="iconfont arrow-icon">&#xe6a4;</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    display: flex
    height: .86rem
    line-height .86rem
    background: #00bcd4
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
      .arrow-icon
        font-size .4rem
</style>

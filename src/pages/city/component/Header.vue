<template>
    <div class="header">城市选择
      <router-link to="/">
      <div class="iconfont back-icon">&#xe6ac;</div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .header
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #ffffff
    background-color: $bgColor
    font-size: .4rem
    .back-icon
      position: absolute
      width: .64rem
      text-align: center
      font-size: .4rem
      left: 0
      top: 0
      color: #fff
</style>

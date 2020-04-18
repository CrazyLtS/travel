<template>
<div>
    <router-link
    class="header-abs"
    tag="div"
    to="/"
    v-show="showAbs"
    >
        <span class="iconfont back-icon">&#xe600;</span>
    </router-link>
    <div
    class="header-fixed"
    v-show="!showAbs"
    :style="opacityStyle"
    >
        <router-link
        class="iconfont back-icon"
        tag="div"
        to="/"
        >&#xe600;</router-link>
        景点详情
    </div>
</div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScoll () {
      const top = document.documentElement.scrollTop
      if (top > 10) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
        return
      }
      this.showAbs = true
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScoll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScoll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header-abs
  position: absolute
  left: .2rem
  top: .2rem
  width: .6rem
  height: .6rem
  line-height: .6rem
  text-align: center
  border-radius: .4rem
  background: rgba(0, 0, 0, .6)
  .back-icon
    color: #fff
    font-size: .4rem
.header-fixed
  position: fixed
  top: 0
  left: 0
  right: 0
  height: $headerHeight
  line-height: $headerHeight
  overflow: hidden
  text-align: center
  color: #ffffff
  background-color: $bgColor
  font-size: .32rem
  .back-icon
    display: inline-block
    width: .6rem
    height: .6rem
    line-height: .6rem
    margin-top: .13rem
    color: #fff
    font-size: .4rem
    float: left
</style>

<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img :src="bannerImg" class="banner-img">
        <div class="banner-info">
            <div class="banner-title">{{this.sightName}}</div>
            <div class="banner-number">
                <span class="banner-icon iconfont">&#xe6ff;</span>{{this.bannerImgs.length}}
            </div>
        </div>
    </div>
    <common-gallary
    :imgs="imgs"
    v-if="showGallary"
    @handleGallaryClick="handleGallaryClick"
    ></common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    sightName: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false,
      imgs: ['https://img1.qunarzz.com/vs_ceph_vs_tts/dbab2e66-bf6b-4b77-ab09-85adc727ff45.png_r_640x420x95_a3866759.png']
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClick () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      display: flex
      padding-bottom: .12rem
      color: #fff
      background-image: linear-gradient(top, rgba(0,0,0,.1), rgba(0,0,0,8))
      .banner-title
        box-sizing: border-box
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
        ellipsis()
      .banner-number
        padding: 0 .2rem
        height: .4rem
        line-height: .4rem
        border-radius: .2rem
        background: rgba(0,0,0,.8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
          margin-right: .1rem
</style>

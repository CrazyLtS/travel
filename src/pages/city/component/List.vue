<template>
 <div class="list" ref="wrapper">
    <div>
        <div class="area border-one">
                <div class="title">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
        <div class="area border-one">
            <div class="title">热门城市</div>
            <div class="button-list">
                <div
                class="button-wrapper"
                v-for="item of hotcities"
                :key="item.id"
                @click="handleCityClick(item.name)"
                >
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area border-one" v-for="(item, key) of cities" :key="key" :ref="key">
            <div class="title">{{key}}</div>
            <div class="item-list">
                <div class="item border-one"
                v-for="innerItem of item"
                :key="innerItem.id"
                @click="handleCityClick(innerItem.name)"
                >{{innerItem.name}}</div>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotcities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      // 返回首页
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-one
    &::after
      background-color: #ccc
  .list
    position: absolute
    top: 1.58rem
    left: 0
    bottom: 0
    right: 0
    overflow: hidden
  .area
    position: relative
    .title
      line-height: .54rem
      background-color: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      padding: .1rem
      overflow: hidden
      .button-wrapper
        float: left
        width: 33.33%
        .button
            margin: .1rem
            padding: .1rem 0
            text-align: center
            border: .02rem solid #ccc
            border-radius: .06rem
    .item-list
      .item
        position: relative
        line-height: .76rem
        padding-left: .2rem
</style>

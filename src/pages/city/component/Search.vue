<template>
  <div>
    <div class="search">
      <input
       class="search-input"
       type="text"
       placeholder="输入城市名或拼音"
       v-model="keyWord"
         >
    </div>
    <div class="search-content" ref="search" v-show="keyWord">
      <ul>
        <li class="search-item border-one"
        v-for="item of list"
        :key="item.id"
        @click="handleCityClick(item.name)"
        >{{item.name}}
        </li>
        <li class="search-item border-one" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      // 返回首页
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-one
    &::after
      background-color: #ccc
  .search
    height: .72rem
    padding: 0 .1rem
    background-color: $bgColor
    .search-input
        box-sizing: border-box
        width:100%
        height: .62rem
        line-height: .62rem
        padding: 0 .1rem
        text-align: center
        border: none
        border-radius: .1rem
        color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      position: relative
      line-height: .62rem
      padding-left: .2rem
      background-color: #fff
      color: #666
</style>

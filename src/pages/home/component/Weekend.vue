<template>
<div>
  <div class="title">周末去哪</div>
  <ul>
      <li class="item border-one" v-for="item of list" :key="item.id">
          <div class="item-img-wrapper">
              <img class="item-img" :src="item.imgUrl">
          </div>
          <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
          </div>
      </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/variables.styl'
  .border-one
    &::after
      background-color: #ccc
.title
  line-height: .8rem
  background-color: #eee
  text-indent: .2rem
.item
  position: relative
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 45%
    .item-img
      padding: .1rem
   item-info
     padding:.1rem
    .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
    .item-desc
        line-height: .4rem
        color: $darkTextColor
        ellipsis()
</style>

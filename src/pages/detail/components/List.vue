<template>
    <div>
        <div class="item" v-for="(item, index) of list" :key="index">
            <div class="item-title"><span class="itme-title-icon"></span>{{item.title}}</div>
            <div v-if="item.children" class="child-item">
            <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .itme-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: green
    margin-right: .1rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .child-item
    padding: 0 .5rem
</style>

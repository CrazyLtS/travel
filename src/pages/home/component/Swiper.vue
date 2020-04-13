<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.url">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          url: 'http://img1.qunarzz.com/sight/p0/1606/68/68d9a1387d0fb3e090.water.jpg_375x170_c1fcecf1.jpg'
        }, {
          id: '0002',
          url: 'http://img1.qunarzz.com/sight/p0/1606/68/68d9a1387d0fb3e090.water.jpg_375x170_c1fcecf1.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 45.3%
    background-color: #ccc
    .swiper-img
      width: 100%
</style>

<template>
<div>
  <div class="title">热销推荐</div>
  <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
          <div class="item-img-wrapper">
              <img class="item-img" :src="item.imgUrl">
          </div>
          <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
          </div>
      </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        { id: '001',
          imgUrl: 'https://imgs.qunarzz.com/p/p29/201302/28/3d20251a1b60350a93835fbb.jpg_256x160_e8f468b0.jpg',
          desc: '【半自助游】大阪.京都.奈良.富士山.东京自由活动.惠那霞.马笼宿.平等院.温泉深圳出发',
          title: '东京跟团游'
        }, { id: '002',
          imgUrl: 'https://imgs.qunarzz.com/p/p29/201302/28/3d20251a1b60350a93835fbb.jpg_256x160_e8f468b0.jpg',
          desc: '【半自助游】大阪.京都.奈良.富士山.东京自由活动.惠那霞.马笼宿.平等院.温泉深圳出发',
          title: '东京跟团游'
        }, { id: '003',
          imgUrl: 'https://imgs.qunarzz.com/p/p29/201302/28/3d20251a1b60350a93835fbb.jpg_256x160_e8f468b0.jpg',
          desc: '【半自助游】大阪.京都.奈良.富士山.东京自由活动.惠那霞.马笼宿.平等院.温泉深圳出发',
          title: '东京跟团游'
        }, { id: '004',
          imgUrl: 'https://imgs.qunarzz.com/p/p29/201302/28/3d20251a1b60350a93835fbb.jpg_256x160_e8f468b0.jpg',
          desc: '【半自助游】大阪.京都.奈良.富士山.东京自由活动.惠那霞.马笼宿.平等院.温泉深圳出发',
          title: '东京跟团游'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background-color: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display:flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #eee
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background-color: #ff9300
        padding: 0 .2rem
        border: none
        border-radius: .06rem
        color: #fff
</style>

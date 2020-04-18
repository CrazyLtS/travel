<template>
  <div id="app">
    <!-- keep-alive用来缓存ajax内容 -->
    <keep-alive exclude="Detail">
    <!-- 显示的是当前路由地址的内容 -->
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>

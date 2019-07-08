<template>
  <div id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <!-- 通用样式放在compoments中 -->
      <heros-list></heros-list>
  </nav>
  <div class="container-fluid">
    <div class="row">
      <!-- 左边通用样式 -->
      <heros-left></heros-left>
      <!-- 路由对应的页面 -->
        <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script>
import herosList from './components/herosList';
import herosLeft from './components/herosLeft';

export default {
  name: "app",
  components:{
    "heros-list":herosList,
    "heros-left":herosLeft
  }
}
</script>

<style>

</style>

<template>
  <div id="nav">
    <main-tab-bar/>
    <router-view></router-view>
  </div>
  
</template>
<script>
import MainTabBar from './components/content/mainTabBar/MainTabBar.vue'
export default {
  components:{
    MainTabBar
  }
}
</script>
<style>
@import './assets/css/base.css'
</style>

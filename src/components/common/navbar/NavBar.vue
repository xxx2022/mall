<template>
  <div class="nav-bar">
    <div class="left"><slot name='left-nav'></slot></div>
    <div class="center"><slot name='center-nav'></slot></div>
    <div class="right"><slot name='right-nav'></slot></div>
  </div>
</template>
<script>
export default {
  name:'NavBar'
}
</script>
<style scoped>
.nav-bar{
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
  z-index: 9;
}
.left,.right {
  width: 60px;
}
.center{
  flex: 1;
}
</style>
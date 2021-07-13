<template>
    <div class="tabbar">
      <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'TabBar01',
  components: {
    
  }
}
</script>

<style  scoped>
.tabbar{
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 49px;
  box-shadow: 0 -1px 5px rgba(0,0,0,0.05);
  background-color: #f2f2f2;
  z-index: 9;
}
</style>
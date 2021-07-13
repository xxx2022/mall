<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  data(){
    return {
      bscroll:null
    }
  },
  mounted(){
    this.bscroll= new BScroll(this.$refs.wrapper,{
      probeType:3,
      pullUpLoad:true
    })
  }

}
</script>
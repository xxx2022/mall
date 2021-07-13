<template>
      <div class="tabbar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else-if="isActive"><slot name="item-icon-active"></slot></div>
        <!-- <div :class="{active:isActive}"><slot name="item-text"></slot></div> -->
        <div :style="activeStyle"><slot name="item-text"></slot></div>
      </div>
      
</template>

<script>
export default {
  name:'TabBarItem01',
  props:{
    path: String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
      // isActive:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      // console.log('itemClick');
      this.$router.replace(this.path)
    }
  }
}
</script>
<style>

.tabbar-item{
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tabbar-item img{
  width: 24px;
  height: 24px;
  vertical-align:middle;
  margin-bottom: 2px;
}
/* // .active{
//   color: red;
// } */
</style>
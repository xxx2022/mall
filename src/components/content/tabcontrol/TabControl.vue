<template>
  <div class="tab-control" >
    <div v-for="(item ,index) in titles" :key="item.id" class="tab-control-item">
      <span :class="{active:index==currentIndex}" @click=addcolor(index)>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'TabControl',
  data(){
    return {
      currentIndex:0
      }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    addcolor(index){
      this.currentIndex=index
      this.$emit('tabClick',index)
      // console.log(index);
    }
  }
}
</script>
<style >
.tab-control{
  text-align: center;
  font-size: 14px;
  display: flex;
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: #fff;
  height: 44px;
  line-height: 44px;
}
.tab-control-item{
  flex: 1;
}

.active{
border-bottom: 3px solid var(--color-high-text);
padding-bottom: 5px;
color: var(--color-tint);

}
</style>
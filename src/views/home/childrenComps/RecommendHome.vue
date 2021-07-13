<template>
  <div class="recommend-home">
    <div v-for="item in recommends" :key="item.id" class="recommend-home-show">
      <a :href="item.link">
        <img :src="item.image"/>
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'RecommendHome',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{

  }
}
</script>
<style  scoped>
.recommend-home{
  display: flex;
  
}
.recommend-home-show{
  flex: 1;
  text-align: center;
  font-size: 12px;
  border-bottom: 8px solid #eee;
  
}
.recommend-home-show img{
  width: 80%;
  height: 80%;
}
</style>
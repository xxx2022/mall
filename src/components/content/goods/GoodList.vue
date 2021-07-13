<template>
  <div class="good-list" >
      <good-list-item :goodsitem="item" v-for="item in goodslist" :key="item.id"></good-list-item>
  </div>
</template>
<script>
import GoodListItem from './GoodListItem.vue'
export default {
  components: { 
    GoodListItem 
    },
  name:'GoodList',
  props:{
    goodslist:{
      type:Array,
      default(){
        return[]
      }
    }
  }

}
</script>
<style scoped>
.good-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
    
}

</style>
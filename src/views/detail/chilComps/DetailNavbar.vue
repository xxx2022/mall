<template>
  <div class="detail-nav-bar">
      <nav-bar >
        <template v-slot:left-nav>
          <div @click="back">
            <img src="../../../assets/img/common/back.svg">
          </div>
        </template>



        <template v-slot:center-nav>
          <div class="detail-show">
            <div class="detail-title" 
            v-for="(item,index) in titles" 
            :key="item"
            :class="{active:isCurrentIndex==index}"
            @click="tabClick(index)">
            {{item}}
            </div>
         </div>
        </template>
      </nav-bar>
  </div>
</template>
<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'
export default {
  name:'DetailNavBar',
  components: { 
    NavBar 
    },
    data(){
      return{
        titles:['商品','参数','推荐','评论'],
        isCurrentIndex:0
      }
    },
    methods:{
      tabClick(index){
        this.isCurrentIndex=index
      },
      back(){
        this.$router.back()
      }
    }
  
}
</script>
<style scoped>
.detail-nav-bar img{
  margin-top: 13px;
}
.detail-show{
  display: flex;
}
.detail-title{
  flex: 1;
  font-size: 13px;
}
.active{
  color: var(--color-high-text);
}
</style>
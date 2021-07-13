<template>
  <div class="swpiper-home">
    <swiper>
      <swiper-item v-for="item in banners" :key=item.id>
        <a :href="item.link">
          <img :src="item.image"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper,SwiperItem} from  '../../../components/common/swiper/index'
// import Swiper from '../../../components/common/swiper/Swiper.vue'
// import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'
export default {
  name:'SwiperHome',
  components:{
    Swiper,
    SwiperItem
    
  },
  props:{
    banners:{
      type:Array,
      default(){
        return[]
      }
    },
    // recommend:{
    //   type:Array,
    //   default(){
    //     return[]
    //   }
    // }
  }

  
}
</script>
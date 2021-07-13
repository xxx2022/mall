<template>
  <div class="home">
    <div class="home-nav"><nav-bar><template v-slot:center-nav>购物街</template></nav-bar></div>
    <scroll class="content">
      <swiper-home :banners="banners"></swiper-home>
      <recommend-home :recommends="recommend"/>
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" 
      class="tab-control"
      @tabClick="tabClick"/>
    <good-list :goodslist="goods[currentType].list"/>
    </scroll>
  </div>
</template>
<script>
import {getHomeMultidata,getHomeGoods} from '../../network/home'


import NavBar from '../../components/common/navbar/NavBar.vue'
import SwiperHome from '../home/childrenComps/SwiperHome.vue'
import RecommendHome from './childrenComps/RecommendHome.vue'
import FeatureView from './childrenComps/FeatureView.vue'
import TabControl from '../../components/content/tabcontrol/TabControl.vue'
import GoodList from '../../components/content/goods/GoodList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
export default {
  name:'Home',
  components:{
    NavBar,
    SwiperHome,
    RecommendHome,
    FeatureView,
    TabControl,
    GoodList,
    Scroll
    
  },
  data(){
    return {
      banners:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop'
     
    }
  },
  created(){
    this.getHomeMultidata();

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{
    tabClick(index){
      // console.log(index);
      switch(index){
        case 0:
          this.currentType='pop'
          break;
          case 1:
            this.currentType='new'
          break;  
            case 2:
            this.currentType='sell'
      }
     
    },



    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      
      this.banners=res.data.banner.list;
      this.recommend=res.data.recommend.list;
      // console.log(this.recommend);
    })
    },
    getHomeGoods(type){
      const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
        // console.log(res);
      })
    }
  }
}
</script>
<style scoped>
.home{
  padding-top: 44px;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  
}
.tab-control{
    position: sticky;
    top: 44px;
    z-index: 5;
}
.content{
  /* height: 300px; */
  
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>
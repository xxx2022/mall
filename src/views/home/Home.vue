<template>
  <div class="home">
    <div class="home-nav">
      <nav-bar>
        <template v-slot:center-nav>购物街</template>
      </nav-bar>
    </div>

    <tab-control :titles="['流行','新款','精选']" 
      @tabClick="tabClick" 
      ref="tabControl1"
      class="fixedTop"
      v-show="isFixed"/>
    <scroll class="content" ref="bscroll" 
    @bscroll="contentScroll"
    :current-probe='3'
    :pull-up-type="true"
    :observeImageType="true"
    @pullingUp="loadMore">
      <swiper-home :banners="banners" @swiperImageLoad='swiperImageLoad'></swiper-home>
      <recommend-home :recommends="recommend"/>
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" 
      @tabClick="tabClick" 
      ref="tabControl2"
      />
    <good-list :goodslist="goods[currentType].list"/>
    
    </scroll>
<back-top @click.native="topClick" v-show="isCurrentType"></back-top>
    
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
import BackTop from '../../components/content/backtop/BackTop.vue'
export default {
  name:'Home',
  components:{
    NavBar,
    SwiperHome,
    RecommendHome,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop
    
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
      currentType:'pop',
      isCurrentType:false,
      tabOffsetTop:0,
      isFixed:false
     
    }
  },
  created(){
    this.getHomeMultidata();

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){
      
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
      this.$refs.tabControl1.currentIndex=index
      this.$refs.tabControl2.currentIndex=index
    },
    topClick(){
      this.$refs.bscroll.scrollTo(0,0,300)
      // console.log(11);
    },
    contentScroll(position){
      this.isFixed=(-position.y)>this.tabOffsetTop
      this.isCurrentType=(-position.y)>1000
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad(){
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
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

        // 完成上拉加载更多
        this.$refs.bscroll.bscroll.finishPullUp()
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

.content{
  /* height: 300px; */
  
  position: absolute;
  bottom: 49px;
  right: 0;
  left: 0;
  top: 44px;
}
.fixedTop{
  position: fixed;
  z-index: 9;
  right: 0;
  left: 0;
  top: 39px;
}

</style>
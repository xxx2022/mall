<template>
  <tab-bar-01>
      <tab-bar-item-01 path='/home' activeColor="deeppink">
      <template v-slot:item-icon>
         <img src="../../../assets/img/tabbar/home.svg"/>
      </template>
      <template v-slot:item-icon-active>
         <img src="../../../assets/img/tabbar/home_active.svg"/>
      </template>
      <template v-slot:item-text>
         <div>首页</div>
      </template>>
      </tab-bar-item-01>
      <tab-bar-item-01 path='/category' activeColor="deeppink">
        <template v-slot:item-icon>
         <img src="../../../assets/img/tabbar/category.svg"/>
      </template>
      <template v-slot:item-icon-active>
         <img src="../../../assets/img/tabbar/category_active.svg"/>
      </template>
      <template v-slot:item-text>
         <div>分类</div>
      </template>>
      </tab-bar-item-01>
      <tab-bar-item-01 path='/cart' activeColor="deeppink">
        <template v-slot:item-icon >
         <img src="../../../assets/img/tabbar/shopcart.svg"/>
      </template>
      <template v-slot:item-icon-active>
         <img src="../../../assets/img/tabbar/shopcart_active.svg"/>
      </template>
      <template v-slot:item-text>
         <div>购物车</div>
      </template>>
      </tab-bar-item-01>
      <tab-bar-item-01 path='/profile' activeColor="deeppink">
        <template v-slot:item-icon>
         <img src="../../../assets/img/tabbar/profile.svg"/>
      </template>
      <template v-slot:item-icon-active>
         <img src="../../../assets/img/tabbar/profile_active.svg"/>
      </template>
      <template v-slot:item-text>
         <div>我的</div>
      </template>>
      </tab-bar-item-01>
    </tab-bar-01>
</template>
<script>
import TabBarItem01 from '../../common/tabbar/TabBarItem01.vue';
import TabBar01 from '../../common/tabbar/TabBar01.vue'
export default {
  name:'MainTabBar',
  components:{
    TabBarItem01,
    TabBar01,
  }
}
</script>
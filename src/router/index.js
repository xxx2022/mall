import { createRouter, createWebHashHistory } from 'vue-router'


const Home =()=>import('../views/home/Home.vue')
const Category =()=>import('../views/category/Category.vue')
const Cart =()=>import('../views/cart/Cart.vue')
const Profile =()=>import('../views/profile/Profile.vue')
const Detail =()=>import('../views/detail/Detail.vue')

const routes = [
  {
    path:'',
    redirect:'home'
  },
  {
    path:'/home',
    name:'Home',
    component:Home
  },
  {
    path:'/category',
    name:'Category',
    component:Category
  },
  {
    path:'/cart',
    name:'Cart',
    component:Cart
  },
  {
    path:'/profile',
    name:'Profile',
    component:Profile
  },
  {
    path:'/detail:iid',
    name:'Detail',
    component:Detail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  
  // mode: 'history',
  routes
})

export default router

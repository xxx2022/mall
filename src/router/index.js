import { createRouter, createWebHashHistory } from 'vue-router'


const Home =()=>import('../views/home/Home.vue')
const Category =()=>import('../views/category/Category.vue')
const Cart =()=>import('../views/cart/Cart.vue')
const Profile =()=>import('../views/profile/Profile.vue')

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
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  
  // mode: 'history',
  routes
})

export default router

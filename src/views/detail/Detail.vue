<template>
  <div class="detail" >
    <detail-navbar/>
  </div>
</template>
<script>
import {getDetails} from '../../network/detail'
 
import DetailNavbar from './chilComps/DetailNavbar.vue'


export default {
  name:'Detail',
  components:{
    DetailNavbar
  },
  
  methods:{
    
  },
  data(){
    return{
      iid:null
    }
  },
  created(){
    this.iid=this.$route.params.iid

    getDetails(this.iid).then(res=>{
      console.log(res);
    })
  }
}
</script>
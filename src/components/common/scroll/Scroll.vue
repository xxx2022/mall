<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  data(){
    return {
      bscroll:null
    }
  },
  props:{
    currentProbe:{
      type:Number,
      default:0
    },
    pullUpType:{
      type:Boolean,
      default:false
    },
    observeImageType:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    this.bscroll= new BScroll(this.$refs.wrapper,{
      probeType:this.currentProbe,
      pullUpLoad:this.pullUpType,
      click:true,
      observeImage:this.observeImageType
    })
    this.bscroll.scrollTo(0,0)

    this.bscroll.on('scroll',(position)=>{
      this.$emit('bscroll',position)
    })

    this.bscroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })

    // this.bscroll.on('pullingUp',()=>{
      
    //   this.$emit('pullingUp')
      
    // })
    
  },
  methods:{
    scrollTo(x,y,time=300){
      this.bscroll.scrollTo(x,y,time)
    },
  },
  

}
</script>
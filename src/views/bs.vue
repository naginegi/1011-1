<script>
import {mapState, mapActions} from 'pinia';
import indexState from '../stores/indexstate';
export default {
  data() {
    return {
      Interval:null,
      i:20,
      j:0,
      k:0,
      farr:[],
      plance:[
    
      ]
    }
  },
  mounted(){
    this.setLocation(16);
    this.start();
  },
  methods:{
    ...mapActions(indexState,["setLocation"]),
    start(){
      // this.Interval = setInterval(this.down, 500);

    },
    addf(){
      const x = event.clientX-530;
      const y = 760-event.clientY;
      this.arrpush();
      this.farr.push("");
      this.plance.push({style:{left:'200px',bottom:'500px',}},);
      this.plance[this.k].style.left = x+"px";
      this.plance[this.k].style.bottom = y+"px"
      this.j=y;
      const timer = setInterval( () => {
        this.down();
      },500)
      this.k++;
      // console.log('鼠标坐标：', event.clientX, event.clientY);
      // console.log(this.plance[this.k]);
      // console.log(this.k);
      // this.plance.bottom = y+"px"
      // console.log((event.clientX-200).toString())
      console.log(this.plance)
    },
    arrpush(){

    },
    down(){
    
        // this.plance[this.k].style.bottom = (this.j)+"px"
        this.j-=this.i;
        console.log("12313")
      // console.log(this.j)
      if(this.j<0){
        this.delete()
        clearInterval(timer)
      }
    },
    delete(){
      this.farr.splice(this.k,1)
      // clearInterval()
    },
  },
  
  components: {
  }
}
</script>
<template>
  <div class="t" @mousedown="addf">
    <div class="f" v-for="(i,index) in farr" :key="index" :style="plance[index].style" >
    </div>
    <!-- <div class="r" ></div> -->
  </div>


</template>

<style lang="scss" scoped>
.t{
  width: 70%;
  height: 80%;
  border: 1px solid black;
  position: relative;
  .f{
    position: absolute;
    // bottom: 100%;
    width: 30px;
    height: 30px;
    background-color: black;
    border-radius: 50%;
    // animation:do 2s 1;
  }
    // .r{
    //   position: fixed;
    //   width: 71%;
    //   height: 57%;
    //   // border: 1px solid;
    //   top: 23%;
    // }
}

@keyframes do{
  0%{
    bottom: 100%;
  }
  100%{
    bottom: 0%;
  }
}
</style>
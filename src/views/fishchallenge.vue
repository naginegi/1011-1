<script>
import bg from '../components/bg.vue'
import fish from './fish.vue'
import {mapState, mapActions} from 'pinia';
import indexState from '../stores/indexstate';
export default{
    data(){
        return{

        }
    },
    methods:{
      ...mapActions(indexState,["setLocation"]),
    },
    components:{
      bg,
      fish,
    },
    mounted(){
        this.setLocation(19)
    },
}
</script>

<template>
<div class="all">

  <div class="header">
    <i class="fa-solid fa-sun"></i>
  </div>
  <div class="contain">
    <bg />
    <fish />
  </div>
  <div class="footer">
    
  </div>
</div>
<div class="test">
  <!-- <test /> -->
  <!-- <test2 /> -->
</div>
</template>

<style lang="scss" scoped>
.all{
  width: 100%;
  height: 100%;
  pointer-events: none;
  .header{
    width: 100%;
    height: 20%;
    // border: 1px solid;
    position: relative;
    .fa-sun{
      position: absolute;
      right: 50px;
      // top: 50px;
      font-size: 80pt;
    }
  }
  .contain{
    width: 100%;
    height: 60%;  
    // border: 1px solid;

  }
  .footer{
    width: 100%;
    height: 20%;
    // border: 1px solid;
    background-color: black;
  }
}
</style>

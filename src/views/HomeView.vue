<script>
import {RouterLink,RouterView} from "vue-router"
import Header from "./Header.vue";
export default{
  data(){
    return{

    }
  },
  components:{
    RouterLink,
    RouterView,
    Header
  }
}
</script>

<template>
  <h1>這是home</h1>
  <!-- <div class="headerShow">
    <Header />
  </div>
  <div class="showContent">
    <RouterView />
  </div> -->
</template>

<style>
.headerShow{
  width: 100vw;
  height: 50vh;
}
</style>
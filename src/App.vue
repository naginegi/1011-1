<script>
import Header from './views/Header.vue';
import {RouterLink,RouterView} from "vue-router";
import test from './views/test.vue';
import HomeView from './views/HomeView.vue';
export default{
  data(){
    return{

    }
  },
  components:{
    RouterLink,
    RouterView,
    Header,
    test
  }
}
</script>

<template>  

<div class="top">
  <Header />
</div>
<div class="contain">
  <!-- <test /> -->
  <RouterView />
  
</div>

</template>

<style lang="scss" scoped>
.top{
  width: 100vw;
  height: 20vh;
  background-color: rgb(243, 173, 173);
  overflow: auto;
  // color: white;
}
.contain{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  // background-color: #f8f2ea;
}
</style>

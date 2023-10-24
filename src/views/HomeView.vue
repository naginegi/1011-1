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
<div class="area">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../public/甜點圖片/3.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../public/甜點圖片/6.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../public/甜點圖片/7.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

  
  <!-- <div class="headerShow">
    <Header />
  </div>
  <div class="showContent">
    <RouterView />
  </div> -->
</template>

<style lang="scss" scoped>
.area{
  width: 400px;
  height: 400px;
  background-color: #7b7b7b;
}
</style>
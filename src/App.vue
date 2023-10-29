<script>
import Header from "./views/Header.vue";
import { RouterLink, RouterView } from "vue-router";
import test from "./views/test.vue";
import top from "./views/top.vue";
import loading from "./views/loading.vue";
export default {
  data() {
    return {
      bar: false,
      ctan: false,
    };
  },
  methods: {
    bargo() {
      this.bar = !this.bar;
      this.ctan = !this.ctan;
      // console.log("")
    },
    
  },
  components: {
    RouterLink,
    RouterView,
    Header,
    test,
    top,
    loading,
  },
};
</script>

<template>
  <div class="loading">
    <loading />
  </div>
  <div class="top">
    <i class="fa-solid fa-bars" @click="bargo"></i>
    <top />
  </div>
  <div class="navbar" :class="{ barw: bar }">
    <Header />
  </div>
  <div class="contain" :class="{ ctanw: ctan }">
    <!-- <test /> -->
    <RouterView class="rouview" />
  </div>
</template>

<style lang="scss" scoped>
.top {
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 10vh;
  background-color: #64ccc5;
  border: 1px solid black;
  box-shadow: -1px 2px 10px 1px black;
  display: flex;
  z-index: 1;
  .fa-bars {
    font-size: 26pt;
    margin: 30px 40px;
    cursor: pointer;
  }
}
.navbar {
  position: fixed;
  left: 0px;
  top:10vh;
  width: 15vw;
  height: 90vh;
  background-color: #dafffb;
  border: 1px solid black;
  overflow: hidden;
  transition: width 1s;
  box-shadow: 3px 7px 9px 0px black;
  z-index: 1;
  // color: white;
  &.barw {
    width: 0vw;
    transition: width 1s;
  }
}
.contain {
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 85vw;
  height: 90vh;
  display: flex; 
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 65px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  pointer-events: none;
  transition: width 1s;
  // background-color: #04364A;
  &.ctanw {
    width: 100vw;
    transition: width 1s;
    // transform: translateX(-500px);
  }
  .rouview {
    pointer-events: auto;
  }
  // background-color: #f8f2ea;
}
</style>

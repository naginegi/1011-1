<script>
import {RouterLink,RouterView} from 'vue-router'
import text from './test.vue';
import Test from './test.vue';
  export default{
    components:{
    Test
}
  }
</script>


<template>
  <!-- <p>header</p> -->
  <div class="link">
  <RouterLink to="/">home</RouterLink>
  <RouterLink to="Header">header</RouterLink>
  <RouterLink to="VtextandVmodel">T&M</RouterLink>
  <RouterLink to="vfor">vfor</RouterLink>
  <RouterLink to="bs">bs</RouterLink>
  <RouterLink to="von">v-on</RouterLink>
  <RouterLink to="dessert">dessert</RouterLink>
  <!-- <Test/> -->
  </div>

</template>

<style lang="scss" scoped>
  .link{
    // width: 80%;
    height: 80%;
    // border: 1px solid black;
    color:white;
    font-size: 25pt;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a{
    margin-right: 50px;
    text-decoration: none;
    // color: rgb(152, 105, 19);
  }
</style>

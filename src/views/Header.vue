<script>
import { RouterLink, RouterView } from "vue-router";
import { mapState, mapActions } from "pinia";
import indexState from "../stores/indexstate";
import text from "./test.vue";
import Test from "./test.vue";
export default {
  data() {
    return {
      num: 10,
      pep: false, //prop & emit page
      pearr: [],
      otp: false, //other page
      isOpen: false,
      bgc:[

      ]
    };
  },
  computed: {
    //
    ...mapState(indexState, ["location", "locationInfo"]),
  },
  methods: {
    ...mapActions(indexState, ["getLocation", "setLocation"]),
    pe() {
      this.pep = !this.pep;

      // console.log(this.pep)
    },
    ot() {
      this.otp = !this.otp;

      // console.log(this.pearr)
    },
    close(){
      this.pep = false;
      this.otp = false;
    },
    toggleElement() {
      this.isOpen = !this.isOpen; // 切换展开/收缩状态
    },
  },
  mounted() {
    // this.getLocation();
    this.setLocation(2);
  },
  components: {
    Test,
  },
};
</script>

<template>
  <!-- ///////////////////// -->
  <!-- 每個link都有一個自己的class bgc,當bgc==1,2,3,4，link變化背景顏色 -->
  <!-- ///////////////////// -->
  <!-- <p>header</p> -->
  <div class="link">
    <ul>
      <li><RouterLink to="/">home</RouterLink></li>
      <!-- <li><RouterLink to="Header">header</RouterLink></li> -->
      <li><RouterLink to="VtextandVmodel">T&M</RouterLink></li>
      <li><RouterLink to="vfor">v-for</RouterLink></li>
      <li><RouterLink to="von">v-on</RouterLink></li>
      <li><RouterLink to="vbind">v-bind</RouterLink></li>
      <li><RouterLink to="vif">v-if</RouterLink></li>
      <li><RouterLink to="watch">watch</RouterLink></li>
      <li><RouterLink to="pinia">pinia</RouterLink></li>

        <button @click="pe" class="btn">父子層傳輸</button>
        <div class="toggle-pe" :class="{ open: pep }">
          <ul @click="pe" >
            <li><RouterLink to="props">props</RouterLink></li>
            <li><RouterLink to="propsign">propsign</RouterLink></li>
            <li><RouterLink to="emit">emit</RouterLink></li>
            <li><RouterLink to="pemix">pemix</RouterLink></li>
            <li><RouterLink to="provideAndinject">provide inject</RouterLink></li>
          </ul>   
        </div>

      <li>
        <button @click="ot" class="btn">其他</button>
        <div class="toggle-ot" :class="{ open: otp }">
          <ul @click="ot" >
            <li><RouterLink to="ET">expense tracker</RouterLink></li>
            <li><RouterLink to="waterfall">waterfall</RouterLink></li>
            <li><RouterLink to="bs">test1</RouterLink></li>
            <li><RouterLink to="dessert">dessert</RouterLink></li>
            <li><RouterLink to="test">test2</RouterLink></li>
            <li><RouterLink to="challenge">mini game</RouterLink></li>
          </ul>
        </div>
      </li>
    </ul>
    <!-- <Test/> -->
  </div>
  <div></div>
  <!-- <p>{{ locationInfo }}</p> -->
</template>

<style lang="scss" scoped>
p {
  width: 100px;
  height: 20px;
}
.link {
  li{
    &:hover{
      background-color: rgb(255, 219, 219)  ;
    }
  }
  // width: 80%;
  height: 80%;
  // border: 1px solid black;
  color: white;
  font-size: 20pt;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  .btn {
    background-color: #ffffff00;
    border: 0px solid;
    color: #1c6efd;
    font-size: 18pt;
    &:hover{
      background-color: rgb(255, 219, 219);
    }
  }

  }
  // .toggle-pe {
  //   display: flex;
  //   flex-direction: column;
  //   max-height: 0; // 默认状态下高度为0，元素折叠起来
  //   overflow: hidden; // 隐藏溢出内容
  //   transition: max-height 0.3s ease-out;
  //   &.open {
  //     max-height: 300px; // 打开状态下的高度，可以根据需要调整
  //     transition: max-height 0.3s ease-in; // 添加过渡效果
  //   }
  // }
  .toggle-pe {
    position: fixed;
    left: 15vw;
    // top: 30vh;
    max-width: 0;
    height: 500px;
    background-color: #dafffb;
    display: flex;
    flex-direction: column;
    // max-height: 0; // 默认状态下高度为0，元素折叠起来
    overflow: hidden; // 隐藏溢出内容
    transition: max-width 0.3s ease-out;
    color: black;
    &.open {
      max-width: 300px; // 打开状态下的高度，可以根据需要调整
      transition: max-width 0.3s ease-in; // 添加过渡效果
      border: 1px solid black;
    }
  }
  .toggle-ot {
    position: fixed;
    left: 15vw;
    // top: 30vh;
    max-width: 0;
    height: 500px;
    background-color: #dafffb;
    display: flex;
    flex-direction: column;
    // max-height: 0; // 默认状态下高度为0，元素折叠起来
    overflow: hidden; // 隐藏溢出内容
    transition: max-width 0.3s ease-out;
    color: black;
    &.open {
      max-width: 300px; // 打开状态下的高度，可以根据需要调整
      transition: max-width 0.3s ease-in; // 添加过渡效果
      border: 1px solid black;
    }
  }

a {
  margin-right: 50px;
  text-decoration: none;
  // color: rgb(152, 105, 19);
}
</style>

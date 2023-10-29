<script>
import { RouterLink, RouterView } from "vue-router";
import { mapState, mapActions } from "pinia";
import indexState from "../stores/indexstate";
import Header from "./Header.vue";
export default {
  data() {
    return {
      dark:false,
      ltap:false,
      rtap:false,
      imgleft:"../../public/img/bongoLeft.png",
      imgright:"../../public/img/bongoRight.png",
      bg:"../../public/img/bg.png",
      mode:"fa-solid fa-toggle-off",
      ins:"../../public/img/keyboardDrawn.png"
    };
  },
  methods: {
    ...mapActions(indexState, ["setLocation"]),

    left(){
      this.ltap = !this.ltap
      if(this.dark == false){
        if(this.ltap == true){
          this.imgleft = "../../public/img/bongoLeftTap.png"
        }else{
          this.imgleft = "../../public/img/bongoLeft.png"
        }

      }
      if(this.dark == true){
        if(this.ltap == true){
          this.imgleft = "../../public/img/bongoLeftTapDark.png"
        }else{
          this.imgleft = "../../public/img/bongoLeftDark.png"
        }
      }
    },


    right(){
      this.rtap = !this.rtap
      if(this.dark == false){
        if(this.rtap == true){
          this.imgright = "../../public/img/bongoRightTap.png"
        }else{
          this.imgright = "../../public/img/bongoRight.png"
        }
      }

      if(this.dark == true){
        if(this.rtap == true){
          this.imgright = "../../public/img/bongoRightTapDark.png"    
        }else{
          this.imgright = "../../public/img/bongoRightDark.png"
        }
      }
    },
    darkmode(){
      this.dark = !this.dark;
      if(this.dark == true){
        this.imgleft = "../../public/img/bongoLeftDark.png";
        this.imgright = "../../public/img/bongoRightDark.png";
        this.bg = "../../public/img/bgDark.png";
        this.mode = "fa-solid fa-toggle-off fa-rotate-180 style='color: #ffffff;'";
        this.ins = "../../public/img/keyboardDrawnDark.png"
        
      }else{
        this.imgleft = "../../public/img/bongoLeft.png";
        this.imgright = "../../public/img/bongoRight.png";
        this.bg = "../../public/img/bg.png";
        this.mode = "fa-solid fa-toggle-off ";
        this.ins = "../../public/img/keyboardDrawn.png"
      }
      // console.log(this.dark)
    }
  },
  mounted() {
    this.setLocation(1);
  },
  components: {
    RouterLink,
    RouterView,
    Header,
  },
};
</script>

<template>
  <!-- <img src="../../star.gif" alt=""> -->
  <!-- <div class="bongocat">
    <div class="left">
      <img src="../../public/img/bongoLeft.png" alt="">
    </div>
    <div class="right">
      <img src="../../public/img/bongoRight.png" alt="">
    </div>
  </div> -->

  <img id="background" :src="bg" alt="">
  <!-- <div id="background">
  </div> -->
  <!--Bongo image-->
  <div id="instrument">
    <img :src="ins" />
  </div>
  <!--Bongo Cat-->
  <div id="bongocat">
    <img @mouseover="left" id="imgLeft" :src="imgleft" />
    <img @mouseover="right" id="imgRight" :src="imgright"/>
    <i :class="mode" class="darkbtn" @click="darkmode"></i>
    <!-- <i class="arkbtn"></i> -->
    <!-- <button type="button" >dark</button> -->
  </div>
</template>

<style lang="scss" scoped>

.darkbtn{
  position: absolute;
  left: 10%;
  top: 10%;
  font-size: 40pt;
  pointer-events: auto;
  cursor: pointer;
}

body {
  margin: 0;
}

img {
  position: absolute;
  top: 44.7%;
  left: 45%;
  pointer-events: none;
}

#background {
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-image: url("../../public/img/bg.png");
  // background-repeat: no-repeat;
  // background-size: cover;
}

#bongocat {
  width: 100%;
  height: 100%;
  z-index: 1;
  filter: none;
}

#imgLeft {
  width: 16.72%;
  margin-left: -9.5%;
  margin-top: -6.9%;
  pointer-events: auto;
}

#imgRight {
  width: 14.05%;
  margin-left: 7.25%;
  margin-top: -4.9%;
  pointer-events: auto;
}

#instrument img {
  z-index: -1;
  width: 36.5%;
  margin-left: -16.5%;
  margin-top: 2%;
  display: block;
  filter: none;
}

@media screen and (aspect-ratio: 4/3) {
  #imgLeft {
    width: 16.72%;
    margin-left: -9.5%;
    margin-top: -8.9%;
  }

  #imgRight {
    width: 14.05%;
    margin-left: 7.25%;
    margin-top: -6.8%;
  }
}

@media screen and (aspect-ratio: 64/27) {
  #imgLeft {
    width: 16.72%;
    margin-left: -9.425%;
    margin-top: -0.6%;
  }

  #imgRight {
    width: 14.05%;
    margin-left: 7.25%;
    margin-top: 1.4%;
  }
}

@media (max-height: 768px) {
  #imgLeft {
    margin-left: -9.45%;
  }
}

@media (min-height: 1440px) {
  #imgLeft {
    margin-left: -9.45%;
    margin-top: -6.85%;
  }
}
</style>

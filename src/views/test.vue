<script>
import {mapState, mapActions} from 'pinia';
import indexState from '../stores/indexstate';
export default {
  data() {
    return {
      isOpen: false, // 初始状态为关闭
      // b: new Array(400).fill(null),
      // open: false,
      imgarr:[
      "../../public/房地產圖片/banner1.png",
      "../../public/房地產圖片/banner2.png",
      "../../public/房地產圖片/banner3.png",
      ],
      imgkey:0,
      nextani:false,
      prevani:false,
      /////////////////////////
    };
  },
  mounted(){
        this.setLocation(18)
    },
  methods: {
    // toggleElement() {
    //   this.isOpen = !this.isOpen; // 切换展开/收缩状态
    // },
    // log() {
    //   // console.log("logloglog")
    //   this.open = !this.open;
    // },
    /////////////////////////
    ...mapActions(indexState,["setLocation"]),
    previmg(){
      this.prevani = !this.prevani;
      setTimeout( () => {
        this.imgkey--;
        this.prevani = !this.prevani;
        if(this.imgkey<0){
          this.imgkey = 2;
        }
      },1000)
    },

    nextimg(){
      this.nextani = !this.nextani;
      setTimeout( () => {
        this.imgkey++;
        this.nextani = !this.nextani;
        if(this.imgkey>2){
          this.imgkey = 0;
        }
      },1000)
    },
  },
};
///////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////

</script>
<template>
  <!-- <button type="button" @click="check">btn</button> -->
  <!-- <div>
    <div class="toggle-container" :class="{ open: isOpen }">
      <h1>123123</h1>
      <h1>123123</h1>
      <h1>123123</h1>
      <h1>123123</h1>
      <h1>123123</h1>
    </div>
  </div>
  <button @click="toggleElement">Toggle Element</button> -->

  <div class="t">
    <!-- <div class="b" v-for="i in b" :class="{ colse: open }" @click="log"></div> -->

    <div class="out1">
      <div class="out2">
        <div class="in">
          <p>99%</p>
        </div>
      </div>
    </div>

    <div class="loading-bar">
      <div class="progress"></div>
    </div>

    <!-- <div id="charging" class="centered">
      <div id="inner" class="centered"></div>
      <div id="content">
        <div class="percent">99%</div>
      </div>
    </div>-->
  </div>

  <div class="spinner-box">
    <div class="pulse-container">
      <div class="pulse-bubble pulse-bubble-1"></div>
      <div class="pulse-bubble pulse-bubble-2"></div>
      <div class="pulse-bubble pulse-bubble-3"></div>
    </div>
  </div>
  <!-- ////////////////////////////////////////////////////////////////// -->
  <div class="all">
    <div class="img" :class="{next:nextani,prev:prevani}">
        <img :src="imgarr[imgkey]" class="outimg" >
        <img :src="imgarr[imgkey]" class="inimg" >
    </div>
  </div>
    <button type="button"  @click="previmg">prev</button>
    <button type="button"  @click="nextimg">next</button>

  <!-- ////////////////////////////////////////////////////////////////// -->

<!-- ////////////////////////////////////////////////////////////////// -->

</template>
<style lang="scss" scoped>
////////////////////////////////////////////////////////////////////////////////////////////
.all{
  width: 100%;
  height: 65%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(0px);
  pointer-events: none;
  .img{
    width: 90%;
    height: 90%;
    position: relative;
    transition: transform 1s;
    // overflow: hidden;
    .outimg{
      width: 100%;
      height: 100%;
      position: absolute;
      filter: blur(10px);
      opacity: 0.3;
      object-fit: cover;
      // transition: 2s;
    }
    .inimg{
      position: absolute;
      top: 8%;
      left: 10%;
      width: 80%;
      height: 80%;
      object-fit: cover;
      transition: opacity 2s;
    }
    &.next{
      transform: translateX(1500px);
      transition: transform 1s,;
    }
    &.prev{
      transform: translateX(-1500px);
      transition: transform 1s,;
    }
  }
}


////////////////////////////////////////////////////////////////////////////////////////////
.spinner-box {
  // position: fixed;
  width: 30vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #04364a;
}
.pulse-container {
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pulse-bubble {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3ff9dc;
}
.pulse-bubble-1 {
  animation: pulse 0.4s ease 0s infinite alternate;
}
.pulse-bubble-2 {
  animation: pulse 0.4s ease 0.2s infinite alternate;
}
.pulse-bubble-3 {
  animation: pulse 0.4s ease 0.4s infinite alternate;
}

@keyframes pulse {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0.25;
    transform: scale(0.75);
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
.toggle-container {
  display: flex;
  max-height: 0; // 默认状态下高度为0，元素折叠起来
  overflow: hidden; // 隐藏溢出内容

  &.open {
    max-height: 300px; // 打开状态下的高度，可以根据需要调整
    transition: max-height 0.3s ease; // 添加过渡效果
  }
}
////////////////////////////////////////////////////////////
button {
  pointer-events: auto;
}
////////////////
.loading-bar {
  width: 100px;
  height: 10px;
  background-color: #0077b6;
  position: relative;
  overflow: hidden;
}

.progress {
  width: 100%;
  height: 100%;
  background-color: #f6a609;
  position: absolute;
  animation: fill 2s linear infinite;
}

@keyframes fill {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
/// /////////////
.t {
  width: 98%;
  height: 40%;
  // background-color: black;
  display: flex;
  flex-wrap: wrap;
  pointer-events: auto;
  position: relative;
  pointer-events: none;
  .b {
    width: 50px;
    height: 50px;
    background-color: rgb(0, 0, 0);
    transition: background-color 2s;
    &:hover {
      background-color: white;
      transition: background-color 0.01s;
    }
    &.colse {
      background-color: white;
      z-index: -1;
      transition: background-color 5s, z-index 5s;
    }
  }

  //////////////////////////

  .out1 {
    width: 300px;
    height: 300px;
    border: 5px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .out2 {
      width: 300px;
      height: 300px;
      background: linear-gradient(
        45deg,
        rgb(252, 22, 22) 20%,
        rgb(0, 0, 0) 40%,
        rgb(0, 0, 0) 60%,
        rgb(0, 0, 0) 80%
      );

      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: rotate 2s linear infinite;
      // transform: rotate(65deg);
      .in {
        width: 280px;
        height: 280px;
        background-color: white;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        p {
          margin: 0 0;
          position: fixed;
        }
      }
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(-360deg); /* 开始时的旋转角度 */
    }
    100% {
      transform: rotate(360deg); /* 结束时的旋转角度，一圈是 360 度 */
    }
  }

  //////////////////////////

  // .centered {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }

  // #charging {
  //   height: 30%;
  //   aspect-ratio: 1;
  //   border-radius: 50%;
  //   position: absolute;
  //   border: 1px solid rgb(0, 0, 0);
  //   position: absolute;
  //   left: 40%;
  //   bottom: 37%;
  // }
  // #charging::before {
  //   content: "";
  //   height: 92%;
  //   width: 92%;
  //   border-radius: 50%;
  //   position: absolute;
  //   border: 1px solid #444444;
  // }
  // #inner {
  //   width: 80%;
  //   height: 80%;
  //   border-radius: 50%;
  //   animation: rotate 1s linear infinite;
  //   box-shadow: inset 0px 0px 7px 0px #ffffff45;
  //   // background-color: #ffdf3e;
  //   background: linear-gradient(135deg, #000000, #ffdf3e);
  // }
  // #inner::before {
  //   content: "";
  //   width: 80%;
  //   height: 80%;
  //   filter: blur(5px);
  //   border-radius: 100%;
  //   background: #000;
  // }
  // #content {
  //   color: white;
  //   font-size: 17px;
  //   position: absolute;
  //   font-family: calibri;
  // }
  // @keyframes rotate {
  //   0% {
  //     transform: rotate(0deg);
  //   }
  //   100%{
  //     transform: rotate(360deg);

  //   }
  // }
  //////////////////////////////////////////////////////////////////////////

}
</style>

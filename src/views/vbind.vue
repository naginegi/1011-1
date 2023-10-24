<script>
export default {
    data() {
        return {
            title: "h1",
            iscolor: false,
            islarge: false,
            stylearr: [],
            imgarr:[
            "../../public/甜點圖片/5.png",
            "../../public/甜點圖片/6.png",
            "../../public/甜點圖片/7.png"
            ],
            sty:"",
            
        };
    },
    methods: {
        ///  width: x px;

        red() {
            this.title = "red";
        },
        blue() {
            this.title = "blue";
        },
        green() {
            this.title = "green";
        },
        pink() {
            this.title = "pink";
        },
        rgb() {
            this.title = "rgb";
        },
        run(){
            this.sty = "jump";
            setTimeout(() => {
        this.sty = ""; // 隐藏消息（延迟后）
      }, 1500); // 2000 毫秒（2 秒）延迟
            // let x =0;
            // x = Math.floor(Math.random()*100+1);
            // this.sty = "top:"+x+"px;";
            // console.log(this.sty);
        },
    },
    components: {

    },
};
</script>

<template>
    <!--  -->
    <!-- v-bind:class="" 使class名稱改變 -->
    <div class="area" >
        <h1 class="h1">test</h1>
        <h1 v-bind:class="title">test2</h1>

        <!-- ///////////////////// -->
        <div class="btn">

            <button type="button" @click="red">red</button>
            <button type="button" @click="blue">blue</button>
            <button type="button" @click="green">green</button>
            <button type="button" @click="pink">pink</button>
            <button type="button" @click="rgb">rgb</button>
        </div>
        <!-- ///////////////////// -->

        <p></p>
        <!-- 可用物件形式表示 -->
        <div class="obj">
            <label for="">rgb</label>
            <input type="checkbox" value="true" v-model="iscolor" />
            <label for=""> size</label>
            <input type="checkbox" value="true" v-model="islarge" />
        </div>

        <h2 v-bind:class="{
            rgb: iscolor,
            size: islarge,
        }">
            <i class="fa-solid fa-kiwi-bird"></i>
        </h2>
        <!-- ///////////////////// -->
        <div class="arr">
            <input type="checkbox" value="rgb" v-model="stylearr">rgb
            <input type="checkbox" value="size" v-model="stylearr">size
            <input type="checkbox" value="bold" v-model="stylearr">bold
            <!-- <h2 > twst</h2> -->
            <p></p>
        </div>
        <i v-bind:class="stylearr" class="fa-solid fa-splotch"></i>
        <div class="img">
            <img v-bind:src="item" v-for="item in imgarr" >
        </div>

        <div class="run"  @keydown.space="run">
            <!-- v-bind:style="sty" -->
            <!-- style="top: 50px;" -->
            <i class="fa-solid fa-fish" v-bind:class="sty"></i>
            <i class="fa-solid fa-seedling"></i>
            <div class="ground"></div>
        </div>
        <button type="button" @click="run">btn</button>

    </div>
</template>

<style lang="scss" scoped>
.area {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.h1 {
    // background-color: black;
    color: black;
}

.color {
    color: red;
}

.size {
    font-size: 60pt;
}

.bold {
    border: 5px solid;
}

.red {
    color: red;
}

.blue {
    color: blue;
}

.green {
    color: green;
}

.pink {
    color: pink;
}

.rgb {
    animation: rgb 10s linear infinite;
}

.img{
    width: 80%;
    height: 50%;
    border: 1px solid;
    display: flex;
    justify-content: center;
    img{
        margin-left: 10px;
        width: 40%;
    }
}

.run {
    //滑鼠接觸到(JS)-->v-bind綁class-->改CSS
    width: 80%;
    height: 80%;
    border: 1px solid;
    position: relative;
    .fa-seedling{
        position: absolute;
        right:  50px;
        bottom: 0px;
        font-size: 80pt;
        animation: rtl 5s linear infinite;
    }

    .fa-fish {
        position: absolute;
        left: 50px;
        bottom: 0px;
        font-size: 80pt;
    }
    .ground{
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 10px;
        background-color: black;
    }
}

.jump{
    animation: run 1.5s linear infinite;
    
}

@keyframes rgb {
    0% {
        color: rgb(255, 0, 0);
        transform: rotate(0deg);
    }

    33% {
        color: rgb(0, 255, 0);
        transform: rotate(-120deg);
    }

    66% {
        color: rgb(0, 0, 255);
        transform: rotate(-240deg);
    }

    100% {
        color: rgb(255, 0, 0);
        transform: rotate(-360deg);
    }
}

@keyframes run {
    0% {
        bottom: 10px;
    }
    40%{
        bottom: 190px;
    }
    50%{
        bottom: 200px;
    }
    60%{
        bottom: 190px;
    }
    100% {
        bottom: 10px;
    }
}

@keyframes rtl{
    0%{
        right: -110px;
    }
    100%{
        right: 1100px;
    }
}
</style>

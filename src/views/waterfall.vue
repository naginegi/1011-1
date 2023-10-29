<script>
import {mapState, mapActions} from 'pinia';
import indexState from '../stores/indexstate';
export default {
    data() {
        return {
            imgarr: [
                "../../public/甜點圖片/1.png",
                "../../public/甜點圖片/2.png",
                "../../public/甜點圖片/3.png",
                "../../public/甜點圖片/4.png",
                "../../public/甜點圖片/5.png",
                "../../public/甜點圖片/6.png",
                "../../public/甜點圖片/7.png",
                "../../public/甜點圖片/8.png",
            ],
            // imgarr2: [
            //     "../../public/甜點圖片/2.png",
            //     "../../public/甜點圖片/8.png",
            //     "../../public/甜點圖片/6.png",
            //     "../../public/甜點圖片/3.png",
            //     "../../public/甜點圖片/1.png",
            //     "../../public/甜點圖片/7.png",
            //     "../../public/甜點圖片/5.png",
            //     "../../public/甜點圖片/4.png",
            // ],
            // imgarr3: [
            //     "../../public/甜點圖片/6.png",
            //     "../../public/甜點圖片/3.png",
            //     "../../public/甜點圖片/7.png",
            //     "../../public/甜點圖片/4.png",
            //     "../../public/甜點圖片/5.png",
            //     "../../public/甜點圖片/8.png",
            //     "../../public/甜點圖片/2.png",
            //     "../../public/甜點圖片/1.png",
            // ],
            arr:[1,2,3],

            arroid:[],
            arrnew:[],
            j:0,
        }
    },
    methods:{
        ...mapActions(indexState,["setLocation"]),
        random(){
            this.arroid = [];
            for(let i = 1 ; i<=this.imgarr.length ; i++){
                this.j = Math.floor(Math.random()*(this.imgarr.length-1))
                
                this.arroid.push(this.j)
            }
            console.log(this.arroid);
        }
    },
    mounted(){
        this.setLocation(15)
    },
}
</script>

<template>
    <!-- <button @click="random" type="button">btn</button> -->
    <div class="area">
        <div class="a" v-for="img in imgarr">
            <img :src="img">
        </div>
        <!-- <div class="a">
        </div>
        <div class="a 2">
            <img :src="img" v-for="img in imgarr2">
        </div>
        <div class="a 3">
            <img :src="img" v-for="img in imgarr3">
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
.area {
    width: 100%;
    height: auto;
    column-count: 3;
    .a {
        
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 80%;
        margin: 20px 20px;
        border-radius: 20px;
        &:hover{
            transition: 0.5s;
            width: 85%;
        }
        // display: flex;
    }
}
</style>
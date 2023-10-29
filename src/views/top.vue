<script>
import {mapState, mapActions} from 'pinia';
import indexState from "../stores/indexstate";
export default{
    data(){
        return{
            title:[
                "",
                "學習日誌",
                "v-text & v-model",
                "v-for",
                "v-on",
                "v-bind",
                "v-if",
                "watch",
                "pinia",
                "props 父傳子",
                "propsign 父傳子舉例",
                "emit 子傳父",
                "props & emit 子傳父傳子",
                "provide inject 父傳子的子",
                "記帳",
                "waterfall 瀑布流",
                "test1",
                "dessert 甜點刻板",
                "test2",
                "mini game"
            ]
        }
    },
    methods:{
        // ...mapActions(indexState,["setLocation"]),
    },
    computed:{
        ...mapState(indexState, ["location", "locationInfo"]),
    },
}
</script>

<template>
    <div class="area">
        
        <h1>{{ title[location] }}</h1>
        <input class="search" type="text" placeholder="search...">
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div class="icon">
        <i class="fa-brands fa-youtube" style="color: #ff0000;"></i>
        <i class="fa-brands fa-twitter" style="color: #0069ff;"></i>
        <i class="fa-brands fa-twitch" style="color: #8f008f;"></i>
        <i class="fa-brands fa-facebook" style="color: #0058ff;"></i>
    </div>

</template>

<style lang="scss" scoped>
    .area{
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        .search{
            width: 45%;
            height: 45%;
        }

        .fa-magnifying-glass{
            position: absolute;
            right: 5%;
            font-size: 20pt;
            cursor: pointer;
        }
    }
    .icon{
        width: 19%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;;
        .fa-brands{
            font-size: 32pt;
            cursor: pointer;
        }
    }
</style>
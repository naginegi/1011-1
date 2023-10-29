<script>
import {mapState, mapActions} from 'pinia';
import indexState from '../stores/indexstate';
export default{
    data(){
        return{
            point:0,
            ntd:0,
        }
    },
    methods:{
        ...mapActions(indexState,["setLocation"]),
        addpoint(){
            this.point+=1;
        }
    },
    //實際去監聽
    //當point+1時觸發，ntd=point*10
    watch:{
        point(){
            this.ntd = this.point*10
        }
    },
    //先暫存你的值，即使沒宣告也能使用
    //輸出需用return
    computed:{
        //日幣jyp，台幣ntd
        jyp(){
            return this.ntd*4.63
        }
    },
    /////////////////////////////////
    //生命週期
    beforeCreate(){
        console.log("beforeCreate："+this.point)
    },
    created(){
        console.log("created："+this.point)
    },
    beforeMount(){
        console.log("beforeMount："+this.point)
    },
    mounted(){
        console.log("mounted："+this.point);
        this.setLocation(7)
    },
    beforeUpdate(){
        console.log("beforeUpdate："+this.point)
    },
    updated(){
        console.log("updated："+this.point)
    },
    beforeUnmount(){
        console.log("beforeUnmount："+this.point)
    },
    unmounted(){
        console.log("unmounted："+this.point)
    },
    //////////////////////////////////
}
</script>

<template>
    <div class="t">
        <p>point:{{ this.point }}</p>
        <p>ntd:{{ this.ntd }}</p>
        <p>jyp:{{ this.jyp }}</p>
    </div>
<div class="circle" @click="addpoint">

</div>
<!-- <h1 v-if="this.point>10&&this.point<15">100</h1> -->
</template>

<style lang="scss" scoped>
.t{
    margin: 3% 5%;
}
.circle{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #c05c5c;
    pointer-events: auto;
    cursor: pointer;
    &:hover{
        scale: 1.01;//平均放大
    }
    &:active{
        scale: 0.99;//平均縮小
    }
}
</style>
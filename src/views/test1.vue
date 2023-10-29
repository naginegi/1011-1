<script>
import {mapState, mapActions} from 'pinia';
import indexState from '../stores/indexstate';
export default {
    data() {
        return {
            ballPosition: { x: 100, y: 100 }, // 初始位置
            ballVelocity: { x: 0, y: 0 }, // 初始速度
            gravity: 1, // 重力加速度
        };
    },
    mounted(){
        this.setLocation(16);
    },
    computed: {
        ballStyle() {
            return {
                left: this.ballPosition.x + 'px',
                top: this.ballPosition.y + 'px',
            };
        },
    },
    methods: {
        ...mapActions(indexState,["setLocation"]),
        applyGravity() {
            const timer = setInterval=(() => {
                // 模拟重力效果
                this.ballVelocity.y += this.gravity;
                this.ballPosition.y += this.ballVelocity.y;
                console.log(this.ballPosition)
            }, 500);
            if(this.ballPosition > 700){
                clearInterval(timer)
            }
            // 更新视图
            // this.$forceUpdate();
        },
    },
};
</script>
  
<template>
    <div class="area">
        <div class="ball" :style="ballStyle"></div>
        <button @click="applyGravity">btn</button>
    </div>
</template>
  
<style>
.area{
    width: 80%;
    height: 90%;
    border: 1px solid black;
    position: relative;
    .ball {
        width: 50px;
        height: 50px;
        background-color: red;
        position: absolute;
    }
    }
</style>
  
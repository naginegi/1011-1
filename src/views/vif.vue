<script>
import {mapState, mapActions} from 'pinia';
import indexState from '../stores/indexstate';
    export default{
        data(){
            return{
                car:false,
                house:"",
                house2:"",
                house3:"",

            }
        },
        mounted(){
        this.setLocation(6)
    },
    methods:{
        ...mapActions(indexState,["setLocation"]),
    },
    }
</script>

<template>
<div class="area">
    <div class="t1">
        <!-- v-if true時才建立標籤 -->
        <label for="">小名有車</label>
        <input type="checkbox" value="true" v-model="car">
        <span v-if="car">確實</span>
    </div>
    <!-- v-if 跟 v-else 自成一組 -->
    <div class="t2">
        <select v-model="house" name="" id="">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        <!-- 會判斷2次 -->
        <!-- house==0輸出000 以及 house==1輸出111否則222 -->
        <p v-if="house==0">000</p>
        <!--  -->
        <p v-if="house==1">111</p>
        <p v-else="house">222</p>
        <p>__</p>
    </div>  

    <div class="t3">
        <select v-model="house2" name="" id="">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        <!-- house2==0輸出000 否則判斷house2==1 -->
        <!-- 是則輸出111 否則判斷house==2 是則輸出222 -->
        <p v-if="house2==0">000</p>
        <p v-else-if="house2==1">111</p>
        <p v-else="house2">222</p>
        <p>__</p>
    </div>

    <div class="t4">
        <select v-model="house3" name="" id="">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        <!-- house3 是0輸出000 是1輸出111 是2輸出222 -->
        <p v-if="house3==0">000</p>
        <p v-if="house3==1">111</p>
        <p v-if="house3==2">222</p>
        <p>__</p>
    </div>

</div>
</template>

<style lang="scss" scoped>
.area{
    width: 80%;
    height: 100%;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25pt;
    
}
</style>
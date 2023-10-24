<script>
import test from "./test.vue"
export default{
    data(){
        return{
            arr:[0,1,2,3,4,5,6],
            textblock:"",
            // 
            lazytext:"",
            numbertext:0,
            trimtext:"",
            checkboxtext:[],
            radiotext:"",
        }
    },
    components:{

        test,
    },
    methods:{
        t(){
            console.log(this.numbertext)
        }
    }
}


</script>

<template>
    <div class="main">
        <!-- v-model v-text -->
        <h1>VtextandVmodel</h1>
        <!-- <h1 v-for="arr in arr">{{ arr }}</h1> -->
        <select v-model="textblock">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        
        <p>{{ this.textblock  }}</p>
        <input type="number" v-model="textblock">
        <test v-text="textblock" />

        <!-- lazy number trim -->
        <!-- lazy:離開作用區域時啟動，model是同步啟動 -->
        <p>v-model.lazy</p>
        <input type="text" v-model.lazy="lazytext">
        <p v-text="lazytext"></p>
        <!-- number:只能秀數字 -->
        <p>v-model.number</p>
        <input type="number" v-model.number="numbertext">
        <p v-text="numbertext"></p>
        <!-- trim:去掉頭尾空格 -->
        <p>v-model.trim</p>
        <input type="text" v-model.trim="trimtext">
        <p>{{ trimtext }}</p>
        
        <!-- checkbox -->
        <p>checkbox</p>
        <div class="checkbox">
            <label for="">早</label>
            <input type="checkbox" v-model="checkboxtext" name="" id="" value="b">
            <label for="">中</label>
            <input type="checkbox" v-model="checkboxtext" name="" id="" value="l">
            <label for="">晚</label>
            <input type="checkbox" v-model="checkboxtext" name="" id="" value="d">
            <p>{{ this.checkboxtext }}</p>
        </div>
        <!-- radio -->
        <p>radio</p>
        <div class="radio">
            <label for="">早</label>
            <input type="radio" v-model="radiotext" value="pork">
            <label for="">中</label>
            <input type="radio" v-model="radiotext" value="chi">
            <label for="">晚</label>
            <input type="radio" v-model="radiotext" value="fish">
            <p>{{ this.radiotext }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main{
    width: 80%;
    height: 90%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    input{
        margin-bottom: 10px;
    }
}
</style>
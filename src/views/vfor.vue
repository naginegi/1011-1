<script>
import {mapState, mapActions} from 'pinia';
import indexState from '../stores/indexstate';
export default{
    data(){
        return{
            arr1:[],
            i:0,
            arr2:[
                {
                    name:"zz",
                    age:66,
                    address:"z路z號z"
                },
                {
                    name:"yy",
                    age:33,
                    address:"y路y號y"
                },
                {
                    name:"xx",
                    age:22,
                    address:"x路x號x"
                },
            ]
        }
    },
    mounted(){
        this.setLocation(3)
    },
    methods:{
        ...mapActions(indexState,["setLocation"]),
        plus(){
            this.arr1.push(this.i++);
        },
        re(){
            this.i = 0
            this.arr1 = []
        }
    },
    components:{

    }
}
</script>

<template>
    <div class="main">

        <div class="arr1">
            <!-- v-for="arr in arr -->
            <!--    存到這裡 in 對這個陣列做 -->
            <p v-for="item in arr1">{{ item }}</p>
        </div>
        <button v-on:click="plus">plus</button>
        <button v-on:click="re">re</button>
        <!-- 陣列裡放物件表示方式 -->
        <div class="arr2">
            <ul v-for="x in arr2">
                <li>name：{{ x.name }}</li>
                <li>age：{{ x.age }}</li>
                <li>address：{{ x.address }}</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main{
        width: 80%;
        height: 90%;
        border: 1px solid black;
        .arr1{
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: space-around;
        }
        .arr2{
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: space-around;
        }
    }
</style>
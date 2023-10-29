<script>
import {mapState, mapActions} from 'pinia';
import indexState from '../stores/indexstate';
export default {
    data() {
        return {
            text:"",
            t:"",
            min:1,
            mid:"~",
            max:100,
            ans:0,
            reply:"",
        }
    },
    mounted(){
        this.randon();
        this.setLocation(4)
    },
    methods: {
        ...mapActions(indexState,["setLocation"]),
        display1(){
            this.t = this.text;
            this.display2();
        },
        display2(){
            console.log(this.t);
        },
        randon(){
            this.ans = Math.floor(Math.random()*100+1);
            console.log(this.ans)
        },
        guess(){
            if(this.reply == this.ans){
                this.min = "";
                this.mid = "答對";
                this.max = "";
                this.reply = ""; //清空輸入框
            }
            if(this.reply > this.max ){
                alert("too big")
            }
            if(this.reply < this.min ){
                alert("too small")
            }
            if(this.reply >this.ans&&this.reply<=this.max){
                this.max = this.reply;
                this.reply = ""; //清空輸入框
                // alert("big")
            }
            if(this.reply <this.ans&&this.reply>=this.min){
                this.min = this.reply;
                this.reply = ""; //清空輸入框
                // alert("small")
            }
        },
        re(){
            this.reply - "";
            this.min = "1";
            this.mid = "~";
            this.max = "100";
            this.randon();
        }
    },
    components: {

    }
}
</script>

<template >
    <div class="main" >
        <p>v-on</p>
        <input type="text" name="" id="" v-model="text">
        <p >display:{{ this.t }}</p>
        <button type="button" v-on:click="display1">btn</button>
        <p>============================================</p>
        <div class="guessnum">
            <div class="guessnum-text">
                <h2>猜數字</h2>
                <div class="t">    
                    <span>{{ min }}</span>
                    <span>{{ mid }}</span>
                    <span>{{ max }}</span>
                </div>
            </div>
            <input type="number" v-model="reply" >
            <button type="button" @click="guess">猜</button>
            <button type="button" @click="re">re</button>
        </div>


    </div>
</template>



<style lang="scss" scoped>
.main {
    width: 80%;
    height: 90%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    .guessnum{
        width: 60%;
        height: 60%;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .guessnum-text{
            width: 20%;
            height: 40%;
            margin-top: 10%;
            .t{
                width: 100%;
                height: 10%;
                display: flex;
                justify-content: center;
                margin-top: 35%;
            }
        }
        button{
            width: 15%;
            margin-top: 5%;
        }
    }
}
</style>
<script>
import {RouterLink,RouterView} from "vue-router";
import signup from "../ET/signup.vue";
import ET from "./ET.vue";
import {mapState, mapActions} from 'pinia';
import indexState from '../../stores/indexstate';
export default {
    data() {
        return {
            page:0,
            dataobj:[],
            input:{
                email:"",
                pw:"",
            }
        }
    },
    mounted(){
        const savedTransactions = localStorage.getItem("data");
        if(savedTransactions){
        this.dataobj = JSON.parse(savedTransactions);
        }
        this.setLocation(14)
    },
    methods: {
        ...mapActions(indexState,["setLocation"]),
        swit(){
            this.page = 1;
        },
        getobj(g){
            this.page=g.page;
            if(g.useremail != "" ){
                this.dataobj.push(g);
                localStorage.setItem('data', JSON.stringify(this.dataobj));
            }
            // console.log(this.dataobj)
        },
        login(){
            for(let i = 0 ; i<this.dataobj.length ; i++){
                if(this.dataobj[i].useremail == this.input.email){
                    // alert("login1")
                    if(this.dataobj[i].userpw == this.input.pw){
                        alert("login");
                        this.page=2;
                    }
                }
            }
        },
    },
    components: {
        signup,
        ET,
    }
}
</script>

<template>
        <div class="contain login" v-if="page==0">
            <div class="title">
                <h1>Expense Tracker</h1>
            </div>
            <div class="input email">
                <label for="">email</label>
                <input type="text" class="keyemail" placeholder="email" v-model="this.input.email">
            </div>
            <div class="input pw">
                <label for="">password</label>
                <input type="password" class="keypw" placeholder="password" v-model="this.input.pw">
            </div>
            <div class="btn">
                <button type="button" @click="swit">signup</button>
                <button type="button" @click="login">login</button>
            </div>
        </div>
        <div class="contain signup" v-if="page==1">
        <signup @get="getobj"/>
        </div>
        <div class="ET" v-if="page==2">
        <ET />
        </div>

</template>

<style lang="scss" scoped>
.area {
    width: 80%;
    height: 70%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;

    .contain {
        width: 50%;
        height: 90%;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            height: 15%;
            display: flex;
            justify-content: center;
            margin-top: 10%;
        }

        .input {
            height: 20%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }

        .btn {
            width: 40%;
            display: flex;
            justify-content: space-around;

        }
    }
    .ET{
        width: 100%;
        height: 100%;
        display: flex;
    }

}
</style>
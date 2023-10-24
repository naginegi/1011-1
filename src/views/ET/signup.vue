<script>
import {RouterLink,RouterView} from "vue-router";
import { jsx } from "vue/jsx-runtime";
export default {
    emits:[
        "get"
    ],
    data() {
        return {
            user:{
                useremail:"",
                userpw:"",
                userrepw:"",
                page:false,
            },
            // userdata:[

            
            // ],
            

        }
    },
    // mounted(){
    //     const savedTransactions = localStorage.getItem("user");
    //     if(savedTransactions){
    //     this.user = JSON.parse(savedTransactions);
    //     }
    // },
    methods: {
        signup(){
            if(this.user.userpw == this.user.userrepw){
                if(this.user.useremail != "" && this.user.userpw !="" && this.user.userrepw != ""){
                    // this.userdata.push(this.user)
                    // localStorage.setItem('user', JSON.stringify(this.user));
                    this.emitgo();
                    // this.clear();
                    alert("OK")
                }else{
                    alert("error")
                    this.clear();
                }
                
            }else{
                alert("error")
                this.clear();
            }
        },
        emitgo(){
            this.$emit("get",this.user)
        },
        cancal(){
            this.$emit("get",this.user)
        },
        clear(){
            this.user.useremail="";
            this.user.userpw="";
            this.user.userrepw="";
        },
    },
    components: {

    }
}
</script>

<template>
    <div class="title">
        <h1>Sign up</h1>
    </div>
    <div class="input email">
        <label for="">email</label>
        <input type="text" class="keyemail" placeholder="email" v-model="user.useremail">
    </div>
    <div class="input pw">
        <label for="">password</label>
        <input type="password" class="keypw" placeholder="password" v-model="user.userpw">
    </div>
    <div class="input repw">
        <label for="">repassword</label>
        <input type="password" class="keyrepw" placeholder="repassword" v-model="user.userrepw">
        
    </div>
    <div class="btn">
        <button type="button" @click="signup">sign up</button>
        <button type="button" @click="cancal">cancal</button>
    </div>
</template>

<style lang="scss" scoped>
.title{
    height: 15%;
    display: flex;
    justify-content: center;
    margin-top: 10%;
}
.input{
    height: 15%;
    display: flex;
    flex-direction: column;
    
}
</style>
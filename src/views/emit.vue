<script>
import emitchild from './emitchild.vue';
export default{
    data(){
        return{
            displaytext:"",
        }
    },
    methods:{
        //4. data為接收到的資料，將資料印出
        emitobj(data){
            console.log(data);
            this.displaytext = data;
        }
    },
    components:{
        emitchild,
    }
}
</script>

<template>
<div class="show">
    <p>{{ this.displaytext }}</p>
    <!-- 3.接收到子層來的"message"，將裡面帶著的資料傳進"emitobj"裡執行 -->
    <emitchild @message="emitobj"/>
    <input type="text">
</div>
</template>

<style lang="scss" scoped>
    .show{
        width: 300px;
        height: 400px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
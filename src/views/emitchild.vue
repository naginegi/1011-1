<script>
export default{
    data(){
        return{
            t:{
                text:"apple",
            }
        }
    },
    methods:{
        emitgo(){
            //2.告訴父層一個叫"message"的通知，裡面帶著this.text的資料
            this.$emit("message",this.text)
        }
    },
    components:{
    }
}
</script>

<template>
<div class="show2">
    <p>child</p>
    <!-- 1.按鈕按下，執行function -->
    <input type="text" name="" id="" v-model="text">
    <button type="button" @click="emitgo">push</button>
</div>
</template>

<style lang="scss" scoped>
.show2{
    width: 80%;
    height: 80%;
    border: 1px solid black;
    // display: flex;
}
</style>
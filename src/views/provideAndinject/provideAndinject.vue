<script>
import provideChild1 from './provideChild1.vue'
export default{
    data(){
        return{
            dataMsg:"message"
        }
    },
    components:{
        provideChild1,
    },
    provide(){
        return{
            msg:this.dataMsg,
        }
    }
}
</script>
<template>
<div class="t">
    <h1>fa</h1>
    <p>dataMsg:"message"</p>
    <provideChild1 />
</div>
</template>
<style lang="scss" scoped>
.t{
    width: 500px;
    height: 500px;
    border: 1px solid black;
}
</style>